import { Action, Dispatch } from 'redux';

import * as api from '../../api';
import { IUserCredientials } from '../../interface';
import * as types from '../constants';
import { clearStatus, setStatus } from './status.action';

export const activate = (token: string) => async (dispatch: Dispatch<any | Action>) => {
  dispatch(setStatus({ status: 'loading' }));

  const res = await api.activateAccount(token);

  dispatch({ type: types.SET_USER, payload: res.data.user });
  dispatch({
    type: types.SHOW_SNACKBAR,
    payload: '🔐 Activated Account',
  });
  dispatch(clearStatus());
  if (typeof window !== 'undefined') {
    localStorage.setItem('token', `Bearer ${res.data.token}`);
  }
};

export const signIn = (data: IUserCredientials) => async (dispatch: Dispatch<any | Action>) => {
  try {
    dispatch(setStatus({ status: 'loading' }));

    const res = await api.signIn(data);

    dispatch({ type: types.SET_USER, payload: res.data.user });
    dispatch({
      type: types.SHOW_SNACKBAR,
      payload: 'Signed In Successfully',
    });
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
    dispatch({
      type: types.SHOW_SNACKBAR,
      payload: 'Signed In Successfully',
    });
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

    const res = await api.getRefreshToken();

    localStorage.setItem('token', `Bearer ${res.data.token}`);

    dispatch({ type: types.SET_USER, payload: res.data.user });

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
    dispatch({
      type: types.SHOW_SNACKBAR,
      payload: 'Signed out',
    });
    // window.location.href = '/';
  } catch (err: any) {
    dispatch(setStatus({ status: 'error', error: err.response.data.message }));
  }
};

export const googleSignIn = (token: string) => async (dispatch: Dispatch<any | Action>) => {
  try {
    dispatch(setStatus({ status: 'loading' }));
    const res = await api.signInWithThirdParty({ token, source: 'google' });
    dispatch({ type: types.SET_USER, payload: res.data.user });
    dispatch(clearStatus());
  } catch (err: any) {
    dispatch(setStatus({ status: 'error', error: err.response.data.message }));
  }
};

export const facebookSignIn =
  (token: string, userID: string) => async (dispatch: Dispatch<any | Action>) => {
    try {
      dispatch(setStatus({ status: 'loading' }));
      const res = await api.signInWithThirdParty({ token, userID, source: 'facebook' });
      dispatch({ type: types.SET_USER, payload: res.data.user });
      dispatch(clearStatus());
    } catch (err: any) {
      dispatch(setStatus({ status: 'error', error: err.response.data.message }));
    }
  };

export const resetPassword = (email: string) => async (dispatch: Dispatch<any | Action>) => {
  try {
    dispatch(setStatus({ status: 'loading' }));

    const res = await api.resetPassword(email);
    dispatch({
      type: types.SHOW_SNACKBAR,
      payload: `${res.data.message}`,
    });
    dispatch(clearStatus());
  } catch (err: any) {
    console.log(err);
    dispatch(setStatus({ status: 'error', error: err.response.data.message }));
  }
};

export const changePassword = (password: string) => async (dispatch: Dispatch<any | Action>) => {
  await api.changePassword(password);
  dispatch({
    type: types.SHOW_SNACKBAR,
    payload: 'Password Changed',
  });
};
