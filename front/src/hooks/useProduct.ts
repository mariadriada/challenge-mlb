import { useEffect } from "react";

import { useGlobalStore } from "../redux-toolkit/store";
import { ParamsToSearch } from "../types";

const useProduct = (query: string, token: string) => {
  const { products, isAuthenticated, searchProducts } = useGlobalStore();

  useEffect(() => {
    if(isAuthenticated) {
      const params: ParamsToSearch = {query, token}
      token && searchProducts(params);
    }
  }, [token, isAuthenticated]);

  return {
    products
  };
};

export default useProduct;
