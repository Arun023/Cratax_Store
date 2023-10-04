import React from "react";
import ProductCard from "./ProductCard";
import { IProductProps } from "@/interfaces/homePage";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const CarouselProduct = ({
  Items,
  card,
  category,
}: {
  Items: IProductProps[];
  card?: boolean;
  category?: boolean;
}) => {
  return (
    <section className="relative flex flex-wrap gap-5 justify-center items-center">
      {Items.map(({ price, productImage, productName, totalRating, id }) => (
        <ProductCard
          key={id}
          price={price}
          productImage={productImage}
          productName={productName}
          totalRating={totalRating}
        />
      ))}
    </section>
  );
};

export default CarouselProduct;
