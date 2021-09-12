import axios from "axios";
import Post from "Components/Post/Post";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import * as Styled from "./styles.d";

export default function RemovePosts() {
  const user = useSelector((state: any) => state.user);

  useEffect(() => {
    async () => {
      const response = await axios.get("");
    };
  }, []);

  return <Styled.Container></Styled.Container>;
}
