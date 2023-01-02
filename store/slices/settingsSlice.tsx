import { createSlice, current } from '@reduxjs/toolkit';

export const settingslice = createSlice({
  name: 'settings',
  initialState: {
    isNightTheme: false,
    lang: 'ru',
    isLogined: false,
  },
  reducers: {
    toogleTheme: (state) => {
      state.isNightTheme = !current(state.isNightTheme); // TODO: нужен current?
    },
    toogleLang: state=>{
      state.lang = 'sun';
    },
    setIsLogined: (state, action) => {
      state.isLogined = action.payload;
    },
  },
});