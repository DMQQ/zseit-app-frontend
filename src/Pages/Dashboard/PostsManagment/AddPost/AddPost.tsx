import * as Styled from "./styles.d";
import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  TextField,
} from "@material-ui/core";
import { DropzoneArea } from "material-ui-dropzone";
import { useState } from "react";
import { API } from "assets/constants/consts";
import { useSelector } from "react-redux";
import Categories from "Modules/Categories/Categories";
import axios from "axios";
import { useHistory } from "react-router";

import Info from "../../Info/Info";

export default function AddPost() {
  const [files, setFiles] = useState<any>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [premium, setPremium] = useState(false);
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<any>();
  const { token } = useSelector((state: any) => state.user);

  const history = useHistory();

  async function onSubmit(e: any) {
    e.preventDefault();

    if (!title || !content || !categories || !description) return;

    axios
      .post(
        `${API}/admin/create`,
        {
          title,
          content,
          categories,
          premium,
          description,
        },
        {
          headers: {
            token,
          },
        }
      )
      .then(({ data }) => {
        const id = data.insertId;

        const formdata = new FormData();
        files.forEach((file: any) => {
          formdata.append("images", file);
        });

        fetch(`${API}/admin/upload/id=${id}`, {
          method: "POST",
          body: formdata,
          headers: {
            token,
          },
        });

        const fileForm = new FormData();

        fileForm.append("files", file);

        fetch(`${API}/admin/upload/files/id=${id}`, {
          method: "POST",
          body: fileForm,
          headers: {
            token,
          },
        });

        setTimeout(() => {
          history.push(`/article/id=${id}/title=${title}`);
        }, 1000);
      });
  }

  const [showHelp, setShowHelp] = useState(false);

  return (
    <Styled.Dashboard>
      <Container component="section" className="m-container">
        <Categories categories={categories} setCategories={setCategories} />
        <form
          className="m-container__form"
          onSubmit={onSubmit}
          encType="multipart/form-data"
        >
          <TextField
            variant="outlined"
            label="Tytuł"
            size="small"
            className="m-container__form__input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <TextField
            variant="outlined"
            label="Opis"
            size="small"
            className="m-container__form__input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <TextField
            variant="outlined"
            label="Html"
            size="small"
            className="m-container__form__input"
            multiline={true}
            style={{ marginBottom: 15 }}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={premium}
                onChange={(e) => setPremium(e.target.checked)}
                name="premium"
              />
            }
            label="Wymaga konta"
          />

          <DropzoneArea
            acceptedFiles={["image/*"]}
            dropzoneText="Upuść zdjęcia w tym miejscu"
            onChange={(files) => setFiles(files)}
            filesLimit={5}
          />
          <br />
          <DropzoneArea
            acceptedFiles={[]}
            dropzoneText="plik"
            filesLimit={1}
            onChange={(file) => setFile(file)}
          />

          <div className="buttons">
            <Button variant="contained" color="primary" type="submit">
              Opublikuj
            </Button>
            {/*    <Button variant="contained" type="submit">
              Dokończ później
            </Button> */}
          </div>
        </form>
      </Container>

      <Button
        variant="contained"
        color="primary"
        style={{ position: "fixed", right: 10, bottom: 10 }}
        onClick={() => setShowHelp(!showHelp)}
      >
        Pomoc
      </Button>

      {showHelp && <Info />}
    </Styled.Dashboard>
  );
}
