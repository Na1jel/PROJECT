import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import weatherReducer from '../features/project/weatherSlice';

export const store = configureStore({
  reducer: {
    weathers: weatherReducer,
    counter: counterReducer,
  },
});
