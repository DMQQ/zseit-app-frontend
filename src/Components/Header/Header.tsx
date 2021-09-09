import * as Styled from "./styles.d";
import Burger from "Components/Burger/Burger";
import { useHistory } from "react-router";
import { Button } from "@material-ui/core";

export default function Header() {
  const history = useHistory();
  return (
    <Styled.Header>
      <Button
        color="primary"
        variant="text"
        className="button"
        onClick={() => history.push("/")}
      >
        PROGRAMISTA ZSEIT
      </Button>
      <nav className="burger-section">
        <Burger />
      </nav>
    </Styled.Header>
  );
}
