import { createSlice } from "@reduxjs/toolkit";

const PostsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: false,
    error: "",

    premium: [],
  },
  reducers: {
    SaveData(state, { payload }) {
      state.posts = payload.data;
    },
    loading(state) {
      state.loading = !state.loading;
    },
    error(state, { payload }) {
      state.error = payload.error;
      state.loading = false;
    },
    SavePremium(state, { payload }) {
      state.premium = payload.data;
    },
  },
});

const postsReducer = PostsSlice.reducer;
export const postsAction = PostsSlice.actions;

export default postsReducer;
