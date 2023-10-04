import { ProductOne } from "@/assets/index";
import { IProductCategoryProps } from "@/interfaces/homePage";
import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const ProductCategory = ({
  prodImage,
  prodTitle,
}: IProductCategoryProps) => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}>
      <Image
        src={prodImage}
        className="rounded-full w-60 h-60 border border-gray-500"
      />
      <Text className="font-semibold">{prodTitle}</Text>
    </Box>
  );
};

export default ProductCategory;
