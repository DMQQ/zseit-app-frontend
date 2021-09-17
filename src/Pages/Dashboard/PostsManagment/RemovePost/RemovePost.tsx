import Post from "Components/Post/Post";
import { Button } from "@material-ui/core";
import * as Styled from "./styles.d";
import { ReactComponent as NotfoundImage } from "assets/images/404.svg";
import useManagment from "./useManagment";

export default function RemovePosts() {
  const {
    Publish,
    Remove,
    Hide,
    data: { posts, loading },
  } = useManagment();

  return (
    <Styled.Container>
      {posts.map((el: any) => {
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
              <Button
                onClick={() => Hide(el.id)}
                color="secondary"
                variant="contained"
                className="container__btn"
                disabled={!el.published}
              >
                Ukryj
              </Button>
            </div>
          </section>
        );
      })}

      {!loading && posts.length === 0 && (
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
