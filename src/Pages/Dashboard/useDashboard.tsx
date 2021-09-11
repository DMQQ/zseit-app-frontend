import axios from "axios";
import { useCallback, useState } from "react";
import { API } from "assets/constants/consts";
import { useSelector } from "react-redux";

interface IProps {
  title: string;
  content: string;
  categories: string[];
  premium: boolean;
  description: string;
}

export default function useDashboard() {
  const [result, setResult] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { token } = useSelector((state: any) => state.user);

  const SubmitPost = useCallback(
    async (e: any, props: IProps, images: any[], file) => {
      e.preventDefault();
      try {
        const { data, status } = await axios.post(
          `${API}/admin/create`,
          props,
          {
            headers: {
              token,
            },
          }
        );

        if (data.insertId && status === 201) {
          const id = data.insertId;

          try {
            const imagesForm = new FormData();

            images.forEach((file) => {
              imagesForm.append("images", file);
            });

            await axios.post(`${API}/admin/upload/id=${id}`, imagesForm, {
              headers: {
                token,
                "Content-Type": "multipart/form-data",
              },
            });
          } catch (err: any) {
            setError(err);
            setLoading(false);
          }

          try {
            const files = new FormData();

            files.append("files", file);

            await axios.post(`${API}/admin/upload/id=${id}`, files, {
              headers: {
                token,
                "Content-Type": "multipart/form-data",
              },
            });
          } catch (err: any) {
            setError(err);
            setLoading(false);
          }
        }
      } catch (err: any) {
        setError(err);
        setLoading(false);
      }
    },
    []
  );

  return { onSubmit: SubmitPost };
}
