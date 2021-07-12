export interface IUserCredientials {
  name?:string,
  email: string
  password: string
}

export interface IUser extends IUserCredientials {
  name: string,
  email: string,
  signInMethod: string,
  role: number,
  verified: boolean,
  avatar: string,
  _id: string
}

export interface IPatchUser extends IUserCredientials {
  name?: string,
  signInMethod?: string,
  role?: number,
  verified?: boolean,
  avatar?: string,
}

export interface IStatus {
  status?: 'loading' | 'error',
  errors?: string[]
}
