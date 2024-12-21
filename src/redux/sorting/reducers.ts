import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { setSortParam } from "./actions";
import { ISortingState } from "./slice";

type Reducer = (builder: ActionReducerMapBuilder<ISortingState>) => void;

export const setSortParamReducer: Reducer = (builder) => {
  builder.addCase(setSortParam, (state, action) => {
    state.sortParam = action.payload;
  });
};
