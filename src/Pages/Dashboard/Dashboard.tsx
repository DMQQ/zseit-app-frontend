import * as Styled from "./styles.d";
import {
  Button,
  ButtonGroup,
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

export default function Dashboard() {
  const [files, setFiles] = useState<any>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [premium, setPremium] = useState(false);
  const [description, setDescription] = useState("");

  const [result, setResult] = useState("");

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
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.message === "Uploaded") {
              setResult("Success");
              history.push("/article/id=" + id);
            }
          });
      });
  }

  console.log({ result });

  return (
    <Styled.Dashboard>
      <ButtonGroup className="btn-container" variant="outlined" color="primary">
        <Button>Dodaj Post</Button>
        <Button>Użytkownicy</Button>
        <Button>Edycja</Button>
      </ButtonGroup>

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
          <div className="buttons">
            <Button variant="contained" color="primary" type="submit">
              Opublikuj
            </Button>
            <Button variant="contained" type="submit">
              Dokończ później
            </Button>
          </div>
        </form>
      </Container>
    </Styled.Dashboard>
  );
}
