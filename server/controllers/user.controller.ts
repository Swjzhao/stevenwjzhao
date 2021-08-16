import bcrypt from 'bcrypt';
import { Response } from 'express';
import _ from 'lodash';

import { IRequestUser } from '../interface';
import Users from '../models/user.model';

export const getUser = async (req: IRequestUser, res: Response) => {
  try {
    const user = await Users.findById(req.params.id).select(
      'name email signInMethod avatar verified role createdAt'
    );
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json(user);
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};

export const updateUser = async (req: IRequestUser, res: Response) => {
  if (!req.id) return res.status(400).json({ message: 'Invalid Form.' });

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
            .json({ message: 'Cannot modify other admins, please contact site owner' });

        updatedUser = await Users.findOneAndUpdate(
          { _id: req.params.id },
          { avatar, role, name },
          { new: true, omitUndefined: true }
        );
      } else {
        if (role && role > 2)
          return res.status(403).json({ message: 'Only Admin can appoint user mod and admin' });
        if (user.role === 3)
          return res
            .status(403)
            .json({ message: 'Cannot modify admins, please contact site owner' });

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
    return res.status(200).json({ user: updatedUser, message: 'Update Success!' });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};

export const deleteUser = async (req: IRequestUser, res: Response) => {
  if (!req.id) return res.status(400).json({ message: 'Invalid Form.' });

  const { avatar, role, name } = req.body;
  try {
    if (req.params.id) {
      const user = await Users.findOne({ _id: req.params.id });

      // Even User Mod and Admin shouldnt modified everything
      if (req.role === 3) {
        if (user.role === 3)
          return res
            .status(403)
            .json({ message: 'Cannot modify other admins, please contact site owner' });
      } else {
        if (user.role === 3)
          return res
            .status(403)
            .json({ message: 'Cannot modify admins, please contact site owner' });

        await Users.findByIdAndRemove(req.params.id);
      }
    } else {
      await Users.findByIdAndRemove(req.id);
    }
    return res.status(200).json({ message: 'Delete user success!' });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};
