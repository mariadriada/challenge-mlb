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
          category_id: categoryId,
          attributes,
        }: any) => {
          const { free_shipping: freeShipping } = shipping;
          const { state_name: stateName } = address;
          categories.push(categoryId)
        
          type ItemCondition = {
            id: string;
            value_name: string
          }
          const itemContition: ItemCondition = attributes.find((item: ItemCondition) =>item.id==="ITEM_CONDITION")
          
          // Calculate number of decimals based on the price
          const decimals = price.toString().indexOf(".") >= 0 ? price.toString().split(".")[1].length : 0
         
          const item: Item = {
            id,
            title,
            price: {
              currency: currencyId,
              amount: price,
              decimals,
            },
            picture: thumbnail,
            condition: itemContition.value_name,
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
