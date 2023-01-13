import { configureStore, Store } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import AuthReducer, { selectState, authenticate } from "./slices/authSlice";
import productSlice, {selectProducts, searchProducts, setQueryString} from "./slices/productSlice";
import {
  useGlobalDispatch,
  useGlobalSelector,
} from "./hooks";
import { globalContext } from "./context";
import { StoreProviderProps, Author } from "../types";

export const store: Store = configureStore({
  reducer: {
    authentication: AuthReducer,
    product: productSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useGlobalStore = () => {
  const authSelect = useGlobalSelector(selectState);
  const productSelect = useGlobalSelector(selectProducts);

  const {token, isAuthenticated} = authSelect
  const {queryString, products} = productSelect

  const dispatch = useGlobalDispatch();
  return {
    token,
    isAuthenticated,
    products,
    queryString,
    authenticate: (user: Author) => dispatch(authenticate(user)),
    searchProducts: (query: string) => dispatch(searchProducts(query)),
    setQueryString: (query: string) => dispatch(setQueryString(query)),
  };
};

export const GlobalStoreProvider = ({ children }: StoreProviderProps) => {
  return (
    <Provider store={store} context={globalContext}>
      {children}
    </Provider>
  );
};
