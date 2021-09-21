import { configureStore } from "@reduxjs/toolkit";
import ModalReducers from "./Modals/Modals";
import postsReducer from "./Posts/Posts";
import UserReducers from "./User/user";
import AdminReducers from "./Admin/Admin";

const store = configureStore({
  reducer: {
    user: UserReducers,
    modals: ModalReducers,
    posts: postsReducer,
    admin: AdminReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
