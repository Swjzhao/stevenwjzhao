import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { OAuth2Client } from 'google-auth-library';
import jwt from 'jsonwebtoken';
import _ from 'lodash';

import {
  generateAccessToken,
  generateActivateToken,
  generateRefreshToken,
} from '../config/generateToken';
import { sendEmail, sendResetEmail } from '../config/sendEmail';
import { IDecodedToken, IRequestUser } from '../interface';
import Users from '../models/user.model';

const {
  GOOGLE_CLIENT_ID,
  GOOGLE_PASS_KEY,
  FB_PASS_KEY,
  ACTIVE_TOKEN_SECRET,
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET,
  BASE_URL,
} = process.env;

const client = new OAuth2Client(`${process.env.GOOGLE_CLIENT_ID}`);

export const signUp = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const user = await Users.findOne({ email });
    if (user) {
      if (user.verified) {
        return res.status(400).json({ message: 'Email already exists. Please sign in' });
      }
      const activateToken = generateActivateToken({ newUser: user });
      const url = `${BASE_URL}/activate/${activateToken}`;
      const subject = 'Welcome! Please verify your email address.';
      await sendEmail(email, url, subject);

      return res.status(400).json({
        message: 'Email already exists. An verification email has been sent to your email',
      });
    }

    const hashPassword = await bcrypt.hash(password, 12);

    /* const newUser = await Users.create({
      ...req.body,
      password: hashPassword,
    }); */
    // newly signed up users will not persist login state until they verify their email
    const newUser = { name, email, password: hashPassword };
    return signUpMethod(newUser, res);
    /*
    return res.status(200).json({ message: 'Please verify your email. Check the spam' });
    */
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const signIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await Users.findOne({ email });
    if (!user) return res.status(400).json({ message: 'This account does not exist.' });
    const correct = await bcrypt.compare(password, user.password);
    if (!correct) {
      return res.status(400).json({ message: 'Password not correct' });
    }
    return signInMethod(user, res);
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};

