import Carousel from "@/Layout/Components/Carousel";
import React from "react";
import { Hero, Banner2 } from "@/assets/index";

const images: string[] = [Hero, Banner2];

const HomePage = () => {
  return (
    <section className="">
      <Carousel images={images} />
    </section>
  );
};

export default HomePage;
