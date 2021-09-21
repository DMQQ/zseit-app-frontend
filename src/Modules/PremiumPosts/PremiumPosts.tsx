import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "redux/store";
import Post from "Components/Post/Post";
import { postsAction } from "redux/Posts/Posts";
import { API } from "assets/constants/consts";

export default function PremimPosts() {
  const premium = useSelector((state: RootState) => state.posts.premium);
  const token = useSelector((state: RootState) => state.user.token);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        dispatch(postsAction.loadingPremium());
        const { data } = await axios.get(`${API}/posts/user-only`, {
          headers: { token },
        });

        dispatch(postsAction.SavePremium({ data }));
        dispatch(postsAction.loadingPremium());
      } catch (error: any) {
        dispatch(
          postsAction.errorPremium({
            error: error?.response?.data?.message || error.message,
          })
        );
        dispatch(postsAction.loadingPremium());
      }
    })();
  }, [token, dispatch]);

  return (
    <>
      {premium.posts?.length > 0 && (
        <>
          <h2 className="content__headings">Dla zalogowanych</h2>

          {premium?.posts?.map((post: any) => {
            return <Post key={post.id} {...post} />;
          })}
        </>
      )}
    </>
  );
}
