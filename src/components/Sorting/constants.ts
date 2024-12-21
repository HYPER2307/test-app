import { SortingParams } from "@/@types";
import { IDropdownItem } from "../Dropdown/types";

export const SORTING_DROPDOWN_OPTIONS: IDropdownItem[] = [
  {
    id: 1,
    label: "Price low to high",
    slug: SortingParams.PRICE_ASC,
  },
  {
    id: 2,
    label: "Price high to low",
    slug: SortingParams.PRICE_DESC,
  },
  {
    id: 3,
    label: "Default",
    slug: SortingParams.DEFAULT,
  },
];
