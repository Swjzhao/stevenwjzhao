import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { IDecodedToken, IRequestUser } from '../interface';
import Users from '../models/user.model';

const { ACCESS_TOKEN_SECRET } = process.env;

export const authChecker = async (req: IRequestUser, res: Response, next: NextFunction) => {
  try {
    const token = `${req.headers?.authorization?.split(' ')[1]}`;
    const tokenType = token.length < 500;

    if (token && tokenType) {
      const decoded = <IDecodedToken>jwt.verify(token, `${ACCESS_TOKEN_SECRET}`);
      req.id = decoded.sub;
    }
    next();
  } catch (err) {
    console.log(err);

    res.status(403).send(err);
  }
};
export const userModChecker = async (req: IRequestUser, res: Response, next: NextFunction) => {
  try {
    const token = `${req.headers?.authorization?.split(' ')[1]}`;
    const tokenType = token.length < 500;

    if (token && tokenType) {
      const decoded = <IDecodedToken>jwt.verify(token, `${ACCESS_TOKEN_SECRET}`);
      req.id = decoded.sub;
      const user = await Users.findOne({ _id: decoded.sub });
      if (!user) return res.status(400).json({ message: 'User does not exist.' });

      if (user.role < 2) {
        throw new Error('Forbidden');
      }

      req.role = user.role;
    } else {
      throw new Error('Wrong Token');
    }
    next();
  } catch (err) {
    console.log(err);
    res.status(403).json({ message: err.message });
  }

  return res;
};

export const adminChecker = async (req: IRequestUser, res: Response, next: NextFunction) => {
  try {
    const token = `${req.headers?.authorization?.split(' ')[1]}`;
    const tokenType = token.length < 500;

    if (token && tokenType) {
      const decoded = <IDecodedToken>jwt.verify(token, `${ACCESS_TOKEN_SECRET}`);
      req.id = decoded.sub;
      const user = await Users.findOne({ _id: decoded.sub });
      if (!user) return res.status(400).json({ message: 'User does not exist.' });

      if (user.role < 3) {
        throw new Error('Forbidden');
      }
      req.role = user.role;
    } else {
      throw new Error('Wrong Token');
    }
    next();
  } catch (err) {
    console.log(err);
    res.status(403).json({ message: err.message });
  }
  return res;
};
