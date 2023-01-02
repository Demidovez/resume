import { configureStore } from '@reduxjs/toolkit';

import { settingslice } from './slices/settingsSlice';

export const store = configureStore({
  reducer: {
    settings: settingslice.reducer,
  },
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const settingsAction = settingslice.actions;