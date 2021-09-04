import axios from "axios";
import { useEffect } from "react";
import { API } from "../../assets/constants/consts";
import Post from "../../Components/Post/Post";
import * as Styled from "./styles.d";

export default function Home() {
  useEffect(() => {
    (async () => {
      axios
        .get(`${API}/posts`)
        .then(() => {})
        .catch((err) => {});
    })();
  }, []);

  return <Styled.Container></Styled.Container>;
}
