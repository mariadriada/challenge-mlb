import React, { FC } from "react";

import { InputProps } from "../../types";
import "./input.scss";

const Input: FC<InputProps> = ({
  type,
  placeholder,
  textInput,
  setTextInput,
}: InputProps) => {
  const handleChange = (e: React.FormEvent<HTMLInputElement>): void =>
    setTextInput(e.currentTarget.value);

  return (
    <input
      className="input"
      type={type}
      placeholder={placeholder}
      value={textInput}
      onChange={handleChange}
    />
  );
};

export default Input;
