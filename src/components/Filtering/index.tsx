import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setCurrentCategory, setMinMaxPrice } from "@/redux/filters/actions";
import { selectFiltersState } from "@/redux/filters/selectors";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { Dropdown } from "../Dropdown";
import { IDropdownItem } from "../Dropdown/types";
import { RangeSwiper } from "../RangeSwiper";
import { CATEGORIES_DROPDOWN_OPTIONS } from "./constants";

const minValue = 10;
const maxValue = 10000;

interface Props {
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export const Filtering: FC<Props> = ({ setCurrentPage }) => {
  const dispatch = useAppDispatch();
  const { minPrice, maxPrice, currentCategory } =
    useAppSelector(selectFiltersState);

  const [currentMinMaxValue, setCurrentMinMaxValue] = useState<
    [number, number]
  >([minValue, maxValue]);

  const handleOnFinalChange = (prices: [number, number]) => {
    dispatch(setMinMaxPrice(prices));
  };

  const handleSelectCategory = (category: IDropdownItem) => {
    dispatch(setCurrentCategory(category));
    setCurrentPage(1);
  };

  useEffect(() => {
    if (!minPrice && !maxPrice) {
      dispatch(setMinMaxPrice(currentMinMaxValue));
    }
  }, [dispatch, currentMinMaxValue, minPrice, maxPrice]);

  return (
    <div className="flex flex-col items-center min-w-40 w-full gap-10 xs:flex-row xs:justify-center sm:justify-start">
      <div className="w-40">
        <h4 className="text-2xl font-semibold mb-2">Price</h4>

        <RangeSwiper
          minSize={minValue}
          maxSize={maxValue}
          step={10}
          currentMinValue={currentMinMaxValue[0]}
          currentMaxValue={currentMinMaxValue[1]}
          onChange={setCurrentMinMaxValue}
          onFinalChange={handleOnFinalChange}
        />
      </div>

      <div>
        <h4 className="text-2xl font-semibold mb-2">Category</h4>

        <Dropdown
          options={CATEGORIES_DROPDOWN_OPTIONS}
          title="Select category"
          currentOption={currentCategory}
          onItemSelect={handleSelectCategory}
        />
      </div>
    </div>
  );
};
