import { IDropdownItem } from "@/components/Dropdown/types";
import { createAction } from "@reduxjs/toolkit";

export const SORTING_SLICE_NAME = "sorting";

export const setSortParam = createAction(
  `${SORTING_SLICE_NAME}/setSortParams`,
  (param: IDropdownItem) => ({ payload: param })
);
