import { useState } from "react";
import PostsManagment from "./PostsManagment/PostsManagment";
import * as Styled from "./styles.d";

const ACTIONS = {
  posts: "POSTS",
  users: "USERS",
};

export default function Dashboard() {
  const [action, setAction] = useState(ACTIONS.posts);
  return (
    <Styled.Dashboard>
      {action === ACTIONS.posts && <PostsManagment />}
    </Styled.Dashboard>
  );
}
