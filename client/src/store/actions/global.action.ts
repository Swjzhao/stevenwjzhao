import * as types from '../constants';

export const showSnackBar = (message: string) => {
  return {
    type: types.SHOW_SNACKBAR,
    payload: message,
  };
};

// / show snackbar
export const hideSnackBar = () => {
  return {
    type: types.HIDE_SNACKBAR,
  };
};
