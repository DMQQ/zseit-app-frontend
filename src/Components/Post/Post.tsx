import * as Styled from "./styles.d";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { API } from "assets/constants/consts";
import { useSelector } from "react-redux";
import useIntersectionObserver from "Hooks/useIntersectionObserver";
import { useRef, useState } from "react";
import { CalcTime } from "helpers/CalcTime";

interface PostProps {
  title: string;
  id: number;
  categories: any[];
  images: any[];
  description: string;
  needAccount: boolean;
  created_at: string;
}

export default function Post({
  title,
  id,
  categories,
  images,
  description,
  needAccount,
  created_at,
}: PostProps) {
  const history = useHistory();

  const Navigate = () => history.push(`/article/id=${id}/title=${title}`);
  const cats = categories.slice(0, 5);
  const user = useSelector((state: any) => state.user);
  const requiresUser = !user.token && needAccount;
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  const [isNew] = useState(CalcTime(created_at));

  return (
    <Styled.Container>
      <Button
        variant="text"
        className="no-margin"
        onClick={Navigate}
        disabled={requiresUser}
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        <section className="post" ref={ref}>
          {isNew && <span className="post__message">NOWY</span>}
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
              {cats &&
                cats.map(({ id, category }) => {
                  return (
                    <span key={id} className="category">
                      #{category}
                    </span>
                  );
                })}
            </div>
          </section>
        </section>
      </Button>
    </Styled.Container>
  );
}
