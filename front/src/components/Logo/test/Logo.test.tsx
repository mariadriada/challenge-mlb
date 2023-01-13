import React from "react";
import { BrowserRouter } from "react-router-dom";

import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";

import Logo from "../Logo";

describe("<Logo />", () => {
  it("Should render properly", () => {
    render(<Logo />, {wrapper: BrowserRouter});
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

});
