import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Styled from "./styled.d";
import { API } from "assets/constants/consts";
import { postsAction } from "redux/Posts/Posts";
import FilterCategories from "../FilterCategories/FilterCategories";
import { Button } from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";

export default function SearchForm() {
  const dispatch = useDispatch();
  const token = useSelector((state: any) => state.user.token);

  const [search, setSearch] = useState("ALL");
  const [categories, setCategories] = useState("NULL");

  async function onSearch() {
    try {
      dispatch(postsAction.loading());
      const { data, status } = await axios.get(
        `${API}/posts/search=${search}/category=${categories}`,
        {
          headers: {
            token,
          },
        }
      );
      if (data !== null && status === 200) {
        dispatch(postsAction.SaveData({ data }));
        dispatch(postsAction.loading());
        window.scrollBy({
          top: 700,
          behavior: "smooth",
        });

        setCategories("NULL");
      }
    } catch (err) {
      dispatch(postsAction.error({ error: err })); // fix later
      dispatch(postsAction.loading());
    }
  }

  return (
    <Styled.Container>
      <FilterCategories setCategories={setCategories} categories={categories} />
      <Styled.SearchForm
        type="search"
        className="input-field"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Wyszukaj tutaj..."
      />
      <Button
        style={{ backgroundColor: "#1d1d1d", marginLeft: 5 }}
        onClick={onSearch}
      >
        <SearchIcon style={{ color: "white" }} />
      </Button>
    </Styled.Container>
  );
}
