import { Text } from "@chakra-ui/react";
import React from "react";
import Button from "./Button";
import { IBannerProps } from "@/interfaces/homePage";

const BannerText = ({ heading, subHeading, btnText , btnClassApplied,subHeadingClass }:IBannerProps) => {
  return (
    <div className="absolute flex flex-col gap-1 lg:gap-3" style={{top:"25%", left:"10%"}}>
      <Text className="lg:text-lg md:text-xl text-md font-bold">{heading}</Text>
      <Text className={`lg:text-3xl md:text-xl text-sm font-bold ${subHeadingClass? subHeadingClass : "w-full "}`}>{subHeading}</Text>
      <Button classAppiled={btnClassApplied} secondary={btnText} />
    </div>
  );
};

export default BannerText;
