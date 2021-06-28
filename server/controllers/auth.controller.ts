import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import _ from 'lodash';

import { generateAccessToken, generateActiveToken, generateRefreshToken } from '../config/generateToken';
import Users from '../models/user.model';

export const signUp = async (req: Request, res: Response) => {
  try {
    const { accountId, password } = req.body;
    const user = await Users.find({ accountId });
    if (!user) return res.status(400).json({ msg: 'Email already exists. Please sign in' });
    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = await Users.create({
      ...req.body,
      password: hashPassword,
    });

    const token = generateActiveToken({ role: newUser.role, sub: newUser._id });

    const resUser = _.omit(newUser.toObject(), ['password']);
    return res.status(200).json({ user: resUser, token });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

export const signIn = async (req: Request, res: Response) => {
  try {
    const { account, password } = req.body;

    const user = await Users.findOne({ account });
    if (!user) return res.status(400).json({ msg: 'This account does not exits.' });
  } catch (err: any) {
    return res.status(500).json({ msg: err.message });
  }
};
