import React from "react";
import { BrowserRouter } from "react-router-dom";

import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";

import { Item } from "../../../../types";
import ListItem from "../ListItem";

describe("<ListItem />", () => {
  it("Should render properly with list", () => {
    const props: Item =   {
      id: "id-mock2",
      title: "title-mock",
      price: {
        amount: 123456,
        currency: "ARS",
        decimals: 0,
      },
      picture: "http://test.com/test.png",
      condition: "condition-mock",
      free_shipping: true,
      state_name: "state-mock",
    }

    render(<ListItem {...props} />, {wrapper:BrowserRouter});
    
    expect(screen.getByRole("img", { name: "title-mock" })).toBeInTheDocument()
    expect(screen.getByText("title-mock")).toBeInTheDocument()
    expect(screen.getByText("condition-mock")).toBeInTheDocument()
    expect(screen.getByText("state-mock")).toBeInTheDocument()
    expect(screen.getByText(/123.456/g)).toBeInTheDocument()
  });
});
