import { createSlice } from "@reduxjs/toolkit";

const AdminSlice = createSlice({
  name: "Admin",
  initialState: {
    posts: {
      loading: false,
      posts: [],
      error: "",
      refresh: 0,
    },
    users: {
      loading: false,
      error: "",
      users: [],
      refresh: 0,
    },
  },
  reducers: {
    setPosts(state, { payload }) {
      state.posts.posts = payload.posts;
    },
    setPostsError(state, { payload }) {
      state.posts.error = payload.error;
    },
    setPostsLoading(state) {
      state.posts.loading = !state.posts.loading;
    },
    setPostsRefresh(state) {
      state.posts.refresh += 1;
    },

    setUsers(state, { payload }) {
      state.users.users = payload.users;
    },
    setUsersLoading(state) {
      state.users.loading = !state.users.loading;
    },
    setUsersError(state, { payload }) {
      state.users.error = payload.error;
    },
    setUsersRefresh(state) {
      state.users.refresh += 1;
    },
  },
});

export const AdminActions = AdminSlice.actions;

export default AdminSlice.reducer;
