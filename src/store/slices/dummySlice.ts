// src/store/slices/dummySlice.ts
import { createSlice } from '@reduxjs/toolkit';

export const dummySlice = createSlice({
  name: 'dummy',
  initialState: {
    value: null,
  },
  reducers: {
    // Пустые редьюсеры пока не нужны
  },
});

export default dummySlice.reducer;