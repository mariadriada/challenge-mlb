import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";

import FreeShipping from "../FreeShipping";

describe("<FreeShiping/>", () => {
  it("Should render properly", () => {
    render(<FreeShipping/>);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
