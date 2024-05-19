// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todoReducer from '../features/todoSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
