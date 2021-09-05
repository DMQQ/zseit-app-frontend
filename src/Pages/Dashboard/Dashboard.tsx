import * as Styled from "./styles.d";
import { Button, ButtonGroup, Container, TextField } from "@material-ui/core";
import { DropzoneArea } from "material-ui-dropzone";
import { useState } from "react";
import { API } from "assets/constants/consts";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const [files, setFiles] = useState<any>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { token } = useSelector((state: any) => state.user);

  async function onSubmit(e: any) {
    e.preventDefault();

    const formdata = new FormData();

    formdata.append("images", files);
    formdata.append("content", content);
    formdata.append("title", title);

    try {
      const response = await fetch(`${API}/admin/create`, {
        method: "POST",
        body: formdata,
        headers: {
          token,
        },
      });
      const data = await response.json();
    } catch (err) {}
  }

  return (
    <Styled.Dashboard>
      <ButtonGroup className="btn-container" variant="outlined" color="primary">
        <Button>Dodaj Post</Button>
        <Button>Użytkownicy</Button>
        <Button>Edycja</Button>
      </ButtonGroup>

      <Container component="section" className="m-container">
        <form className="m-container__form" onSubmit={onSubmit}>
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
            label="Html"
            size="small"
            className="m-container__form__input"
            multiline={true}
            style={{ marginBottom: 15 }}
            value={content}
            onChange={(e) => setContent(e.target.value)}
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
