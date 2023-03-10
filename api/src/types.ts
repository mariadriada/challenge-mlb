export type Price = {
  currency: string;
  amount: number;
  decimals: number;
};

export type Item = {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  state_name: string;
};

export type OneItem = {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity: number;
  description: string;
  category: string
};

export type Author = {
  name: string;
  lastname: string;
};

export type ResposeItems = {
  categories: Array<string>;
  items: Array<Item>;
};

export type ResposeItemsWithAuthor = {
  author: Author;
  categories: Array<string>;
  items: Array<Item>;
};

export type ItemCondition = {
  id: string;
  value_name: string
}
