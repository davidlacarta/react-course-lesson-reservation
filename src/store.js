import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from 'redux-starter-kit';

import userReducer from './user/userSlice';

const rootReducer = combineReducers({
  user: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware()],
});

export default store;
