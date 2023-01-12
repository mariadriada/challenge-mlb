import React, { FC, FormEventHandler, useState } from "react";

import { Input } from "../../Input";
import { SearchInputProps } from "../../../types";
import SearchMobileImg from "../../../assets/images/ic_Search.png";
import SearchDesktopImg from "../../../assets/images/ic_Search@2x.png";
import "./search-input.scss";

const SearchInput: FC<SearchInputProps> = ({
  handleSearch,
}: SearchInputProps) => {
  const [textInput, setTextInput] = useState<string>("");

  const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
    handleSearch(textInput);
  };

  return (
    <div className="search-input">
      <Input
        type="text"
        placeholder="Nunca dejes de buscar"
        textInput={textInput}
        setTextInput={setTextInput}
      />
      <div className="search-input__button" onClick={handleClick}>
        <picture>
          <source srcSet={SearchMobileImg} media="(max-width:650px)" />
          <img src={SearchDesktopImg} alt="" />
        </picture>
      </div>
    </div>
  );
};

export default SearchInput;
