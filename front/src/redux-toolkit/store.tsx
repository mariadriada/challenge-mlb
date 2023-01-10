import React, { FC, Context, ReactNode } from "react";
import { configureStore, Store, Action, AnyAction } from "@reduxjs/toolkit";
import { Provider, ReactReduxContextValue } from "react-redux";
import TestReducer, {selectTest, test} from "./slices/testSlice";
import { useGlobalDispatch, useGlobalSelector } from "./hooks";
import { globalContext } from "./context";
import { StoreProviderProps } from "../types";

export const store: Store = configureStore({
  reducer: {
    test: TestReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useGlobalStore = () => {
  const testMessage = useGlobalSelector(selectTest);
  const dispatch = useGlobalDispatch();
  return {
    testMessage,
    test: (l: string) => dispatch(test(l)),
  };
};

export const GlobalStoreProvider = ({ children }: StoreProviderProps) => {
  return (
    <Provider store={store} context={globalContext}>
      {children}
    </Provider>
  );
};