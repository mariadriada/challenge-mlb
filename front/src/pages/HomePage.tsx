import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Helmet from "react-helmet";

import { SearchBar } from "../components/SearchBar";
import { useGlobalStore } from "../redux-toolkit/store";
import { goToSearch } from "../general-functions";

const HomePage: FC = () => {
  const { queryString, setQueryString } = useGlobalStore();
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    goToSearch(query, navigate);
  };

  return (
    <>
      <Helmet>
        <title>MercadoTest</title>
        <meta name="description" content="Sitio web de e-commerce" />
        <meta
          name="keywords"
          content="E-commerce, Hogar, Tecnologia, Entretenimiento"
        />
      </Helmet>

      <section>
        <SearchBar
          textInput={queryString}
          setTextInput={setQueryString}
          handleSearch={handleSearch}
        />
      </section>
    </>
  );
};

export default HomePage;
