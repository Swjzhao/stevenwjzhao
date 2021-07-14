import { AnyAction } from 'redux';

import { IUser } from '../../models';
import * as types from '../constants';

const userReducer = (state: IUser | null, action: AnyAction): IUser | null => {
  switch (action.type) {
    case types.SET_USER:
      return action.payload;
    case types.SIGN_OUT:

      return null;
    default:
      return state ?? null;
  }
};

export default userReducer;
