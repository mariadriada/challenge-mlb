import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Helmet from "react-helmet";

import { useGlobalStore } from "../redux-toolkit/store";
import { Detail } from "../components/Detail";
import { Breadcrumb } from "../components/Breadcrumb";
import { SearchBar } from "../components/SearchBar";
import { LayoutContent } from "../components/LayoutContent";
import { user } from "../auth";
import { goToSearch } from "../general-functions";
import { ParamsToSearch } from "../types";
import useAuth from "../hooks/useAuth";

const DetailPage = () => {
  const { token } = useAuth(user);
  const {
    currentProduct: product,
    searchOneProduct,
    queryString,
    breadcrumbDataOne,
    setQueryString,
  } = useGlobalStore();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const param: ParamsToSearch = { id, token };
    token && id && searchOneProduct(param);
  }, [token, id]);

  const handleSearch = (query: string) => {
    goToSearch(query, navigate);
  };

  return (
    <>
      <Helmet>
        <title>{`Detalles de ${product.id}`}</title>
        <meta
          name="description"
          content={`Mostrar detalles de ${product.title}`}
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
        <Breadcrumb data={breadcrumbDataOne} />
      </section>

      <section>
        <LayoutContent>
          <Detail {...product} />
        </LayoutContent>
      </section>
    </>
  );
};

export default DetailPage;
