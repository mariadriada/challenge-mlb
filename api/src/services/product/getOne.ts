import fetch from "node-fetch";

import config from "../../config";
const { API_URL, ITEMS_ENDPOINT } = config;
import { getDescription } from "./getDescription";
import { OneItem, ItemCondition } from "../../types";

export const getOne = async (id: string) => {
  const url = `${API_URL}${ITEMS_ENDPOINT}${id}`;

  try {
    const response = await fetch(url, { method: "GET" });
    const data = await response.json();
    const {
      id,
      title,
      condition,
      price,
      currency_id: currencyId,
      thumbnail,
      shipping,
      sold_quantity: soldQuantity,
      attributes
    } = data;

    const { free_shipping: freeShipping } = shipping;
    const itemContition: ItemCondition = attributes.find(
      (item: ItemCondition) => item.id === "ITEM_CONDITION"
    );
    const description = await getDescription(id);

    const item: OneItem = {
      id,
      title,
      price: {
        currency: currencyId,
        amount: price,
        decimals: 0,
      },
      picture: thumbnail,
      condition: itemContition.value_name,
      free_shipping: freeShipping,
      sold_quantity: soldQuantity,
      description,
    };
    return item;
  } catch (error: any) {
    return new Error(error);
  }
};
