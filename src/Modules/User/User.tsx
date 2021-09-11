import { useDispatch, useSelector } from "react-redux";
import * as Styled from "./styles.d";
import { Button } from "@material-ui/core";
import { UserActions } from "redux/User/user";
import { useHistory } from "react-router";
import { USER_PREFIX } from "assets/constants/consts";

export default function User() {
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  const username = user?.username?.split("@")[0] || "gość";

  function Signout() {
    dispatch(UserActions.remove());
    localStorage.removeItem(USER_PREFIX);
    window.location.reload();
  }

  const history = useHistory();

  return (
    <Styled.User>
      <h2 className="username">Hej {username}</h2>
      {user && (
        <Button
          variant="outlined"
          style={{ borderColor: "#00C896", color: "#00C896", marginTop: 10 }}
          onClick={Signout}
        >
          Wyloguj się
        </Button>
      )}

      {!user && (
        <Button
          variant="outlined"
          style={{ borderColor: "#00C896", color: "#00C896", marginTop: 10 }}
          onClick={() => history.push("/login")}
        >
          Zaloguj się
        </Button>
      )}
    </Styled.User>
  );
}
