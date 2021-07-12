import { AnyAction } from 'redux';

import { IStatus } from '../../models';
import * as types from '../constants';

const statusReducer = (state:IStatus, action:AnyAction) => {
  switch (action.type) {
    case types.SET_STATUS:
      console.log(action.payload);
      return action.payload;
    default:
      return {};
  }
};

export default statusReducer;
