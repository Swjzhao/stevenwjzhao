import Router from 'next/router';
import { Action, Dispatch } from 'redux';

import * as api from '../../api';
import { IUpdateUser } from '../../interface';
import * as types from '../constants';
import imageUpload from '../utils/ImageUploader';
import { clearStatus, setStatus } from './status.action';

/* eslint-disable-next-line */
export const updateUser =
  (file: File | null | undefined, data: IUpdateUser) =>
  async (dispatch: Dispatch<any | Action>) => {
    try {
      dispatch(setStatus({ status: 'loading' }));
      let avatarUrl = '';
      if (file) {
        const uploadPhoto = await imageUpload(file, 'avatar');
        avatarUrl = uploadPhoto.url;
      }
      let res;
      if (data._id) {
        if (avatarUrl) {
          res = await api.updateUser(data._id, { ...data, avatar: avatarUrl });
        } else {
          res = await api.updateUser(data._id, data);
        }
        dispatch({
          type: types.SHOW_SNACKBAR,
          payload: `${res.data.message}`,
        });
      } else {
        if (avatarUrl) {
          res = await api.updateMyself({ ...data, avatar: avatarUrl });
        } else {
          res = await api.updateMyself(data);
        }
        console.log(res);
        dispatch({
          type: types.SHOW_SNACKBAR,
          payload: `${res.data.message}`,
        });
        dispatch({ type: types.SET_USER, payload: res.data.user });
      }

      dispatch(clearStatus());
    } catch (err: any) {
      dispatch(setStatus({ status: 'error', error: err.response.data.message }));
    }
  };

// Admin controls
export const deleteUser = (id: string) => async (dispatch: Dispatch) => {
  try {
    setStatus({ status: 'loading' });
    const res = await api.deleteUser(id);
    dispatch({
      type: types.SHOW_SNACKBAR,
      payload: `${res.data.message}`,
    });
    Router.push({ pathname: '/' });
    clearStatus();
  } catch (err: any) {
    setStatus({ status: 'error', error: err.response.data.message });
  }
};
