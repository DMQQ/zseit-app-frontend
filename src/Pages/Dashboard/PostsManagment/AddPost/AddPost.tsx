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

import Info from "../../Info/Info";
import Modal from "Pages/Dashboard/Modal/Modal";

export default function AddPost() {
  const [files, setFiles] = useState<any>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [premium, setPremium] = useState(false);
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<any>();
  const { token } = useSelector((state: any) => state.user);

  const [imagesUploaded, setImagesUploaded] = useState(false);
  const [filesUploaded, setFilesUploaded] = useState(false);

  const [added, setAdded] = useState(false);

  async function onSubmit(e: any) {
    e.preventDefault();

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
      .then(async ({ data }) => {
        const id = data.insertId;

        if (id) {
          setAdded(true);
        }

        const formdata = new FormData();
        files.forEach((file: any) => {
          formdata.append("images", file);
        });

        await fetch(`${API}/admin/upload/id=${id}`, {
          method: "POST",
          body: formdata,
          headers: {
            token,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.message === "Uploaded") {
              setImagesUploaded(true);
            }
          });

        const fileForm = new FormData();
        file.forEach((file: any) => {
          fileForm.append("files", file);
        });

        await fetch(`${API}/admin/upload/files/id=${id}`, {
          method: "POST",
          body: fileForm,
          headers: {
            token,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.message === "Uploaded") {
              setFilesUploaded(true);
            }
          });
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
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={added}
            >
              Opublikuj
            </Button>
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

      {filesUploaded && <Modal text={"Plik dodany"} style={{ bottom: 70 }} />}
      {imagesUploaded && <Modal text={"Zdjęcia dodane"} />}
      {added && <Modal text="Post dodany" style={{ bottom: 120 }} />}
    </Styled.Dashboard>
  );
}
