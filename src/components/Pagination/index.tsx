import { Dispatch, FC, SetStateAction } from "react";
import cn from "classnames";

interface Props {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  pagesCount: number;
}

export const Pagination: FC<Props> = ({
  currentPage,
  setCurrentPage = () => {},
  pagesCount,
}) => {
  const pagesArray = Array.from(
    { length: pagesCount },
    (_, index) => index + 1
  );

  const handleNextPage = () => {
    if (currentPage < pagesCount) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  console.log(currentPage);

  const handleSetPage = (page: number) => {
    if (page !== currentPage) {
      setCurrentPage(page);
    }
  };

  return (
    <nav className="flex w-full justify-center">
      <ul className="flex h-10 items-center -space-x-px text-base">
        <li
          className="ms-0 flex h-10 cursor-pointer items-center justify-center rounded-s-lg border border-e-0 border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={handlePrevPage}
        >
          <span className="sr-only">Previous</span>
          <svg
            className="h-3 w-3 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </li>
        {pagesArray.map((page) => (
          <li
            key={page}
            className={cn(
              "flex h-10 cursor-pointer items-center justify-center border border-gray-300 bg-white px-4 leading-tight text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400",
              {
                "cursor-not-allowed opacity-80": page === currentPage,
                "hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white":
                  page !== currentPage,
              }
            )}
            role="button"
            onClick={() => handleSetPage(page)}
          >
            {page}
          </li>
        ))}
        <li
          className="flex h-10 cursor-pointer items-center justify-center rounded-e-lg border border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={handleNextPage}
        >
          <span className="sr-only">Next</span>
          <svg
            className="h-3 w-3 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </li>
      </ul>
    </nav>
  );
};
