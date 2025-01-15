import { FC } from "react";
import { IProduct } from "@/@types/products";
import { ProductCard } from ".";

interface Props {
  products: IProduct[];
  className?: string;
}

export const RenderCards: FC<Props> = ({ products, className = "" }) => (
  <div className={className}>
    {products.map((product) => (
      <ProductCard key={product.id} {...product} />
    ))}
  </div>
);
