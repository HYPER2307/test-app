import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setSortParam } from "@/redux/sorting/actions";
import { selectSortingState } from "@/redux/sorting/selectors";
import { Dropdown } from "../Dropdown";
import { IDropdownItem } from "../Dropdown/types";
import { SORTING_DROPDOWN_OPTIONS } from "./constants";

export const Sorting = () => {
  const dispatch = useAppDispatch();
  const { sortParam } = useAppSelector(selectSortingState);

  const handleSetSortingOption = (param: IDropdownItem) => {
    dispatch(setSortParam(param));
  };

  return (
    <div className="mb-10 flex-1 sm:mb-0">
      <h4 className="mb-2 text-2xl font-semibold">Sorting</h4>

      <Dropdown
        options={SORTING_DROPDOWN_OPTIONS}
        currentOption={sortParam}
        onItemSelect={handleSetSortingOption}
      />
    </div>
  );
};
