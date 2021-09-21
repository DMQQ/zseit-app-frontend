import axios from "axios";
import { API } from "assets/constants/consts";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { AdminActions } from "redux/Admin/Admin";
import { RootState } from "redux/store";

export default function useManagment() {
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  const refresh = () => dispatch(AdminActions.setPostsRefresh());

  async function Publish(id: number) {
    axios
      .put(
        `${API}/admin/posts/update/publish`,
        {
          id,
        },
        {
          headers: {
            token: user.token,
          },
        }
      )
      .then(({ data }) => data.message === "Updated" && refresh());
  }

  async function Remove(id: number) {
    axios
      .delete(`${API}/admin/posts/delete/post/id=${id}`, {
        headers: {
          token: user.token,
        },
      })
      .then(({ data }) => data.message === "Deleted" && refresh());
  }

  async function Hide(id: number) {
    axios
      .put(
        `${API}/admin/posts/update/unpublish`,
        { id },
        {
          headers: {
            token: user.token,
          },
        }
      )
      .then(({ data }) => data.message === "Updated" && refresh());
  }

  const { loading, posts, error } = useSelector(
    (state: RootState) => state.admin.posts
  );

  const GetAll = useCallback(async () => {
    try {
      dispatch(AdminActions.setPostsLoading());
      const response = await axios.get(`${API}/admin/posts/get/all`, {
        headers: {
          token: user.token,
        },
      });
      dispatch(AdminActions.setPosts({ posts: response.data }));
      dispatch(AdminActions.setPostsLoading());
    } catch (error: any) {
      dispatch(
        AdminActions.setPostsError({
          error: error.response.data.message || "Wystąpił błąd",
        })
      );
      dispatch(AdminActions.setPostsLoading());
    }
  }, [user.token, dispatch]);

  /* useEffect(() => {
    GetAll();
  }, [user.token, GetAll, reFetch]); */

  return {
    Publish,
    Remove,
    Hide,
    All: GetAll,
    data: {
      loading,
      posts,
      error,
    },
  };
}
