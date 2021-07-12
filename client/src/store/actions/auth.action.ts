import { Action, Dispatch } from 'redux';

import * as api from '../../api';
import { IUserCredientials } from '../../models';
import * as types from '../constants';
import { clearStatus, setStatus } from './status.action';

export const signIn = (data: IUserCredientials) => async (dispatch: Dispatch<Action>) => {
  try {
    dispatch(setStatus({ status: 'loading' }));

    const res = await api.signIn(data);

    dispatch({ type: types.SET_USER, payload: res.data.user });

    dispatch(clearStatus());
    localStorage.setItem('token', `Bearer ${res.data.token}`);
  } catch (err: any) {
    dispatch(setStatus({ status: 'error', error: err.response.data.message }));
  }
};

export const signUp = (data: IUserCredientials) => async (dispatch: Dispatch<Action>) => {
  try {
    dispatch(setStatus({ status: 'loading' }));
    const res = await api.signUp(data);
    dispatch({ type: types.SET_USER, payload: res.data.user });
    localStorage.setItem('token', `Bearer ${res.data.token}`);
    dispatch(clearStatus());
  } catch (err: any) {
    dispatch(setStatus({ status: 'error', error: err.response.data.message }));
  }
};
export const refreshToken = () => async (dispatch: Dispatch<Action>) => {
  const token = localStorage.getItem('token');
  if (!token) return;

  try {
    dispatch(setStatus({ status: 'loading' }));

    // const res = await getAPI('refresh_token');

    // dispatch({ type: AUTH, payload: res.data });

    dispatch(clearStatus());
  } catch (err: any) {
    dispatch(setStatus({ status: 'error', error: err.response.data.message }));
  }
};

export const logout = () => async (dispatch: Dispatch<Action>) => {
  try {
    localStorage.removeItem('logged');
    // await getAPI('logout');
    window.location.href = '/';
  } catch (err: any) {
    dispatch(setStatus({ status: 'error', errors: err.response.data.message }));
  }
};

export const googleSignIn = (token: string) => async (dispatch: Dispatch<Action>) => {
  try {
    dispatch(setStatus({ status: 'loading' }));
    dispatch(clearStatus());
  } catch (err: any) {
    dispatch(setStatus({ status: 'error', errors: err.response.data.message }));
  }
};

export const facebookSignIn = (token: string, userID: string) => async (dispatch: Dispatch<Action>) => {
  try {
    dispatch(setStatus({ status: 'loading' }));
    dispatch(clearStatus());
  } catch (err: any) {
    dispatch(setStatus({ status: 'error', errors: err.response.data.message }));
  }
};
