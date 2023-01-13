import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import type { RootState } from "../store";
import { getAll } from "../../services/products/getAll";
import { sortArrayDesc } from "../../general-functions";
import { Item, ParamsToSearch } from "../../types";

interface ProductState {
  products: Array<Item>;
  queryString: string;
  breadcrumbData: Array<string>;
}

const initialState: ProductState = {
  products: [],
  queryString: "",
  breadcrumbData: [],
};

export const searchProducts = createAsyncThunk(
  "product/search",
  async ({ query, token }: ParamsToSearch, { dispatch }) => {
    const data = await getAll(query, token);
    dispatch(setQueryString(query));
    dispatch(setBreadcrumbText(data.categories));
    return data;
  }
);

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setQueryString: (state, { payload }) => {
      state.queryString = decodeURI(payload)
    },
    setBreadcrumbText: (state, { payload }) => {
      state.breadcrumbData = sortArrayDesc(payload)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchProducts.fulfilled, (state, { payload }) => {
      state.products = payload;
    });
  },
});

export const { setQueryString, setBreadcrumbText } = ProductSlice.actions;

export const selectProducts = (state: RootState) => state.product;

export default ProductSlice.reducer;
