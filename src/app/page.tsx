"use client";

import { useEffect, useState } from "react";
import { SortingParams } from "@/@types";
import { BreadCrumbs } from "@/components/BreadCrumbs";
import { IBreadCrumbsItem } from "@/components/BreadCrumbs/types";
import { Filtering } from "@/components/Filtering";
import { Loader } from "@/components/Loader";
import { Pagination } from "@/components/Pagination";
import { RenderCards } from "@/components/ProductCard/RenderCards";
import { Sorting } from "@/components/Sorting";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { selectFiltersState } from "@/redux/filters/selectors";
import { getProductsAsync } from "@/redux/products/actions";
import { selectIsLoading, selectProductData } from "@/redux/products/selectors";
import { selectSortingState } from "@/redux/sorting/selectors";
import { Sizes } from "@/@types/sizes";

const productsPerPage = 8;

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useAppDispatch();

  const productsData = useAppSelector(selectProductData);
  const isLoading = useAppSelector(selectIsLoading);
  const { minPrice, maxPrice, currentCategory } =
    useAppSelector(selectFiltersState);

  const { sortParam } = useAppSelector(selectSortingState);

  const filteredProducts = productsData.filter(
    ({ category, price }) =>
      price >= minPrice &&
      price <= maxPrice &&
      (currentCategory.label === "Default" ||
        category === currentCategory.label)
  );

  const products = filteredProducts.length ? filteredProducts : productsData;

  const sortProducts = () => {
    const productsCopy = [...products];

    switch (sortParam.slug) {
      case SortingParams.PRICE_ASC:
        return productsCopy.sort((a, b) => a.price - b.price);

      case SortingParams.PRICE_DESC:
        return productsCopy.sort((a, b) => b.price - a.price);

      default:
        return productsCopy;
    }
  };

  const sortedProducts = sortProducts();

  console.log(products, sortedProducts);

  const pagesCount = Math.ceil(products.length / productsPerPage);

  const firstProductIndex = (currentPage - 1) * productsPerPage;
  const lastProductIndex = firstProductIndex + productsPerPage;

  const paginatedProducts = sortedProducts.slice(
    firstProductIndex,
    lastProductIndex
  );

  const breadCrumbsItems: IBreadCrumbsItem[] = [{ name: "Home" }];

  useEffect(() => {
    if (!productsData.length) {
      dispatch(getProductsAsync());
    }
  }, [dispatch, productsData]);

  if (isLoading) {
    return <Loader size={Sizes.XXL} />;
  }

  return (
    <div className="container">
      <BreadCrumbs breadCrumbsItems={breadCrumbsItems} className="mb-10" />

      <div className="mb-10 w-full">
        <div className="sm flex flex-col items-center sm:flex-row-reverse">
          <div className="w-40">
            <Sorting />
          </div>
          <Filtering setCurrentPage={setCurrentPage} />
        </div>
      </div>

      <div className="flex-1">
        <RenderCards
          className="mb-10 grid grid-cols-auto-fill justify-items-center gap-5"
          products={paginatedProducts || []}
        />

        <Pagination
          pagesCount={pagesCount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}
