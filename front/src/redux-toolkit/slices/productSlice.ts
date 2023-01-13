import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import type { RootState } from "../store";
import { getAll, getOne } from "../../services/products";
import { sortArrayDesc } from "../../general-functions";
import { Item, ParamsToSearch, OneItem } from "../../types";

interface ProductState {
  products: Array<Item>;
  queryString: string;
  breadcrumbData: Array<string>;
  breadcrumbDataOne: Array<string>;
  currentProduct: OneItem;
  error: Boolean;
}

const initialState: ProductState = {
  products: [],
  queryString: "",
  breadcrumbData: [],
  currentProduct: {},
  breadcrumbDataOne: [],
  error: false
};

export const searchProducts = createAsyncThunk(
  "product/search",
  async ({ query = "", token }: ParamsToSearch, { dispatch }) => {
    const data = await getAll(query, token);
    dispatch(setQueryString(query));
    dispatch(setBreadcrumbToList(data.categories));
    return data;
  }
);

export const searchOneProduct = createAsyncThunk(
  "product/searchOne",
  async ({ id = "", token }: ParamsToSearch, thunkAPI) => {
    const data = await getOne(id, token);
    const state = thunkAPI.getState();
    const categories = state?.product.breadcrumbData;
    thunkAPI.dispatch(setBreadcrumbToItem({ data, categories }));
    return data;
  }
);

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setQueryString: (state, { payload }) => {
      state.queryString = decodeURI(payload);
    },
    setBreadcrumbToList: (state, { payload }) => {
      state.breadcrumbData = sortArrayDesc(payload);
    },
    setBreadcrumbToItem: (state, { payload }) => {
      const { data, categories } = payload;
      const { category } = data || "";

      //Search category in current breadcrumb to reorder for add it at last item
      if (categories.length >= 1) {
        const arr = [...categories];
        const index = arr.findIndex((i) => i === category);
        arr.splice(index, 1);
        arr.push(category);
        state.breadcrumbDataOne = sortArrayDesc(arr);
      } else {
        state.breadcrumbDataOne = sortArrayDesc([data.category]);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchProducts.fulfilled, (state, { payload }) => {
      state.products = payload;
    });
    //TODO: apply to UI
    builder.addCase(searchProducts.rejected, (state, { payload }) => {
      state.error = true
    });
    builder.addCase(searchOneProduct.fulfilled, (state, { payload }) => {
      state.currentProduct = payload;
    });
    //TODO: apply to UI
    builder.addCase(searchOneProduct.rejected, (state, { payload }) => {
      state.error = true;
    });
  },
});

export const { setQueryString, setBreadcrumbToList, setBreadcrumbToItem } =
  ProductSlice.actions;

export const selectProducts = (state: RootState) => state.product;

export default ProductSlice.reducer;
