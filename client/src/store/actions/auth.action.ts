import { Action, Dispatch } from 'redux';

import * as api from '../../api';
import { IUserCredientials } from '../../models';
import * as types from '../constants';
import { clearStatus, setStatus } from './status.action';

export const signIn = (data: IUserCredientials) => async (dispatch: Dispatch<any | Action>) => {
  try {
    dispatch(setStatus({ status: 'loading' }));

    const res = await api.signIn(data);

    dispatch({ type: types.SET_USER, payload: res.data.user });

    dispatch(clearStatus());
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', `Bearer ${res.data.token}`);
    }
  } catch (err: any) {
    dispatch(setStatus({ status: 'error', error: err.response.data.message }));
  }
};

export const signUp = (data: IUserCredientials) => async (dispatch: Dispatch<any | Action>) => {
  try {
    dispatch(setStatus({ status: 'loading' }));
    const res = await api.signUp(data);
    dispatch({ type: types.SET_USER, payload: res.data.user });
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', `Bearer ${res.data.token}`);
    }
    dispatch(clearStatus());
  } catch (err: any) {
    dispatch(setStatus({ status: 'error', error: err.response.data.message }));
  }
};
export const refreshToken = () => async (dispatch: Dispatch<any | Action>) => {
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

export const signOut = () => async (dispatch: Dispatch<any | Action>) => {
  try {
    // localStorage.removeItem('token');
    // await getAPI('logout');
    const res = await api.signOut();
    dispatch({ type: types.SIGN_OUT });
    // window.location.href = '/';
  } catch (err: any) {
    console.log(err);
    dispatch(setStatus({ status: 'error', errors: err.response.data.message }));
  }
};

export const googleSignIn = (token: string) => async (dispatch: Dispatch<any | Action>) => {
  try {
    dispatch(setStatus({ status: 'loading' }));
    dispatch(clearStatus());
  } catch (err: any) {
    dispatch(setStatus({ status: 'error', errors: err.response.data.message }));
  }
};

export const facebookSignIn = (token: string, userID: string) => async (dispatch: Dispatch<any | Action>) => {
  try {
    dispatch(setStatus({ status: 'loading' }));
    dispatch(clearStatus());
  } catch (err: any) {
    dispatch(setStatus({ status: 'error', errors: err.response.data.message }));
  }
};
