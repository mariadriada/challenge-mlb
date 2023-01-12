import React, { FC, FormEventHandler } from "react";
import { SearchInput } from "./SearchInput";

import { Logo } from "../Logo";
import "./search-bar.scss";

const SearchBar: FC = () => {
  const handleSearch = (query: string): void => {
    console.log("search", query);
  };

  return (
    <div className="search-bar">
      <Logo />
      <SearchInput handleSearch={handleSearch} />
    </div>
  );
};

export default SearchBar;
