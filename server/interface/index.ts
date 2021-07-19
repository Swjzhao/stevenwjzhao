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
