import axios from "axios";
import { API } from "assets/constants/consts";
import { useSelector } from "react-redux";

export default function useManagment({ setRefresh, refresh }: any) {
  const user = useSelector((state: any) => state.user);

  async function Publish(id: number) {
    axios
      .put(
        `${API}/admin/posts/update/publish`,
        {
          id,
        },
        {
          headers: {
            token: user.token,
          },
        }
      )
      .then(
        ({ data }) => data.message === "Updated" && setRefresh(refresh + 1)
      );
  }

  async function Remove(id: number) {
    axios
      .delete(`${API}/admin/posts/delete/post/id=${id}`, {
        headers: {
          token: user.token,
        },
      })
      .then(
        ({ data }) => data.message === "Deleted" && setRefresh(refresh + 1)
      );
  }

  async function Hide(id: number) {
    axios
      .put(
        `${API}/admin/posts/update/unpublish`,
        { id },
        {
          headers: {
            token: user.token,
          },
        }
      )
      .then(
        ({ data }) => data.message === "Updated" && setRefresh(refresh + 1)
      );
  }

  return { Publish, Remove, Hide };
}
