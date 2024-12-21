import { IProduct } from "@/@types/products";
import { instance } from "@/services/api-client";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const PRODUCTS_SLICE_NAME = "products";

export const getProductsAsync = createAsyncThunk(
  `${PRODUCTS_SLICE_NAME}/fetchProducts`,
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get<IProduct[]>("products.json");

      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
