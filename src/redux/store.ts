import { configureStore } from "@reduxjs/toolkit";
import UserReducers from "./User/user";

const store = configureStore({
  reducer: {
    user: UserReducers,
  },
});

export default store;
