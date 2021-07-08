import { Action, Dispatch } from 'redux';

import * as types from '../constants';

export const setErrors = (err: Error) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: types.SET_ERROR,
    payload: err?.message,
  });
};

export const clearErrors = (err: Error) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: types.CLEAR_ERROR,
  });
};
