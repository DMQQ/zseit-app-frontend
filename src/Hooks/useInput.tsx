import { useState } from "react";

const validateInput = (value: string) => value.trim().length > 6;

type useInputProps = {
  value: string;
  setValue: (p: any) => void;
};

export default function useInput({ value, setValue }: useInputProps) {
  const [touched, setTouched] = useState(false);

  function onBlur() {
    setTouched(true);
  }

  function onChange(e: any) {
    setValue(e.target.value);
  }

  const isValid = touched ? validateInput(value) : true;

  return { onBlur, isValid, onChange };
}
