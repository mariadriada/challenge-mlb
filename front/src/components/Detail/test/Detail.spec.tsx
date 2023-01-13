import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { OneItem } from "../../../types";

import Detail from "../Detail";

describe("<Detail/>", () => {
  it("Should render properly", () => {
    const props: OneItem = {
      id: "id-mock",
      title: "title-mock",
      price: {
        amount: 123456,
        currency: "ARS",
        decimals: 0,
      },
      picture: "http://test.com/test.png",
      condition: "condition-mock",
      free_shipping: true,
      sold_quantity: 4,
      description: "description-mock",
    };

    render(<Detail {...props} />);

    expect(
      screen.getByText(/condition-mock - 4 Vendidos/g)
    ).toBeInTheDocument();
    expect(screen.getAllByRole("heading")).toHaveLength(2);
    expect(
      screen.getByRole("heading", { name: "title-mock" })
    ).toBeInTheDocument();
    expect(screen.getAllByRole("heading").at(1)).toHaveTextContent(
      "Descripción del producto"
    );
    expect(screen.getByText("description-mock")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "title-mock" })).toBeInTheDocument();
    expect(screen.getByText("Comprar")).toBeInTheDocument();
    expect(screen.getByText(/123.456/g)).toBeInTheDocument();
  });
});
