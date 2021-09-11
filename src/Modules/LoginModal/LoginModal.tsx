import * as Styled from "./styles.d";
import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
import useInput from "Hooks/useInput";
import axios from "axios";
import { API, USER_PREFIX } from "assets/constants/consts";
import { useDispatch, useSelector } from "react-redux";
import { UserActions } from "redux/User/user";
import { useHistory } from "react-router";
import useLocalStorage from "Hooks/useLocalStorage";
import { ModalActions } from "redux/Modals/Modals";

export default function LoginModal({ show, top }: { show: any; top: number }) {
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

  const history = useHistory();
  const { addToLocalStorage } = useLocalStorage();

  const [success, setSuccess] = useState(false);

  async function onSubmit(e: any) {
    e.preventDefault();

    try {
      dispatch(UserActions.loading());
      const { data, status } = await axios.post(`${API}/auth/login`, {
        email,
        password,
      });

      if (status === 200 || status === 201) {
        dispatch(UserActions.save(data));
        dispatch(UserActions.loading());
        dispatch(UserActions.error({ data: "" }));
        dispatch(ModalActions.toggleLogin());
        addToLocalStorage(USER_PREFIX, {
          token: data.token,
          username: data.email,
          user_id: data.user_id,
        });
        setSuccess(true);
        history.push("/");
      }
    } catch (error: any) {
      dispatch(
        UserActions.error({
          error: "Logowanie nie udane",
        })
      );
      dispatch(UserActions.loading());
      setEmail("");
      setPassword("");
    }
  }

  const { error } = useSelector((state: any) => state.user);

  return show ? (
    <Styled.Auth>
      <form className="form" onSubmit={onSubmit} style={{ top: top * 0.9 }}>
        {!!error && <p style={{ marginBottom: 10, color: "red" }}>{error}</p>}
        {success && (
          <p style={{ marginBottom: 10, color: "green" }}>
            Zalogowano pomyślnie
          </p>
        )}

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
          style={{ marginTop: 10 }}
        >
          Zaloguj się
        </Button>
      </form>
    </Styled.Auth>
  ) : null;
}
