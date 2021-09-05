import { createSlice } from "@reduxjs/toolkit";

const ModalSlice = createSlice({
  name: "modals",
  initialState: {
    sidebar: false,
  },
  reducers: {
    toggleSideBar(state) {
      state.sidebar = !state.sidebar;
    },
  },
});

export const ModalActions = ModalSlice.actions;
const ModalReducers = ModalSlice.reducer;

export default ModalReducers;
