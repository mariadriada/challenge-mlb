import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";

import LayoutContent from "../LayoutContent";

describe("<LayoutContent />", () => {
  it("Should render properly", () => {
    render(<LayoutContent><h1>This is a test component mock</h1></LayoutContent>);
    expect(screen.getByRole("heading", {name:/This is a test component mock/g})).toBeInTheDocument();
  });
});
