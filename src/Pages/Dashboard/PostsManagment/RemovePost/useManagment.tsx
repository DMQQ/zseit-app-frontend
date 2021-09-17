import axios from "axios";
import { API } from "assets/constants/consts";
import { useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";

export default function useManagment() {
  const user = useSelector((state: any) => state.user);
  const [refresh, setRefresh] = useState(0);

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

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const GetAll = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API}/admin/posts/get/all`, {
        headers: {
          token: user.token,
        },
      });
      setPosts(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(true);
    }
  }, [user.token]);

  useEffect(() => {
    GetAll();
  }, [refresh, user.token, GetAll]);

  return {
    Publish,
    Remove,
    Hide,
    data: {
      posts,
      loading,
    },
  };
}
