import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API } from "assets/constants/consts";
import * as Styled from "./styles.d";
import Post from "Components/Post/Post";
import { postsAction } from "redux/Posts/Posts";
import Overview from "Modules/Overview/Overview";
import Footer from "Modules/Footer/Footer";
import { ReactComponent as NotfoundImage } from "assets/images/404.svg";
import { motion } from "framer-motion";
import { ReactComponent as Error } from "assets/images/error.svg";
import { RootState } from "redux/store";
import Spinner from "Components/Spinner/Spinner";

export default function Home() {
  const { token } = useSelector((state: any) => state.user);
  const { posts, premium, error, loading } = useSelector(
    (state: RootState) => state.posts
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

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`${API}/posts/user-only`, {
          headers: { token },
        });
        dispatch(postsAction.SavePremium({ data }));
      } catch (error) {}
    })();
  }, [token, dispatch]);

  document.title = "Programista ZSEIT";

  return (
    <Styled.Container>
      <Overview />
      <section className="content">
        <h2 className="content__headings">
          {posts.length > 0 && "Dostępne materiały: " + posts.length}
        </h2>

        {error && (
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Error />
          </div>
        )}

        {loading && (
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Spinner />
          </div>
        )}

        {posts?.map((post: any) => {
          return <Post key={post.id} {...post} />;
        })}

        {!error && posts.length === 0 && (
          <motion.div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <NotfoundImage />
          </motion.div>
        )}

        {premium.length > 0 && (
          <>
            <h2 className="content__headings">Dla zalogowanych</h2>

            {premium?.map((post: any) => {
              return <Post key={post.id} {...post} />;
            })}
          </>
        )}
      </section>
      <Footer />
    </Styled.Container>
  );
}
