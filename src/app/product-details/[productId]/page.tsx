"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { BreadCrumbs } from "@/components/BreadCrumbs";
import { IBreadCrumbsItem } from "@/components/BreadCrumbs/types";
import { Loader } from "@/components/Loader";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { getProductsAsync } from "@/redux/products/actions";
import { selectIsLoading, selectProductData } from "@/redux/products/selectors";
import { IProduct } from "@/@types/products";
import { Sizes } from "@/@types/sizes";

export default function ProductPage() {
  const { productId } = useParams();
  const router = useRouter();

  const dispatch = useAppDispatch();
  const productsData = useAppSelector(selectProductData);
  const isLoading = useAppSelector(selectIsLoading);

  const currentProduct = productsData.find(
    ({ id }) => id === Number(productId)
  ) as IProduct;

  console.log(currentProduct);

  const breadCrumbsItems: IBreadCrumbsItem[] = [
    { name: "Home", path: "/" },
    { name: currentProduct?.name },
  ];

  useEffect(() => {
    if (!productsData.length) {
      dispatch(getProductsAsync());
    }
  }, []);

  if (isLoading || !productsData.length) {
    return <Loader size={Sizes.XXL} />;
  }

  if (!currentProduct) {
    return (
      <div className="container text-center">
        <h1 className="mb-4 text-2xl font-semibold">Product Not Found</h1>
        <button
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          onClick={() => router.push("/")}
        >
          Go Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="container h-full">
      <BreadCrumbs breadCrumbsItems={breadCrumbsItems} className="mb-10" />

      <div className="grid h-full grid-cols-1 gap-8 md:grid-cols-2">
        <div className="relative h-full min-h-50 w-full xs:min-h-72 md:max-h-100">
          <Image
            src={currentProduct.image}
            alt={currentProduct.name}
            layout="fill"
            objectFit="cover"
            className="h-full w-full rounded-sm"
          />
        </div>

        <div>
          <h1 className="mb-4 text-3xl font-bold">{currentProduct.name}</h1>
          <p className="mb-6 text-white">{currentProduct.description}</p>

          <span className="mb-4 text-2xl font-semibold text-green-500">
            ${currentProduct.price}
          </span>
        </div>
      </div>
    </div>
  );
}
