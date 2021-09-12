import { useDispatch, useSelector } from "react-redux";
import * as Styled from "./styles.d";
import { Button } from "@material-ui/core";
import { UserActions } from "redux/User/user";
import { useHistory } from "react-router";
import { USER_PREFIX } from "assets/constants/consts";
import { ModalActions } from "redux/Modals/Modals";

export default function User() {
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  function Signout() {
    dispatch(UserActions.remove());
    localStorage.removeItem(USER_PREFIX);
    window.location.reload();
  }

  const history = useHistory();

  return (
    <Styled.User>
      <h2 className="username">Hej {user?.username?.split("@")[0]}</h2>
      {user.token && (
        <Button
          variant="outlined"
          style={{ borderColor: "#00C896", color: "#00C896", marginTop: 10 }}
          onClick={Signout}
        >
          Wyloguj się
        </Button>
      )}

      {!user.token && (
        <>
          <Button
            variant="outlined"
            style={{
              borderColor: "#00C896",
              color: "#00C896",
              marginTop: 10,
              marginRight: 10,
            }}
            onClick={() => {
              dispatch(ModalActions.toggleLogin());
              dispatch(ModalActions.toggleSideBar());
            }}
          >
            Zaloguj się
          </Button>
          <Button
            variant="outlined"
            style={{ borderColor: "#00C896", color: "#00C896", marginTop: 10 }}
            onClick={() => history.push("/login")}
          >
            Zarejestruj się
          </Button>
        </>
      )}
    </Styled.User>
  );
}
