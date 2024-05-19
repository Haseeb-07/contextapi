// src/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    name:'counter'
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
      state.name='incremented'
    },
    decrement: (state) => {
      state.value -= 1;
      state.name='decremented'
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
      state.name='Incrementedby2'
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
