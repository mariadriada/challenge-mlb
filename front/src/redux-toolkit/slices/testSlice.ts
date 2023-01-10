import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface TestState {
  message: string;
}

const initialState: TestState = {
  message: "THis is a test message",
};

export const TestSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    test: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const { test } = TestSlice.actions;

export const selectTest = (state: RootState) =>
  state.test.message;

export default TestSlice.reducer;