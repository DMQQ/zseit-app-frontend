import axios from "axios";
import { API } from "assets/constants/consts";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Post from "Components/Post/Post";
import { RootState } from "redux/store";
import { postsAction } from "redux/Posts/Posts";
import { ReactComponent as NotfoundImage } from "assets/images/404.svg";
import { ReactComponent as Error } from "assets/images/error.svg";
import Spinner from "Components/Spinner/Spinner";

export default function RegularPosts() {
  const { token } = useSelector((state: any) => state.user);
  const { posts, error, loading } = useSelector(
    (state: RootState) => state.posts.regular
  );
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        dispatch(postsAction.loading());
        const { data } = await axios.get(`${API}/posts`);

        if (data !== null) {
          dispatch(postsAction.SaveData({ data }));
          dispatch(postsAction.loading());
        }
      } catch (error: any) {
        dispatch(
          postsAction.error({
            error: error?.response?.data?.message || error.message,
          })
        );
        dispatch(postsAction.loading());
      }
    })();
  }, [token, dispatch]);
  return (
    <>
      {!error && posts.length === 0 && (
        <div className="content__flex-center">
          <NotfoundImage />
        </div>
      )}
      {error && (
        <div className="content__flex-center">
          <Error />
        </div>
      )}

      {loading && (
        <div className="content__flex-center">
          <Spinner />
        </div>
      )}

      {posts?.map((post: any) => {
        return <Post key={post.id} {...post} />;
      })}
    </>
  );
}
