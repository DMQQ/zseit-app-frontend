import * as Styled from "./styles.d";
import { Button, ButtonGroup, TextField } from "@material-ui/core";
import { useState } from "react";
import useInput from "Hooks/useInput";
import axios from "axios";
import { API, USER_PREFIX } from "assets/constants/consts";
import { useDispatch, useSelector } from "react-redux";
import { UserActions } from "redux/User/user";
import { useHistory } from "react-router";
import useLocalStorage from "Hooks/useLocalStorage";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const {
    isValid: isValidEmail,
    onBlur: onBlurEmail,
    onChange: onChangeEmail,
  } = useInput({
    value: email,
    setValue: setEmail,
  });
  const {
    isValid: isValidPassword,
    onBlur: onBlurPassword,
    onChange: onChangePassword,
  } = useInput({ value: password, setValue: setPassword });

  const isFormValid =
    isValidEmail && isValidPassword && email !== "" && password !== "";

  const [type, setType] = useState("login");

  const history = useHistory();
  const { addToLocalStorage } = useLocalStorage();

  async function onSubmit(e: any) {
    e.preventDefault();

    try {
      dispatch(UserActions.loading());
      const { data, status } = await axios.post(`${API}/auth/${type}`, {
        email,
        password,
      });

      if (status === 200 || status === 201) {
        dispatch(UserActions.save(data));
        dispatch(UserActions.loading());
        addToLocalStorage(USER_PREFIX, {
          token: data.token,
          username: data.email,
          user_id: data.user_id,
        });

        history.push("/");
      }
    } catch (error: any) {
      dispatch(
        UserActions.error({
          error:
            type === "login"
              ? "Logowanie nie udane"
              : "Rejestracja nie powiodła się",
        })
      );
      dispatch(UserActions.loading());
      setEmail("");
      setPassword("");
    }
  }

  const { error, loading } = useSelector((state: any) => state.user);

  console.log({ loading });

  return (
    <Styled.Auth>
      <form className="form" onSubmit={onSubmit}>
        <ButtonGroup
          disableElevation
          variant="contained"
          style={{ marginBottom: 40 }}
        >
          <Button
            color={type === "login" ? "primary" : "inherit"}
            onClick={() => setType("login")}
          >
            Login
          </Button>
          <Button
            onClick={() => setType("register")}
            color={type === "register" ? "primary" : "inherit"}
          >
            Register
          </Button>
        </ButtonGroup>

        {!!error && <p style={{ marginBottom: 10, color: "red" }}>{error}</p>}

        <TextField
          name="email"
          type="email"
          label="email*"
          variant="outlined"
          placeholder="e-mail"
          size="small"
          className="form__input"
          value={email}
          onChange={onChangeEmail}
          onBlur={onBlurEmail}
          error={!isValidEmail}
        />
        <TextField
          name="password"
          type="password"
          label="hasło*"
          variant="outlined"
          placeholder="Hasło"
          size="small"
          className="form__input"
          value={password}
          onChange={onChangePassword}
          onBlur={onBlurPassword}
          error={!isValidPassword}
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={!isFormValid}
        >
          Zaloguj się
        </Button>
      </form>
    </Styled.Auth>
  );
}
