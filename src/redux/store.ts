import { configureStore } from "@reduxjs/toolkit";
import ModalReducers from "./Modals/Modals";
import UserReducers from "./User/user";

const store = configureStore({
  reducer: {
    user: UserReducers,
    modals: ModalReducers,
  },
});

export default store;
