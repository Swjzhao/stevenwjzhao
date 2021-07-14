import axios from 'axios';

const proxyUrl = 'https://cors-anywhere-steven.herokuapp.com/';
axios.defaults.baseURL = process.env.REACT_APP_ENV !== 'dev' ?
  `${proxyUrl}https://travel-app-steven-api.herokuapp.com` :
  'http://localhost:5000';
// http://localhost:5000

const token = localStorage.getItem('token');
if (token) {
  const bearerToken = `Bearer ${token}`;
  axios.defaults.headers.common.Authorization = bearerToken;
}

export const getCurrentUserData = () => axios.get('/user/get');
export const getUser = (id: string) => axios.get(`/user/${id}`);
export const updateUser = (id: string, data:any) => axios.patch(`/user/${id}`);
export const deleteUser = (id: string, data: any) => axios.delete(`/user/${id}`);

export const signIn = (data:any) => axios.post('/auth/sign_in', data);
export const signUp = (data: any) => axios.post('/auth/sign_up', data);
export const signOut = () => axios.get('/auth/sign_out');
export const signInWithThirdParty = (data:any) => axios.post('/auth/signInWithThirdParty', data);
export const signInWithToken = (data: any) => axios.post('/auth/signInWithToken', data);
export const resetPassword = (id: string) => axios.get('/auth/reset_password');