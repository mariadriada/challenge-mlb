import React, { FC, FormEventHandler } from "react";

import { SearchInput } from "./SearchInput";
import { Logo } from "../Logo";
import { SearchInputProps } from "../../types";
import "./search-bar.scss";

const SearchBar: FC<SearchInputProps> = ({
  textInput,
  setTextInput,
  handleSearch,
}: SearchInputProps) => {
  return (
    <div className="search-bar">
      <Logo />
      <SearchInput
        textInput={textInput}
        setTextInput={setTextInput}
        handleSearch={handleSearch}
      />
    </div>
  );
};

export default React.memo(SearchBar);
