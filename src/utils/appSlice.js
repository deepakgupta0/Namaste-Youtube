import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: false,
    isSearchListOpen: false,
  },
  reducers: {
    toggleMenuOpen: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeSideBar: (state) => {
      state.isMenuOpen = false;
    },
    displaySearchList: (state, action) => {
      state.isSearchListOpen = action.payload;
    },
  },
});
export const { toggleMenuOpen, closeSideBar, displaySearchList } =
  appSlice.actions;
export default appSlice.reducer;
