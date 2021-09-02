import * as Styled from "./styles.d";
import { Button, Paper } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { API } from "../../assets/constants/consts";

interface PostProps {
  thumbnail: string;
  title: string;
  post_id: number;
  category: string;
}

export default function Post({
  thumbnail,
  title,
  post_id,
  category,
}: PostProps) {
  const history = useHistory();

  const Navigate = () => history.push(`/article/id=${post_id}`);

  return (
    <Styled.Container>
      <Button variant="text" className="no-margin" onClick={Navigate}>
        <Paper component="div" elevation={4} className="post">
          <img className="post__img" src={`${API}/images/id=${thumbnail}`} />
          <section className="post__details">
            <h3 className="post__details__title">{title}</h3>

            <div className="post__details__category">{category}</div>
          </section>
        </Paper>
      </Button>
    </Styled.Container>
  );
}
