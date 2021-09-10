import * as Styled from "./styles.d";
import Burger from "Components/Burger/Burger";
import { useHistory, useLocation } from "react-router";
import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import SearchForm from "Modules/SearchForm/SearchForm";
import { ADMIN_PANEL } from "assets/constants/routes";

export default function Header() {
  const [headerHeight, setHeaderHeight] = useState(130);
  const history = useHistory();
  const { pathname } = useLocation();

  function onScroll() {
    if (pathname === ADMIN_PANEL) return setHeaderHeight(80);

    if (document.documentElement.scrollTop > 200) {
      setHeaderHeight(80);
    } else {
      setHeaderHeight(130);
    }
  }

  useEffect(() => {
    if (pathname === ADMIN_PANEL) return setHeaderHeight(80);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Styled.Header height={headerHeight}>
      <header className="header">
        <Button className="header__logo" onClick={() => history.push("/")}>
          PROGRAMISTA
        </Button>
        {pathname === "/" && <SearchForm />}
        <Burger />
      </header>
    </Styled.Header>
  );
}
