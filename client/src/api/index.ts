import axios from 'axios';

import { IThirdPartyLogin } from '../models/index';

axios.defaults.withCredentials = true;

// const proxyUrl = 'https://cors-anywhere-steven.herokuapp.com/';
axios.defaults.baseURL = 'http://localhost:5000';
// http://localhost:5000

export const getCurrentUserData = () => axios.get('/user/get');
export const getUser = (id: string) => axios.get(`/user/${id}`);
export const updateUser = (id: string, data: any) => axios.patch(`/user/${id}`);
export const deleteUser = (id: string, data: any) => axios.delete(`/user/${id}`);

export const signIn = (data: any) => axios.post('/auth/sign_in', data);
export const signUp = (data: any) => axios.post('/auth/sign_up', data);
export const signOut = () => axios.get('/auth/sign_out');
export const getRefreshToken = () => axios.get('/auth/refresh_token');
export const activateAccount = (token: string) =>
  axios.post('/auth/activate', { activateToken: token });
export const signInWithThirdParty = (data: IThirdPartyLogin) =>
  axios.post('/auth/sign_in_with_third_party', data);
export const signInWithToken = (data: any) => axios.post('/auth/signInWithToken', data);
export const resetPassword = (id: string) => axios.get('/auth/reset_password');
