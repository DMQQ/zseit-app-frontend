import { Button } from "@material-ui/core";
import { ReactComponent as NotFoundSvg } from "assets/images/404.svg";
import { useHistory } from "react-router";

export default function NotFound() {
  const history = useHistory();
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <NotFoundSvg />
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push("/")}
        >
          Powrót
        </Button>
      </div>
    </div>
  );
}
