import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IProduct } from "@/@types/products";
import { Button } from "../Button";

export const ProductCard: FC<IProduct> = ({ id, image, name, price }) => {
  const router = useRouter();

  const onViewDetails = () => {
    router.push(`/product-details/${id}`);
  };

  return (
    <div className="flex w-full min-w-50 max-w-60 flex-col overflow-hidden rounded-lg bg-white shadow-md">
      <Image
        src={image}
        alt="Product"
        className="w-full object-cover"
        width={150}
        height={150}
      />
      <div className="flex flex-grow flex-col p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="mt-2 text-gray-600">${price}</p>
        <Button
          onClick={onViewDetails}
          className="mt-auto rounded-lg bg-blue-500 px-4 py-2 font-medium text-white transition hover:bg-blue-600"
        >
          View Details
        </Button>
      </div>
    </div>
  );
};
