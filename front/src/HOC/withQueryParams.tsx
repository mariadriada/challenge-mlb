import React, { FC, ReactNode, useState } from "react";
import { useLocation } from "react-router-dom";

import { useGlobalStore } from "../redux-toolkit/store";

interface WithProps {
  query: string;
}

interface Props {
  children?: React.ReactNode;
}

const withQueryParams = (Component: FC<any>, param: string) => (props: any) => {


  const location = useLocation();
  const { search } = location || "";

  //Text to search to send to the component
  let query = "";

  if (search && search.indexOf(`?${param}=`) >= 0)
    query = search.slice(param.length + 2);

  const WithQueryParam = (props: any) => {
    return (
      <div>
        {!query ? <div>No quiery</div> : <Component {...props} query={query} />}
      </div>
    );
  };

  return <WithQueryParam />;
};

export default withQueryParams;
/*
export function withQueryParams<T extends WithProps = WithProps>(
    WrappedComponent: React.ComponentType<T>
  )

  export default withQueryParams

  const withQueryParams:<T extends WithProps = WithProps> = ( WrappedComponent: React.ComponentType<T>) => {

  }


const withQueryParams: <T extends WithProps = WithProps> = (WrappedComponent: React.ComponentType<T>) => {
  const [query, setQuery] = useState<string>("");
  const location = useLocation();
  const { search } = location || "";

  if (!search && search.indexOf("?search=") < 0) {
    const text = search.slice(8);
    setQuery(text)
  }

  const WithQueryParam = (props: any) => {
    return <Component {...props} />;
  };

  return WithQueryParam;
};
*/
