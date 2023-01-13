import {
  createSlice,
  createAsyncThunk,
  AsyncThunkAction,
} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "../store";
import { login } from "../../services/auth/authenticate";
import { Item, Author } from "../../types";
import { useGlobalDispatch } from "../hooks";

interface AuthState {
  token: string;
  isAuthenticated: Boolean;
}

const initialState: AuthState = {
  token: "",
  isAuthenticated: false,
};

export const authenticate = createAsyncThunk(
  "authentication/auth",
  async (user: Author) => {
    const data = await login(user);
    return data;
  }
);

export const AuthSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authenticate.fulfilled, (state, { payload }) => {
      state.isAuthenticated = true;
      state.token = payload.token;
    });
  },
});

export const selectState = (state: RootState) => state.authentication;

export default AuthSlice.reducer;
