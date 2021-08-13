import { Request } from 'express';

export interface INewUser {
  name: string;
  email: string;
  password: string;
}

export interface IDecodedToken {
  sub?: string;
  newUser?: INewUser;
  iat: number;
  exp: number;
}

export interface IRequestUser extends Request {
  id?: string;
  role?: 0 | 1 | 2 | 3; // general, writer, manager, admin
  pass?: string;
  email?: string;
}
