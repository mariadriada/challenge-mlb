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
