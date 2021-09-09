import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Styled from "./styled.d";
import { API } from "assets/constants/consts";
import { postsAction } from "redux/Posts/Posts";

export default function SearchForm() {
  const dispatch = useDispatch();
  const token = useSelector((state: any) => state.user.token);

  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search.trim() === "") return;
    const delayDebounceFn = setTimeout(async () => {
      try {
        dispatch(postsAction.loading());
        const { data, status } = await axios.get(
          `${API}/posts/search=${search}`,
          {
            headers: {
              token,
            },
          }
        );
        if (data !== null && status === 200) {
          dispatch(postsAction.SaveData({ data }));
          dispatch(postsAction.loading());
        }
      } catch (err) {
        dispatch(postsAction.error({ error: err }));
        dispatch(postsAction.loading());
      }
    }, 1500);

    return () => clearTimeout(delayDebounceFn);
  }, [search, dispatch, token]);

  return (
    <Styled.SearchForm>
      <input
        autoFocus
        type="search"
        className="input-field"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Wyszukaj tutaj..."
      />
    </Styled.SearchForm>
  );
}
