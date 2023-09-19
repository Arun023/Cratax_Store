import React, { useEffect, useState } from "react";
import { CarouselProps } from "@/interfaces/homePage";
import { Button } from "@chakra-ui/react";

const Carousel = ({
  images,
  topText,
  headingText,
  primaryButton,
  secondaryButton,
}: CarouselProps) => {
  return (
    <div className="relative flex items-center">
      <div className="absolute left-96 flex-col gap-6 hidden md:flex">
        <p className="text-2xl uppercase font-bold">{topText}</p>
        <p className="text-6xl font-bold">{headingText}</p>
        <div className="flex gap-10 mt-10">
          <button className="border-[2px] border-green-700 px-6 rounded-lg text-green-700 font-medium">
            {secondaryButton}
          </button>
          <button className="bg-green-700 px-10 py-2 rounded-lg text-white font-medium">
            {primaryButton}
          </button>
        </div>
      </div>
      <img className="w-full object-contain" src={images} />
    </div>
  );
};

export default Carousel;
