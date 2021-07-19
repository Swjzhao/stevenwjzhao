import { Dispatch } from 'redux';

import * as api from '../../api';
import { IUser } from '../../models';
import { clearStatus, setStatus } from './status.action';

export const resetPassword = (newPassword: string) => async (dispatch: Dispatch) => {
  try {
    setStatus({ status: 'loading' });
    const res = await api.resetPassword(newPassword);
    clearStatus();
  } catch (err: any) {
    setStatus({ status: 'error', error: err.response.data.message });
  }
};

export const updateUser = (data: IUser) => async (dispatch: Dispatch) => {
  try {
    setStatus({ status: 'loading' });
    const res = await api.updateUser(data._id, data);
    clearStatus();
  } catch (err: any) {
    setStatus({ status: 'error', error: err.response.data.message });
  }
};
