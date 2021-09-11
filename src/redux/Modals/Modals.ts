import { createSlice } from "@reduxjs/toolkit";

const ModalSlice = createSlice({
  name: "modals",
  initialState: {
    sidebar: false,
    login: false,
  },

  reducers: {
    toggleSideBar(state) {
      state.sidebar = !state.sidebar;
    },
    toggleLogin(state) {
      state.login = !state.login;
    },
  },
});

export const ModalActions = ModalSlice.actions;
const ModalReducers = ModalSlice.reducer;

export default ModalReducers;
