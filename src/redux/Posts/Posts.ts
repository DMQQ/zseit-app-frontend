import { createSlice } from "@reduxjs/toolkit";

const PostsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: false,
    error: "",
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
  },
});

const postsReducer = PostsSlice.reducer;
export const postsAction = PostsSlice.actions;

export default postsReducer;
