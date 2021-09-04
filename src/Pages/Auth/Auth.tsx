import * as Styled from "./styles.d";
import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
import useInput from "../../Hooks/useInput";
import axios from "axios";
import { API } from "../../assets/constants/consts";
import { useDispatch } from "react-redux";
import { UserActions } from "../../redux/User/user";

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

  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: any) {
    e.preventDefault();

    try {
      setLoading(true);
      const { data, status } = await axios.post(`${API}/auth/login`, {
        email,
        password,
      });
      if (status === 200) {
        setResult(data);
        dispatch(UserActions.save(data));
        setLoading(false);
      }
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  }

  console.log({ result, error, loading });

  return (
    <Styled.Auth>
      <form className="form" onSubmit={onSubmit}>
        <TextField
          name="email"
          type="email"
          label="email"
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
          label="Hasło"
          variant="outlined"
          placeholder="Hasło"
          size="small"
          className="form__input"
          value={password}
          onChange={onChangePassword}
          onBlur={onBlurPassword}
          error={!isValidPassword}
        />

        <Button variant="contained" color="primary" disabled={!isFormValid}>
          Zaloguj się
        </Button>
      </form>
    </Styled.Auth>
  );
}
