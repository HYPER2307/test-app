import { IProduct } from "@/@types/products";
import { createSlice } from "@reduxjs/toolkit";
import { PRODUCTS_SLICE_NAME } from "./actions";
import { getProductsAsyncReducer } from "./reducers";

export interface IProductsState {
  isLoading: boolean;
  productsData: IProduct[] | [];
}

export const initialState: IProductsState = {
  isLoading: false,
  productsData: [],
};

export const { reducer: products } = createSlice({
  name: PRODUCTS_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    getProductsAsyncReducer(builder);
  },
});
