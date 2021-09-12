import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API } from "assets/constants/consts";
import * as Styled from "./styles.d";
import Post from "Components/Post/Post";
import { postsAction } from "redux/Posts/Posts";
import Overview from "Modules/Overview/Overview";
import useIntersectionObserver from "Hooks/useIntersectionObserver";
import Footer from "Modules/Footer/Footer";
import { ReactComponent as NotfoundImage } from "assets/images/404.svg";
import { motion } from "framer-motion";

export default function Home() {
  const { token } = useSelector((state: any) => state.user);
  const { posts } = useSelector((state: any) => state.posts);
  const dispatch = useDispatch();

  const [UserPosts, setUserPosts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        dispatch(postsAction.loading());
        const { data } = await axios.get(`${API}/posts`);
        if (data !== null) {
          dispatch(postsAction.SaveData({ data }));
          dispatch(postsAction.loading());
        }
      } catch (error) {
        dispatch(postsAction.error({ error }));
      }
    })();

    (async () => {
      try {
        const { data } = await axios.get(`${API}/posts/user-only`, {
          headers: { token },
        });
        setUserPosts(data);
      } catch (error) {}
    })();
  }, [token, dispatch]);

  document.title = "Programista ZSEIT";

  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  return (
    <Styled.Container>
      <Overview />
      <section
        className="content"
        ref={ref}
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        <h2 className="content__headings">
          {posts.length === 0 ? "Nie znaleziono" : "Dostępne: " + posts?.length}
        </h2>

        {posts?.map((post: any) => {
          return <Post key={post.id} {...post} />;
        })}

        {posts.length === 0 && (
          <motion.div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <NotfoundImage />
          </motion.div>
        )}

        {UserPosts.length > 0 && (
          <>
            <h2 className="content__headings">Dla zalogowanych </h2>

            {UserPosts?.map((post: any) => {
              return <Post key={post.id} {...post} />;
            })}
          </>
        )}
      </section>
      <Footer />
    </Styled.Container>
  );
}
