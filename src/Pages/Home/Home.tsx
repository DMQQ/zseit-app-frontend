import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { API } from "assets/constants/consts";
import * as Styled from "./styles.d";
import Post from "Components/Post/Post";

export default function Home() {
  const { token } = useSelector((state: any) => state.user);
  const [result, setResult] = useState<any>([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`${API}/posts`);
        setResult(data);
      } catch (error) {}
    })();
  }, [token]);

  return <Styled.Container></Styled.Container>;
}
