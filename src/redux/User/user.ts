import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    token: "",
    user_id: 0,
    loading: false,
    error: null,
  },
  reducers: {
    save(state, { payload }) {
      state.token = payload.token;
      state.user_id = payload.user_id;
      state.username = payload.username;
    },
    remove(state) {
      state.token = "";
      state.user_id = 0;
      state.username = "";
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
