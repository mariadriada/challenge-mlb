import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { SearchBar } from "../components/SearchBar";
import { useGlobalStore } from "../redux-toolkit/store";
import { SearchInputProps } from "../types";
import { goToSearch } from "../general-functions";

const HomePage: FC<SearchInputProps> = () => {
  const { queryString, setQueryString } = useGlobalStore();
  const navigate = useNavigate();

  const handleSearch = (query: string)=>{
    goToSearch(query, navigate)
  }
 
  return (
    <SearchBar
      textInput={queryString}
      setTextInput={setQueryString}
      handleSearch={handleSearch}
    />
  );
};

export default HomePage;
