import axios from "axios";
import { useState } from "react";
import { API } from "assets/constants/consts";
import { useDispatch, useSelector } from "react-redux";
import { AdminActions } from "redux/Admin/Admin";

interface onSubmitProps {
  title: string;
  content: string;
  categories: string[];
  premium: boolean;
  description: string;
  published: boolean;
}

export default function usePosts({ files: images, file }: any) {
  const [added, setAdded] = useState<boolean>();
  const user = useSelector((state: any) => state.user);
  const [imagesProgress, setImagesProgress] = useState(0);
  const [fileProgress, setFileProgress] = useState(0);
  const [imagesUploaded, setImagesUploaded] = useState(false);
  const [filesUploaded, setFilesUploaded] = useState(false);
  const [error, setError] = useState<any>();

  const [details, setDetails] = useState({ redirect: "" });

  const dispatch = useDispatch();

  async function onSubmit(props: onSubmitProps) {
    axios
      .post(`${API}/admin/posts/create`, props, {
        headers: {
          token: user.token,
        },
      })
      .then(async ({ data }) => {
        const id = data.insertId;
        const redirect = data.redirect;
        setDetails({ redirect });

        if (id) {
          dispatch(AdminActions.setPostsRefresh());
        }

        if (id) {
          setAdded(true);
        }

        const formdata = new FormData();
        images.forEach((file: any) => {
          formdata.append("images", file);
        });

        axios
          .post(`${API}/admin/posts/upload/id=${id}`, formdata, {
            headers: {
              token: user.token,
            },
            onUploadProgress: (progressEvent) => {
              setImagesProgress(
                Math.round((progressEvent.loaded * 100) / progressEvent.total)
              );
            },
          })
          .then((data) => {
            if (data.data.message === "Uploaded") {
              setImagesUploaded(true);
            }
          });

        const fileForm = new FormData();
        file.forEach((file: any) => {
          fileForm.append("files", file);
        });

        axios
          .post(`${API}/admin/posts/upload/files/id=${id}`, fileForm, {
            headers: {
              token: user.token,
            },
            onUploadProgress: (progressEvent) => {
              setFileProgress(
                Math.round((progressEvent.loaded * 100) / progressEvent.total)
              );
            },
          })
          .then((data) => {
            if (data.data.message === "Uploaded") {
              setFilesUploaded(true);
            }
          });
      })
      .catch((err) => {
        setError({
          code: err.response.data.statusCode,
          message: err.response.data.message,
        });
        setAdded(false);
      });
  }

  return {
    onSubmit,
    imagesUploaded,
    filesUploaded,
    imagesProgress,
    fileProgress,
    added,
    error,
    details,
  };
}
