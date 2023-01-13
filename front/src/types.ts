import { ReactNode } from "react";

export type StoreProviderProps = {
  children: ReactNode;
};

export type WithChildren = {
  children: ReactNode;
};

export type InputProps = {
  type: "text" | "number";
  placeholder: string;
  textInput: string;
  setTextInput: Function;
};

export type SearchInputProps = {
  textInput: string;
  setTextInput: (query: string) => void;
  handleSearch: (query: string) => void;
};

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
  id?: string;
  title?: string;
  price?: Price;
  picture?: string;
  condition?: string;
  free_shipping?: boolean;
  sold_quantity?: number;
  description?: string;
};

export type Author = {
  name: string;
  lastname: string;
};

export type ParamsToSearch = {
  query?: string;
  token: string;
  id?:string;
};

export type SearchPageProps = {
  query: string;
};

export type ListProps = {
  dataList: Array<Item>;
};

export type BreadcrumbProps = {
  data: Array<string>;
};
