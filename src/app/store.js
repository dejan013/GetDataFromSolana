import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import app from '../features/reducers/app'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    app: app
  },
});
