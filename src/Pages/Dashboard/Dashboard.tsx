import DashboardContextProvider from "Context/DashboardContext";
import { useEffect, useState } from "react";
import PostsManagment from "./PostsManagment/PostsManagment";
import useManagment from "./PostsManagment/RemovePost/useManagment";
import * as Styled from "./styles.d";
import UsersManagment from "./UsersManagment/UsersManagment";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

const ACTIONS = {
  posts: "POSTS",
  users: "USERS",
};

export default function Dashboard() {
  const [action] = useState(ACTIONS.posts);
  const reFetch = useSelector(({ admin }: RootState) => admin.posts.refresh);
  const { All } = useManagment();
  const token = useSelector((state: RootState) => state.user.token);

  useEffect(() => {
    All();
  }, [reFetch, token, All]);

  return (
    <DashboardContextProvider>
      <Styled.Dashboard>
        {action === ACTIONS.posts && <PostsManagment />}
        {action === ACTIONS.users && <UsersManagment />}
      </Styled.Dashboard>
    </DashboardContextProvider>
  );
}
