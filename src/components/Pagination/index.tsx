import cn from "classnames";
import { Dispatch, FC, SetStateAction } from "react";

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
      <ul className="flex items-center -space-x-px h-10 text-base">
        <li
          className="cursor-pointer flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={handlePrevPage}
        >
          <span className="sr-only">Previous</span>
          <svg
            className="w-3 h-3 rtl:rotate-180"
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
              "flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 cursor-pointer",
              {
                "opacity-80 cursor-not-allowed": page === currentPage,
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
          className="cursor-pointer flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={handleNextPage}
        >
          <span className="sr-only">Next</span>
          <svg
            className="w-3 h-3 rtl:rotate-180"
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