export const refreshAuth = async (req: Request, res: Response) => {
  try {
    const rfToken = req.cookies.refreshtoken;
    if (!rfToken) return res.status(400).json({ message: 'Not token found' });
    console.log(jwt.verify(rfToken, `${REFRESH_TOKEN_SECRET}`));
    const decoded = <IDecodedToken>jwt.verify(rfToken, `${REFRESH_TOKEN_SECRET}`);
    if (!decoded.sub) return res.status(400).json({ message: 'Please login now!' });

    const user = await Users.findById(decoded.sub).select('-password');
    if (!user) return res.status(400).json({ message: 'This account does not exist.' });

    const newRefreshToken = generateRefreshToken({ sub: user._id });

    const accessToken = generateAccessToken({ sub: user._id });

    res.cookie('refreshtoken', newRefreshToken, {
      httpOnly: true,
      path: '/auth/refresh_token',
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30days
    });

    return res.json({ token: accessToken, user });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};
export const activateAccount = async (req: Request, res: Response) => {
  try {
    const { activateToken } = req.body;

    const decoded = <IDecodedToken>jwt.verify(activateToken, `${ACTIVE_TOKEN_SECRET}`);
    const { newUser } = decoded;

    if (!newUser) return res.status(400).json({ message: 'Invalid authentication.' });

    const user = await Users.findOne({ email: newUser.email });
    if (user) {
      const accessToken = generateAccessToken({ sub: user._id });

      const resUser = _.omit(user.toObject(), ['password']);
      return res.status(200).json({ token: accessToken, user: resUser });
    }
    const createdUser = new Users(newUser);

    await createdUser.save();

    const resUser = _.omit(createdUser.toObject(), ['password']);

    const accessToken = generateAccessToken({ sub: user._id });

    return res.status(200).json({ token: accessToken, user: resUser });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};

export const verifyToken = async (req: Request, res: Response) => {
  try {
    const token: string = req?.headers?.authorization?.split(' ')[1]!;
    const decoded = jwt.verify(token, `${ACCESS_TOKEN_SECRET}`);
    console.log(decoded);
    return res.status(200).json({ decoded });
  } catch (err: any) {
    return refreshAuth(req, res);
  }
};

export const signOut = async (req: Request, res: Response) => {
  try {
    res.clearCookie('refreshtoken', { path: '/auth/refresh_token' });
    return res.json({ message: 'Logged out!' });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};

export const signInWithThirdParty = async (req: Request, res: Response) => {
  try {
    const { source } = req.body;

    switch (source) {
      case 'google':
        return signInWithGoogle(req, res);
      case 'facebook':
        return signInWithFacebook(req, res);
      default:
        return res.status(400).json({ message: 'Not supported' });
    }
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};

export const sendResetPassword = async (req: Request, res: Response) => {
  try {
    const user = await Users.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ message: 'Email does not existt.' });
    }
    const activateToken = generateActivateToken({ newUser: user });
    const url = `${BASE_URL}/reset-password/${activateToken}`;
    const subject = 'Reset password for WeAreStillDreamers';
    await sendResetEmail(user.email, url, subject);
    return res.status(200).json({ message: 'A reset email has been sent to your email.' });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};

export const resetPassword = async (req: IRequestUser, res: Response) => {
  const user = await Users.findOne({ _id: req.id });
  if (!user) return res.status(400).json({ message: 'Invalid Form.' });

  if (user.signInMethod !== 'email')
    return res.status(400).json({
      message: `This account was signed in with ${user.signInMethod}.`,
    });

  try {
    const { password } = req.body;
    const passwordHash = await bcrypt.hash(password, 12);

    await Users.findOneAndUpdate(
      { _id: req.id },
      {
        password: passwordHash,
      }
    );

    return res.status(200).json({ message: 'Reset Password Successful!' });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};

const signInWithGoogle = async (req: Request, res: Response) => {
  try {
    const { token } = req.body;
    const verify = await client.verifyIdToken({
      idToken: token,
      audience: `${GOOGLE_CLIENT_ID}`,
    });

    const { email, email_verified, name, picture } = <any>verify.getPayload();

    if (!email_verified) return res.status(500).json({ message: 'Email verification failed.' });

    const password = `${email}${GOOGLE_PASS_KEY}`;
    const passwordHash = await bcrypt.hash(password, 12);

    const user = await Users.findOne({ email });

    if (user) {
      return signInMethod(user, res);
    }
    const newUser = {
      name,
      email,
      password: passwordHash,
      avatar: picture,
      signInMethod: 'google',
    };
    return signUpMethod(newUser, res);
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};
const signInWithFacebook = async (req: Request, res: Response) => {
  try {
    const { token, userID } = req.body;

    const URL = `
        https://graph.facebook.com/v3.0/${userID}/?fields=id,name,email,picture&access_token=${token}
      `;

    const data = await fetch(URL)
      .then((response) => response.json())
      .then((response) => {
        return response;
      });

    const { email, name, picture } = data;

    const password = `${email}${FB_PASS_KEY}`;
    const passwordHash = await bcrypt.hash(password, 12);

    const user = await Users.findOne({ email });

    if (user) {
      return signInMethod(user, res);
    }
    const newUser = {
      name,
      email,
      password: passwordHash,
      avatar: picture.data.url,
      signInMethod: 'facebook',
    };
    return signUpMethod({ ...newUser }, res);
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};

const signInMethod = async (user: any, res: Response) => {
  const resUser = _.omit(user.toObject(), ['password']);
  const accessToken = generateAccessToken({ sub: user._id });
  const refreshToken = generateRefreshToken({ sub: user._id });
  // const decoded = jwt.verify(accessToken, `${ACCESS_TOKEN_SECRET}`);
  // console.log(refreshToken);
  res.set('Authorization', `Bearer ${accessToken}`);
  // Only verified users get a refresh token
  if (user.verified) {
    res.cookie('refreshtoken', refreshToken, {
      httpOnly: true,
      path: '/auth/refresh_token',
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30days
    });
  } else {
    const activateToken = generateActivateToken({ newUser: user });
    const url = `${BASE_URL}/activate/${activateToken}`;
    const subject = 'Welcome! Please verify your email address.';
    res.cookie('refreshtoken', refreshToken, {
      httpOnly: true,
      path: '/auth/refresh_token',
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30days
    });
    // await sendEmail(user.email, url, subject);
  }
  //  console.log(decoded);
  // const refresh_token = generateRefreshToken({id: user._id})
  return res.status(200).json({ user: resUser, token: accessToken });
};

const signUpMethod = async (user: any, res: Response) => {
  const activateToken = generateActivateToken({ newUser: user });
  const url = `${BASE_URL}/activate/${activateToken}`;
  const subject = 'Welcome! Please verify your email address.';
  await sendEmail(user.email, url, subject);

  const createUser = await Users.create({
    ...user,
  });
  const accessToken = generateAccessToken({ sub: createUser._id });
  const resUser = _.omit(createUser.toObject(), ['password']);
  return res.status(200).json({ user: resUser, token: accessToken });
};
