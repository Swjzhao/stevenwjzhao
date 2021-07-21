import { AnyAction } from 'redux';

import * as types from '../constants';

const INITIAL_STATE = {
  redirectRoute: null,
  snackbarText: null,
};
export default (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case types.SHOW_SNACKBAR:
      return {
        ...state,
        snackbarText: action.payload,
      };
    case types.HIDE_SNACKBAR:
      return {
        ...state,
        snackbarText: null,
      };
    case types.SET_REDIRECT:
      return { ...state, redirectRoute: action.payload };
    case types.CLEAR_REDIRECT:
      return { ...state, redirectRoute: null };
    default:
      return state;
  }
};
