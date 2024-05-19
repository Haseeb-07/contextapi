// src/features/todo/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ name: action.payload });
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task, index) => index !== action.payload);
    },
  },
});

export const { addTask, removeTask } = todoSlice.actions;

export default todoSlice.reducer;
