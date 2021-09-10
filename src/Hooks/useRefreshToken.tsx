import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function useRefreshToken() {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const { data, status } = await axios.get("");
    })();
  }, []);
}
