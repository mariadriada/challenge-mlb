import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { BrowserRouter } from "react-router-dom";

import { BreadcrumbProps } from "../../../types";
import Breadcrumb from "../Breadcrumb";

describe("<Breadcrumb/>", () => {
  it("Should render properly with one item", () => {
    const props: BreadcrumbProps = { data: ["test"] };
    render(<Breadcrumb {...props} />, { wrapper: BrowserRouter });

    expect(screen.getByText("test")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "test" })).toBeInTheDocument();
  });

  it("Should render properly with more item", () => {
    const props: BreadcrumbProps = { data: ["test", "other"] };
    render(<Breadcrumb {...props} />, { wrapper: BrowserRouter });

    expect(screen.getByText(/test/g)).toBeInTheDocument();
    expect(screen.getByText(/other/g)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /test/g })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "other" })).toBeInTheDocument();
  });
});
