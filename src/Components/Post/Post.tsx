import * as Styled from "./styles.d";
import { Button, Paper } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { API } from "assets/constants/consts";

interface PostProps {
  thumbnail: string;
  title: string;
  id: number;
  categories: any[];
  images: any[];
  description: string;
}

export default function Post({
  thumbnail,
  title,
  id,
  categories,
  images,
  description,
}: PostProps) {
  const history = useHistory();

  const Navigate = () => history.push(`/article/id=${id}`);

  return (
    <Styled.Container>
      <Button variant="text" className="no-margin" onClick={Navigate}>
        <Paper component="div" elevation={4} className="post">
          <img
            className="post__img"
            alt="thumbnail"
            src={
              images.length > 0
                ? `${API}/posts/images/name=${images[0]?.name}`
                : "https://www.theiasilver.com/index.php/images/products/16062082195fbccadbcb27c.jpg"
            }
          />
          <section className="post__details">
            <div className="post__details__text-container">
              <h3 className="post__details__title">
                {title.split("").slice(0, 30)}
              </h3>
              <p className="post-desc">{description.split("").slice(0, 100)}</p>
            </div>

            <div className="post__details__category">
              {categories.map(({ id, category }) => {
                return (
                  <span key={id} className="category">
                    {category}
                  </span>
                );
              })}
            </div>
          </section>
        </Paper>
      </Button>
    </Styled.Container>
  );
}
