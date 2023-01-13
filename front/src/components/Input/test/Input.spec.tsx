import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { InputProps } from "../../../types";

import Input from "../Input";

describe("<Input />", () => {
  it("Should render properly", () => {
    const props: InputProps = {
      type: "text",
      placeholder: "placeholder-mock",
      textInput: "textInput-mock",
      setTextInput: jest.fn(),
    };
    render(<Input {...props} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
