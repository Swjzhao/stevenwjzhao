import { combineReducers } from 'redux';

import statusReducer from './status.reducer';
import userReducer from './user.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  status: statusReducer,
});

export default rootReducer;
