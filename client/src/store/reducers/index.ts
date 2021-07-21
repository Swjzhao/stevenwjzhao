import { combineReducers } from 'redux';

import globalReducer from './global.reducer';
import statusReducer from './status.reducer';
import userReducer from './user.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  status: statusReducer,
  global: globalReducer,
});

export default rootReducer;
