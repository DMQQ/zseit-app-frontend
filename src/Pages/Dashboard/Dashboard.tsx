import * as Styled from "./styles.d";
import { Button, ButtonGroup, Container, TextField } from "@material-ui/core";

export default function Dashboard() {
  return (
    <Styled.Dashboard>
      <ButtonGroup className="btn-container" variant="outlined" color="primary">
        <Button>Dodaj Post</Button>
        <Button>Użytkownicy</Button>
        <Button>Edycja</Button>
      </ButtonGroup>

      <Container component="section" className="m-container">
        <form className="m-container__form">
          <TextField
            variant="outlined"
            label="Tytuł"
            size="small"
            className="m-container__form__input"
          />
          <TextField
            variant="outlined"
            label="Tytuł"
            size="small"
            className="m-container__form__input"
          />
          <TextField
            variant="outlined"
            label="Tytuł"
            size="small"
            className="m-container__form__input"
            multiline={true}
          />
          <Button component="label" color="primary">
            <input type="file" />
          </Button>
        </form>
      </Container>
    </Styled.Dashboard>
  );
}
