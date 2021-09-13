import DashboardContextProvider from "Context/DashboardContext";
import { useState } from "react";
import PostsManagment from "./PostsManagment/PostsManagment";
import * as Styled from "./styles.d";
import UsersManagment from "./UsersManagment/UsersManagment";

const ACTIONS = {
  posts: "POSTS",
  users: "USERS",
};

export default function Dashboard() {
  const [action] = useState(ACTIONS.posts);
  return (
    <DashboardContextProvider>
      <Styled.Dashboard>
        {action === ACTIONS.posts && <PostsManagment />}
        {action === ACTIONS.users && <UsersManagment />}
      </Styled.Dashboard>
    </DashboardContextProvider>
  );
}
