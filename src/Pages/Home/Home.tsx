import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API } from "assets/constants/consts";
import * as Styled from "./styles.d";
import Post from "Components/Post/Post";
import { postsAction } from "redux/Posts/Posts";

export default function Home() {
  const { token } = useSelector((state: any) => state.user);
  const { posts } = useSelector((state: any) => state.posts);
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
      } catch (error) {
        dispatch(postsAction.error({ error }));
      }
    })();
  }, [token, dispatch]);

  document.title = "Programista ZSEIT";

  return (
    <Styled.Container>
      <section className="content">
        <h2 className="content__headings">Dostępne: {posts?.length}</h2>

        {posts?.map((post: any) => {
          return <Post key={post.id} {...post} />;
        })}

        <h2 className="content__headings">Dla zalogowanych: {posts?.length}</h2>
      </section>
    </Styled.Container>
  );
}
