import bcrypt from 'bcrypt';
import { Response } from 'express';
import _ from 'lodash';

import { IRequestUser } from '../interface';
import Users from '../models/user.model';

export const getUser = async (req: IRequestUser, res: Response) => {
  try {
    const user = await Users.findById(req.params.id).select(
      'name email signInMethod avatar verified role'
    );
    return res.status(200).json(user);
  } catch (err: any) {
    return res.status(500).json({ msg: err.message });
  }
};

export const updateUser = async (req: IRequestUser, res: Response) => {
  if (!req.id) return res.status(400).json({ msg: 'Invalid Form.' });

  const { avatar, role, name } = req.body;
  let updatedUser;
  try {
    if (req.params.id) {
      const user = await Users.findOne({ _id: req.params.id });

      // Even User Mod and Admin shouldnt modified everything
      if (req.role === 3) {
        if (user.role === 3)
          return res
            .status(403)
            .json({ msg: 'Cannot modify other admins, please contact site owner' });

        updatedUser = await Users.findOneAndUpdate(
          { _id: req.params.id },
          { avatar, role, name },
          { new: true, omitUndefined: true }
        );
      } else {
        if (role && role > 2)
          return res.status(403).json({ msg: 'Only Admin can appoint user mod and admin' });
        if (user.role === 3)
          return res.status(403).json({ msg: 'Cannot modify admins, please contact site owner' });

        updatedUser = await Users.findOneAndUpdate(
          { _id: req.params.id },
          { avatar, role, name },
          { new: true, omitUndefined: true }
        );
      }
    } else {
      updatedUser = await Users.findOneAndUpdate(
        { _id: req.id },
        { avatar, name },
        { new: true, omitUndefined: true }
      );
    }
    return res.status(200).json({ user: updatedUser, msg: 'Update Success!' });
  } catch (err: any) {
    return res.status(500).json({ msg: err.message });
  }
};
export const resetPassword = async (req: IRequestUser, res: Response) => {
  const user = await Users.findOne({ _id: req.id });
  if (!user) return res.status(400).json({ msg: 'Invalid Form.' });

  if (user.signInMethod !== 'email')
    return res.status(400).json({
      msg: `This account was signed in with ${user.signInMethod}.`,
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

    return res.status(200).json({ msg: 'Reset Password Successful!' });
  } catch (err: any) {
    return res.status(500).json({ msg: err.message });
  }
};