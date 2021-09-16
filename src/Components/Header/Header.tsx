import * as Styled from "./styles.d";
import Burger from "Components/Burger/Burger";
import { useHistory, useLocation } from "react-router";
import { Button } from "@material-ui/core";
import { useCallback, useEffect, useState } from "react";
import SearchForm from "Modules/SearchForm/SearchForm";
import { ADMIN_PANEL } from "assets/constants/routes";
import LoginModal from "Modules/LoginModal/LoginModal";
import { useDispatch, useSelector } from "react-redux";
import { ModalActions } from "redux/Modals/Modals";

export default function Header() {
  const [headerHeight, setHeaderHeight] = useState(130);
  const history = useHistory();
  const { pathname } = useLocation();

  const onScroll = useCallback(() => {
    if (pathname === ADMIN_PANEL) return setHeaderHeight(80);

    if (document.documentElement.scrollTop > 200) {
      setHeaderHeight(80);
    } else {
      setHeaderHeight(130);
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname === ADMIN_PANEL || pathname.includes("article"))
      return setHeaderHeight(80);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname, onScroll]);

  const dispatch = useDispatch();

  function ToggleLoginModal() {
    dispatch(ModalActions.toggleLogin());
  }

  const user = useSelector((state: any) => state.user);
  const { login } = useSelector((state: any) => state.modals);

  const location = useLocation();

  function NavigateHome() {
    if (location.pathname !== "/") history.push("/");
  }

  return (
    <Styled.Header height={headerHeight}>
      <header className="header">
        <Button className="header__logo" onClick={NavigateHome}>
          PROGRAMISTA <span className="header__logo__status">BETA</span>
        </Button>
        {pathname === "/" && <SearchForm />}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "15%",
          }}
        >
          {!user.token && (
            <Button
              variant="outlined"
              className="button-hover"
              style={{ marginRight: 20 }}
              onClick={ToggleLoginModal}
            >
              Zaloguj się
            </Button>
          )}

          {user.role === "ADMIN" && (
            <Button
              variant="outlined"
              className="button-hover"
              style={{ marginRight: 20 }}
              onClick={() => history.push("/adminpanel")}
            >
              Admin
            </Button>
          )}

          <Burger />
        </div>
      </header>

      <LoginModal show={login} top={headerHeight} />
    </Styled.Header>
  );
}
