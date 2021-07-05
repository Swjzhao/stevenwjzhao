import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import _ from 'lodash';

import { generateAccessToken, generateActiveToken, generateRefreshToken } from '../config/generateToken';
import { IDecodedToken } from '../interface';
import Users from '../models/user.model';

const { ACTIVE_TOKEN_SECRET, ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = process.env;

export const signUp = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await Users.find({ email });
    console.log(password);
    if (!user) return res.status(400).json({ message: 'Email already exists. Please sign in' });
    if (!password.match('.{8,}')) {
      return res.status(400).json({ message: 'Password must contain minimum eight characters' });
    }
    const hashPassword = await bcrypt.hash(password, 12);

    const newUser = await Users.create({
      ...req.body,
      password: hashPassword,
    });

    const token = generateActiveToken({ role: newUser.role, sub: newUser._id });

    const resUser = _.omit(newUser.toObject(), ['password']);
    return res.status(200).json({ user: resUser, token });
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
    const resUser = _.omit(user.toObject(), ['password']);
    const accessToken = generateAccessToken({ sub: user._id });
    const refreshToken = generateRefreshToken({ sub: user._id });
    const decoded = jwt.verify(accessToken, `${ACCESS_TOKEN_SECRET}`);
    res.set('Authorization', `Bearer ${accessToken}`);
    res.cookie('refreshtoken', refreshToken, {
      httpOnly: true,
      path: '/auth/refresh_token',
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30days
    });
    console.log(decoded);
    // const refresh_token = generateRefreshToken({id: user._id})
    return res.status(200).json({ resUser, accessToken });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};

export const refreshToken = async (req: Request, res: Response) => {
  try {
    const rfToken = req.cookies.refreshtoken;
    if (!rfToken) return res.status(400).json({ msg: 'Not token found' });

    const decoded = <IDecodedToken>jwt.verify(rfToken, `${process.env.REFRESH_TOKEN_SECRET}`);
    if (!decoded.sub) return res.status(400).json({ msg: 'Please login now!' });

    const user = await Users.findById(decoded.sub).select('-password');
    if (!user) return res.status(400).json({ msg: 'This account does not exist.' });

    const accessToken = generateAccessToken({ id: user._id });
    res.cookie('refreshtoken', refreshToken, {
      httpOnly: true,
      path: '/auth/refresh_token',
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30days
    });

    return res.json({ accessToken, user });
  } catch (err: any) {
    return res.status(500).json({ msg: err.message });
  }
};

export const verifyToken = async (req: Request, res: Response) => {
  try {
    const token:string = req?.headers?.authorization?.split(' ')[1]!;
    const decoded = jwt.verify(token, `${ACCESS_TOKEN_SECRET}`);
    console.log(decoded);
    return res.status(200).json({ decoded });
  } catch (err: any) {
    return refreshToken(req, res);
  }
};
