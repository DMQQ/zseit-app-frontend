import { useSelector } from "react-redux";
import * as Styled from "./styles.d";
import Footer from "Modules/Footer/Footer";
import { RootState } from "redux/store";
import PremimPosts from "Modules/PremiumPosts/PremiumPosts";
import RegularPosts from "Modules/RegularPosts/RegularPosts";
import Overview from "Modules/Overview/Overview";

export default function Home() {
  document.title = "Programista ZSEIT";
  const { posts } = useSelector((state: RootState) => state.posts.regular);
  return (
    <Styled.Container>
      <Overview />
      <section className="content">
        <h2 className="content__headings">
          {posts.length > 0 && `Dostępne materiały: ${posts.length}`}
        </h2>
        <RegularPosts />
        <PremimPosts />
      </section>
      <Footer />
    </Styled.Container>
  );
}
