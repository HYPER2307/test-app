import { createAction } from "@reduxjs/toolkit";
import { IDropdownItem } from "@/components/Dropdown/types";

export const SORTING_SLICE_NAME = "sorting";

export const setSortParam = createAction(
  `${SORTING_SLICE_NAME}/setSortParams`,
  (param: IDropdownItem) => ({ payload: param })
);
