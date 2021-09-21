import { createSlice } from "@reduxjs/toolkit";

const PostsSlice = createSlice({
  name: "posts",
  initialState: {
    regular: {
      posts: [],
      loading: false,
      error: "",
    },
    premium: {
      posts: [],
      loading: false,
      error: "",
    },
  },
  reducers: {
    SaveData(state, { payload }) {
      state.regular.posts = payload.data;
    },
    loading(state) {
      state.regular.loading = !state.regular.loading;
    },
    error(state, { payload }) {
      state.regular.error = payload.error;
      state.regular.loading = false;
    },
    SavePremium(state, { payload }) {
      state.premium.posts = payload.data;
    },
    loadingPremium(state) {
      state.premium.loading = !state.premium.loading;
    },
    errorPremium(state, { payload }) {
      state.premium.error = payload.error;
    },
  },
});

const postsReducer = PostsSlice.reducer;
export const postsAction = PostsSlice.actions;

export default postsReducer;
