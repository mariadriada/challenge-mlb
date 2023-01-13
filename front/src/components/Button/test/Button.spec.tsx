import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";

import Button from "../Button";

describe("<Button/>", () => {
  it("Should render properly", () => {
    render(<Button>Test</Button>,);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
