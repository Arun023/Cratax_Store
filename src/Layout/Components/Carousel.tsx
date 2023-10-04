import React, { useEffect, useState } from "react";
import { CarouselProps } from "@/interfaces/homePage";
import Button from "./Button";

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
          <Button primary={primaryButton} />
          <Button secondary={secondaryButton} />
        </div>
      </div>
      <img className="w-full object-contain" src={images} />
    </div>
  );
};

export default Carousel;
