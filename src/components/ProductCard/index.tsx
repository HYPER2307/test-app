import { IProduct } from "@/@types/products";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { Button } from "../Button";

export const ProductCard: FC<IProduct> = ({ id, image, name, price }) => {
  const router = useRouter();

  const onViewDetails = () => {
    router.push(`/product-details/${id}`);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col min-w-50 max-w-60 w-full">
      <Image
        src={image}
        alt="Product"
        className="w-full object-cover"
        width={150}
        height={150}
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600 mt-2">${price}</p>
        <Button
          onClick={onViewDetails}
          className="mt-auto bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          View Details
        </Button>
      </div>
    </div>
  );
};
