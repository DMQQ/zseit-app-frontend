import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    token: "",
    user_id: 0,
    loading: false,
    error: null,
    role: "",
  },
  reducers: {
    save(state, { payload }) {
      state.token = payload.token;
      state.user_id = payload.user_id;
      state.username = payload.username;
      state.role = payload.role;
    },
    remove(state) {
      state.token = "";
      state.user_id = 0;
      state.username = "";
      state.role = "";
    },
    loading(state) {
      state.loading = !state.loading;
    },
    error(state, { payload }) {
      state.error = payload.error;
    },
  },
});

export const UserActions = UserSlice.actions;
const UserReducers = UserSlice.reducer;

export default UserReducers;
