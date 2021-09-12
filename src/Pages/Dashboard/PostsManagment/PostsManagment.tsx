import { ButtonGroup, Button } from "@material-ui/core";
import { useState } from "react";
import AddPost from "./AddPost/AddPost";
import RemovePosts from "./RemovePost/RemovePost";

export default function PostsManagment() {
  const [action, setAction] = useState("REMOVE");
  return (
    <main style={{ width: "100%", height: "100%" }}>
      <ButtonGroup style={{ position: "fixed", top: 100, left: 20 }}>
        <Button
          onClick={() => setAction("ADD")}
          variant={action === "ADD" ? "contained" : "outlined"}
          color="primary"
        >
          Dodaj
        </Button>
        <Button
          onClick={() => setAction("REMOVE")}
          color="primary"
          variant={action === "REMOVE" ? "contained" : "outlined"}
        >
          Usuń
        </Button>
      </ButtonGroup>

      {action === "ADD" ? <AddPost /> : <RemovePosts />}
    </main>
  );
}
