import fetch from "node-fetch";

import config from "../../config";
const { API_URL, SEARCH_ENDPOINT } = config;
import { Item, ResposeItems } from "../../types";

export const getItems = async (q: string) => {
  const url = `${API_URL}${SEARCH_ENDPOINT}?q=${q}`;

  try {
    const response = await fetch(url, { method: "GET" });
    const data = await response.json();
    const categories:Array<string> = [] 

    const items = data.results
      .filter((_: any, i: number) => i < 4)
      .map(
        ({
          id,
          title,
          condition,
          price,
          currency_id: currencyId,
          thumbnail,
          shipping,
          address,
          category_id: categoryId
        }: any) => {
          const { free_shipping: freeShipping } = shipping;
          const { state_name: stateName } = address;
          categories.push(categoryId)
          const item: Item = {
            id,
            title,
            price: {
              currency: currencyId,
              amount: price,
              decimals: 0,
            },
            picture: thumbnail,
            condition,
            free_shipping: freeShipping,
            state_name: stateName,
          };
          return item;
        }
      );

    const results: ResposeItems = {
      categories,
      items,
    };
    return results;
  } catch (error: any) {
    return new Error(error);
  }
};
