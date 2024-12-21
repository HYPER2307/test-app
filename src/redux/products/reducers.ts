import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { getProductsAsync } from "./actions";
import { IProductsState } from "./slice";

type Reducer = (builder: ActionReducerMapBuilder<IProductsState>) => void;

export const getProductsAsyncReducer: Reducer = (builder) => {
  builder.addCase(getProductsAsync.pending, (state) => {
    state.isLoading = true;
  });

  builder.addCase(getProductsAsync.rejected, (state) => {
    state.isLoading = false;
    state.productsData = [];
  });

  builder.addCase(getProductsAsync.fulfilled, (state, action) => {
    state.isLoading = false;
    state.productsData = action.payload;
  });
};
