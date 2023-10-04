import { IProductProps } from "@/interfaces/homePage";
import { Box, Image, Text } from "@chakra-ui/react";
import { Heart, Star } from "lucide-react";
import React from "react";

const ProductCard = ({
  productName,
  price,
  totalRating,
  productImage,
}: IProductProps) => {
  const totalStars = 5;
  return (
    <div className="flex relative gap-5 flex-col">
      <Box display={"flex"} position={"absolute"} right={50} top={"5px"}>
        {[...Array(totalStars)].map((data, index) => (
          <Star
            fill={`${index < totalRating ? "gold" : "white"}`}
            color="gold"
          />
        ))}
      </Box>
      <Heart className="absolute left-10 top-2" />
      <Image src={productImage} className="w-full h-full object-cover" />
      <Text className="text-gray-700 text-md lg:text-xl px-5 font-normal">
        {productName}
      </Text>
      <Text className="font-semibold text-2xl px-5">{price}</Text>
    </div>
  );
};

export default ProductCard;
