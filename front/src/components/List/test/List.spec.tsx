import React from "react";
import { BrowserRouter } from "react-router-dom";

import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";

import { ListProps } from "../../../types";
import List from "../List";

describe("<List />", () => {
  it("Should render properly with list", () => {
    const props: ListProps = {
      dataList: [
        {
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
          state_name: "state-mock",
        },
        {
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
        },
      ],
    };
    render(<List {...props} />, {wrapper:BrowserRouter});
    
    expect(screen.getAllByRole("img", { name: "title-mock" })).toHaveLength(2)
    expect(screen.getAllByText("title-mock")).toHaveLength(2)
    expect(screen.getAllByText("condition-mock")).toHaveLength(2)
    expect(screen.getAllByText("state-mock")).toHaveLength(2)
    expect(screen.getAllByText(/123.456/g)).toHaveLength(2)
  });
});
