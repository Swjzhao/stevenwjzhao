import { Action, Dispatch } from 'redux';

import { IStatus } from '../../interface';
import * as types from '../constants';

export const setStatus = (data: IStatus) => (dispatch: Dispatch<Action>) => {
  return dispatch({ type: types.SET_STATUS, payload: data });
};

export const clearStatus = () => (dispatch: Dispatch<Action>) =>
  dispatch({ type: types.CLEAR_STATUS });
