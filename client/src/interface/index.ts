import rootReducer from '../store/reducers/index';

export type RootStore = ReturnType<typeof rootReducer>;

export interface IUserCredientials {
  name?: string;
  email: string;
  password: string;
}

export interface IUpdateUser {
  _id: string;
  role?: number;
  name?: string;
  avatar?: string;
}

export interface IUser extends IUpdateUser {
  name: string;
  email: string;
  signInMethod: string;
  role: number;
  verified: boolean;
  avatar: string;
  _id: string;
  createdAt: Date;
}

export interface IPatchUser {
  name?: string;
  signInMethod?: string;
  role?: number;
  verified?: boolean;
  avatar?: string;
}

export interface IStatus {
  status?: 'loading' | 'error' | 'success';
  error?: string;
}

export interface IParams {
  page: string;
  slug: string;
}

export interface IThirdPartyLogin {
  token: string;
  source: 'google' | 'facebook';
  userID?: string;
}
