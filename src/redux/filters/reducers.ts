import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { setCurrentCategory, setMinMaxPrice } from "./actions";
import { IFiltersState } from "./slice";

type Reducer = (builder: ActionReducerMapBuilder<IFiltersState>) => void;

export const setMinMaxPriceReducer: Reducer = (builder) => {
  builder.addCase(setMinMaxPrice, (state, action) => {
    state.minPrice = action.payload.minPrice;
    state.maxPrice = action.payload.maxPrice;
  });
};

export const setCurrentCategoryReducer: Reducer = (builder) => {
  builder.addCase(setCurrentCategory, (state, action) => {
    state.currentCategory = action.payload;
  });
};
