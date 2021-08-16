import { Dispatch } from 'redux';

import * as api from '../../api';
import { IUpdateUser } from '../../interface';
import { clearStatus, setStatus } from './status.action';

/* eslint-disable-next-line */
export const updateUser = (data: IUpdateUser) => async (dispatch: Dispatch) => {
  try {
    setStatus({ status: 'loading' });
    const res = await api.updateUser(data._id, data);
    clearStatus();
  } catch (err: any) {
    setStatus({ status: 'error', error: err.response.data.message });
  }
};
