import axios from "axios";
import Post from "Components/Post/Post";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { API } from "assets/constants/consts";
import { Button } from "@material-ui/core";
import * as Styled from "./styles.d";
import { ReactComponent as NotfoundImage } from "assets/images/404.svg";

export default function RemovePosts() {
  const user = useSelector((state: any) => state.user);
  const [posts, setPosts] = useState([]);

  const [refresh, setRefresh] = useState(0);

  async function Publish(id: number) {
    axios
      .put(
        `${API}/admin/update/publish`,
        {
          id,
        },
        {
          headers: {
            token: user.token,
          },
        }
      )
      .then(
        ({ data }) => data.message === "Updated" && setRefresh(refresh + 1)
      );
  }

  async function Remove(id: number) {
    axios
      .delete(`${API}/admin/delete/post/id=${id}`, {
        headers: {
          token: user.token,
        },
      })
      .then(
        ({ data }) => data.message === "Deleted" && setRefresh(refresh + 1)
      );
  }

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`${API}/admin/get/all`, {
          headers: {
            token: user.token,
          },
        });
        setPosts(response.data);
      } catch (error) {}
    })();
  }, [refresh, user.token]);

  return (
    <Styled.Container>
      {posts.map((el: any, i) => {
        return (
          <section className="container" key={el.id}>
            <Post {...el} />
            <div className="b-container">
              <Button
                color="primary"
                variant="contained"
                className="container__btn"
                onClick={() => Remove(el.id)}
              >
                Usuń
              </Button>
              <Button
                onClick={() => Publish(el.id)}
                color="secondary"
                variant="contained"
                className="container__btn"
                disabled={el.published}
              >
                Opublikuj
              </Button>
            </div>
          </section>
        );
      })}

      {posts.length === 0 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1 style={{ textAlign: "center" }}>Brak dostępnych postów</h1>
          <NotfoundImage />
        </div>
      )}
    </Styled.Container>
  );
}
