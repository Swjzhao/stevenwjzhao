import { AnyAction } from 'redux';

import { IUser } from '../../models';
import * as types from '../constants';

const userReducer = (state: {}, action: AnyAction): IUser|null => {
  switch (action.type) {
    case types.SET_USER:
      return action.payload;
    case types.SIGN_OUT:
      localStorage.remove('token');
      return null;
    default:
      return null;
  }
};

export default userReducer;
