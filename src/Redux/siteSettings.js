import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dark: true,
  menu: true,
};

export const siteSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    darkMode: (state) => {
      state.dark = !state.dark;
    },
    menuOpen: (state) => {
      state.menu = !state.menu;
    },
  },
});

export const { darkMode, menuOpen } = siteSlice.actions;

export default siteSlice.reducer;
