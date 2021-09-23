import * as Styled from "./styles.d";
import { Button, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useInput from "Hooks/useInput";
import axios from "axios";
import { API, USER_PREFIX } from "assets/constants/consts";
import { useDispatch, useSelector } from "react-redux";
import { UserActions } from "redux/User/user";
import { useHistory } from "react-router";
import useLocalStorage from "Hooks/useLocalStorage";
import { ModalActions } from "redux/Modals/Modals";
import { RootState } from "redux/store";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
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

  const {
    isValid: isValidPasswordRepeat,
    onBlur: onBlurPasswordRepeat,
    onChange: onChangePasswordRepeat,
  } = useInput({ value: repeatPassword, setValue: setRepeatPassword });

  const isFormValid =
    isValidEmail && isValidPassword && email !== "" && password !== "";

  const history = useHistory();
  const { addToLocalStorage } = useLocalStorage();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (password !== repeatPassword)
      return dispatch(UserActions.error({ error: "Hasła nie są takie same" }));

    try {
      dispatch(UserActions.loading());
      const { data } = await axios.post(`${API}/auth/register`, {
        email,
        password,
      });

      dispatch(UserActions.save(data));
      dispatch(UserActions.loading());
      addToLocalStorage(USER_PREFIX, {
        token: data.token,
        username: data.username,
        user_id: data.user_id,
      });

      history.push("/");
    } catch (error: any) {
      dispatch(
        UserActions.error({
          error: error.response.data.message,
        })
      );
      dispatch(UserActions.loading());
      setEmail("");
      setPassword("");
      setRepeatPassword("");
    }
  }

  useEffect(() => {
    dispatch(ModalActions.toggleSideBar());
  }, [dispatch]);

  const { error } = useSelector((state: RootState) => state.user);

  return (
    <Styled.Auth>
      <h2 className="title">Rejestracja konta</h2>
      <form className="form" onSubmit={onSubmit}>
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

        <TextField
          name="password"
          type="password"
          label="Powtórz hasło*"
          variant="outlined"
          placeholder="Hasło"
          size="small"
          className="form__input"
          value={repeatPassword}
          onChange={onChangePasswordRepeat}
          onBlur={onBlurPasswordRepeat}
          error={!isValidPasswordRepeat}
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={!isFormValid || password !== repeatPassword}
        >
          Zaloguj się
        </Button>
      </form>
    </Styled.Auth>
  );
}
