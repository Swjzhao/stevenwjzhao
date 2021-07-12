import { AnyAction } from 'redux';

import { IUser } from '../../models';
import * as types from '../constants';

const userReducer = (state: IUser | null, action: AnyAction): IUser | null => {
  console.log(action.type);
  switch (action.type) {
    case types.SET_USER:
      console.log(action.payload);
      return action.payload;
    case types.SIGN_OUT:
      localStorage.remove('token');
      return null;
    default:
      return state ?? null;
  }
};

export default userReducer;
