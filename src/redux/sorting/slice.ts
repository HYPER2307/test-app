import { SortingParams } from "@/@types";
import { IDropdownItem } from "@/components/Dropdown/types";
import { createSlice } from "@reduxjs/toolkit";
import { SORTING_SLICE_NAME } from "./actions";
import { setSortParamReducer } from "./reducers";

export interface ISortingState {
  sortParam: IDropdownItem;
}

export const initialState: ISortingState = {
  sortParam: { id: 3, label: "Default", slug: SortingParams.DEFAULT },
};

export const { reducer: sorting } = createSlice({
  name: SORTING_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers(builder) {
    setSortParamReducer(builder);
  },
});
