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
import Categories from "Modules/Categories/Categories";
import Info from "Components/Info/Info";
import Modal from "Components/Modal/Modal";
import usePosts from "Hooks/usePosts";

export default function AddPost() {
  const [files, setFiles] = useState<any>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [premium, setPremium] = useState(false);
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<any>();

  const {
    onSubmit,
    imagesUploaded,
    filesUploaded,
    imagesProgress,
    fileProgress,
    added,
    error,
  } = usePosts({ files, file });

  const [showHelp, setShowHelp] = useState(false);

  return (
    <Styled.Dashboard>
      <Container component="section" className="m-container">
        <Categories categories={categories} setCategories={setCategories} />
        <p style={{ color: "red", fontSize: 35, fontWeight: "bold" }}>
          {error?.message.length > 0 &&
            "Wystąpił błąd, sprawdź czy pola nie są puste."}
        </p>
        <form className="m-container__form" encType="multipart/form-data">
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
            label="Zawartość Arykułu"
            size="small"
            className="m-container__form__input"
            multiline={true}
            minRows={5}
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

          {imagesProgress !== 0 && (
            <div className="progress" style={{ width: `${imagesProgress}%` }}>
              {imagesProgress}%
            </div>
          )}

          <DropzoneArea
            acceptedFiles={["image/*"]}
            dropzoneText="Upuść zdjęcia w tym miejscu"
            onChange={(files) => setFiles(files)}
            filesLimit={5}
          />
          <br />

          {fileProgress !== 0 && (
            <div className="progress" style={{ width: `${fileProgress}%` }}>
              {fileProgress}%
            </div>
          )}

          <DropzoneArea
            acceptedFiles={[]}
            dropzoneText="plik"
            filesLimit={1}
            onChange={(file) => setFile(file)}
            maxFileSize={52428800}
          />

          <div className="buttons">
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={added}
              onClick={() =>
                onSubmit({
                  title,
                  content,
                  categories,
                  premium,
                  description,
                  published: true,
                })
              }
            >
              Opublikuj
            </Button>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={added}
              onClick={() =>
                onSubmit({
                  title,
                  content,
                  categories,
                  premium,
                  description,
                  published: false,
                })
              }
            >
              Później
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
