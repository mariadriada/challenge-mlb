import React from "react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

import { render, waitFor } from "@testing-library/react";
import { screen } from "@testing-library/dom";

import { SearchInputProps } from "../../../types";
import SearchBar from "../SearchBar";

describe("<SearchBar />", () => {
  it("Should render properly", () => {
    const props: SearchInputProps = {
      textInput: "tectInput-mock",
      setTextInput: jest.fn(),
      handleSearch: jest.fn(),
    };
    render(<SearchBar {...props} />, { wrapper: BrowserRouter });
    expect(screen.getAllByRole("img")).toHaveLength(2);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("Should call handle fucntion when clicked on search image", async () => {
    const props: SearchInputProps = {
      textInput: "",
      setTextInput: jest.fn(),
      handleSearch: jest.fn(),
    };
    render(<SearchBar {...props} />, { wrapper: BrowserRouter });

    const input = await waitFor(()=>screen.findByRole("textbox"))

    userEvent.type(input, "text to search");
    waitFor(()=>expect(input).toHaveValue("text to search"));

    const button = screen.getByTestId("search-input__button")
    userEvent.click(button)
    waitFor(()=> expect(props.handleSearch).toHaveBeenCalled())
  });
});
