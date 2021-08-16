import { Dispatch } from 'redux';

import * as api from '../../api';
import { IUpdateUser } from '../../interface';
import * as types from '../constants';
import { clearStatus, setStatus } from './status.action';
/* eslint-disable-next-line */
export const updateUser = (data: IUpdateUser) => async (dispatch: Dispatch) => {
  try {
    setStatus({ status: 'loading' });
    if (data._id) {
      const res = await api.updateUser(data._id, data);
      dispatch({
        type: types.SHOW_SNACKBAR,
        payload: `${res.data.message}`,
      });
    } else {
      const res = await api.updateMyself(data);
      console.log(res);
      dispatch({
        type: types.SHOW_SNACKBAR,
        payload: `${res.data.message}`,
      });
      dispatch({ type: types.SET_USER, payload: res.data.user });
    }

    clearStatus();
  } catch (err: any) {
    setStatus({ status: 'error', error: err.response.data.message });
  }
};
