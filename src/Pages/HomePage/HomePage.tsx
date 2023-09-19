import Carousel from "@/Layout/Components/Carousel";
import React from "react";
import { Hero } from "@/assets/index";
import CategoryCard from "@/Layout/Components/CategoryCard";
import { Cards } from "@/helper/config";

const images: string = Hero;

const HomePage = () => {
  return (
    <article className="">
      <Carousel
        images={images}
        topText="New Collection"
        headingText="Menswear 2020"
        primaryButton="Shop the Menwear"
        secondaryButton="Shop Sale"
      />
      <section className="flex justify-center items-center gap-5 flex-wrap">
        {Cards.map(({ img, text, id , link }) => (
          <CategoryCard img={img} text={text} key={id} link={link} />
        ))}
      </section>
    </article>
  );
};

export default HomePage;
