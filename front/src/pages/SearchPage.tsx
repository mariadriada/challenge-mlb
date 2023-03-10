import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import Helmet from "react-helmet";

import { useGlobalStore } from "../redux-toolkit/store";
import { SearchBar } from "../components/SearchBar";
import { List } from "../components/List";
import { Breadcrumb } from "../components/Breadcrumb";
import { LayoutContent } from "../components/LayoutContent";
import { goToSearch } from "../general-functions";
import { SearchPageProps } from "../types";
import { user } from "../auth";
import withQueryParams from "../HOC/withQueryParams";
import useAuth from "../hooks/useAuth";
import useProduct from "../hooks/useProduct";

const SearchPage: FC<SearchPageProps> = ({ query }: SearchPageProps) => {
  const { token } = useAuth(user);
  const { products } = useProduct(query, token);
  const { items } = products;
  const { queryString, breadcrumbData, setQueryString } = useGlobalStore();
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    goToSearch(query, navigate);
  };

  return (
    <>
      <Helmet>
        <title>Buscar productos</title>
        <meta
          name="description"
          content="Encuentra los productos que necesitas"
        />
      </Helmet>

      <section>
        <SearchBar
          textInput={queryString}
          setTextInput={setQueryString}
          handleSearch={handleSearch}
        />
      </section>

      <section>
        <Breadcrumb data={breadcrumbData} />
      </section>

      <section>
        <LayoutContent>
          <List dataList={items} />
        </LayoutContent>
      </section>
    </>
  );
};

export default withQueryParams(SearchPage, "search");
