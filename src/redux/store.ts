import { configureStore } from "@reduxjs/toolkit";
import ModalReducers from "./Modals/Modals";
import postsReducer from "./Posts/Posts";
import UserReducers from "./User/user";

const store = configureStore({
  reducer: {
    user: UserReducers,
    modals: ModalReducers,
    posts: postsReducer,
  },
});

export default store;
