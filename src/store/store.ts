// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import dummyReducer from './slices/dummySlice'; // ← Импортируем заглушку

export const makeStore = () => {
  return configureStore({
    reducer: {
      dummy: dummyReducer, // ← Добавляем в конфиг
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];