import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    token: "",
    user_id: 0,
  },
  reducers: {
    save(state, { payload }) {
      state.token = payload.token;
      state.user_id = payload.user_id;
      state.username = payload.username;
    },
  },
});

export const UserActions = UserSlice.actions;
const UserReducers = UserSlice.reducer;

export default UserReducers;
