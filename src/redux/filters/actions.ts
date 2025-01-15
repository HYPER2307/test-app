import { createAction } from "@reduxjs/toolkit";
import { IDropdownItem } from "@/components/Dropdown/types";

export const FILTERS_SLICE_NAME = "filters";

type setMinMaxPriceParams = [number, number];

export const setMinMaxPrice = createAction(
  `${FILTERS_SLICE_NAME}/setMinMaxPrice`,
  ([minPrice, maxPrice]: setMinMaxPriceParams) => ({
    payload: { minPrice, maxPrice },
  })
);

export const setCurrentCategory = createAction(
  `${FILTERS_SLICE_NAME}/setCurrentCategory`,
  (category: IDropdownItem) => ({ payload: category })
);
