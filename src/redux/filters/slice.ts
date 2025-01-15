import { createSlice } from "@reduxjs/toolkit";
import { IDropdownItem } from "@/components/Dropdown/types";
import { FILTERS_SLICE_NAME } from "./actions";
import { setCurrentCategoryReducer, setMinMaxPriceReducer } from "./reducers";

export interface IFiltersState {
  minPrice: number;
  maxPrice: number;
  currentCategory: IDropdownItem;
}

export const initialState: IFiltersState = {
  maxPrice: 0,
  minPrice: 0,
  currentCategory: { id: 0, label: "Select category" },
};

export const { reducer: filters } = createSlice({
  name: FILTERS_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers(builder) {
    setMinMaxPriceReducer(builder);
    setCurrentCategoryReducer(builder);
  },
});
