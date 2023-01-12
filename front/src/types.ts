import {ReactNode} from "react"

export type StoreProviderProps = {
  children: ReactNode;
};

export type WithChildren =  {
  children: ReactNode
}

export type InputProps = {
  type: "text" | "number";
  placeholder: string;
  textInput: string,
  setTextInput: Function
}

export type SearchInputProps = {
  handleSearch: (query: string) => void
}


