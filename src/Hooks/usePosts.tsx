import axios from "axios";
import { useState } from "react";
import { API } from "assets/constants/consts";
import { useSelector } from "react-redux";

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
        console.log(redirect);

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
      });
  }

  return {
    onSubmit,
    imagesUploaded,
    filesUploaded,
    imagesProgress,
    fileProgress,
    added,
  };
}
