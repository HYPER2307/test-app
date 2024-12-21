"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/hooks/redux";
import { selectProductData } from "@/redux/products/selectors";

export const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const router = useRouter();

  const dropdownRef = useRef<HTMLDivElement>(null);

  const productsData = useAppSelector(selectProductData);

  const filteredProducts = productsData.filter(({ name }) =>
    name.toLowerCase().trim().includes(searchValue.toLowerCase().trim())
  );

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
    setIsDropdownOpen(true);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  const handleViewDetails = (id: number) => {
    router.push(`/product-details/${id}`);

    setIsDropdownOpen(false);
    setSearchValue("");
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <header className="container !py-3">
      <div className="relative mx-auto max-w-md" ref={dropdownRef}>
        <label
          htmlFor="default-search"
          className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
            <svg
              className="h-4 w-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Search products..."
            value={searchValue}
            onChange={handleInputChange}
          />
        </div>

        {searchValue && isDropdownOpen && (
          <div className="absolute left-0 right-0 z-10 rounded border border-black bg-white p-5 pr-0 text-black">
            <div className="flex h-40 flex-col gap-3 overflow-y-scroll pr-5">
              {filteredProducts.length ? (
                <>
                  {filteredProducts.map(({ id, image, name, price }) => (
                    <div
                      key={id}
                      className="flex cursor-pointer items-center justify-between gap-3 rounded p-2 hover:bg-gray-200"
                      onClick={() => handleViewDetails(id)}
                    >
                      <Image
                        src={image}
                        alt={name}
                        width={70}
                        height={90}
                        objectFit="cover"
                        className="h-full max-h-20 w-full max-w-20 rounded"
                      />

                      <h4>{name}</h4>

                      <span>${price}</span>
                    </div>
                  ))}
                </>
              ) : (
                <p>Products not found...</p>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
