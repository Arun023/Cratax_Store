import Carousel from "@/Layout/Components/Carousel";
import React from "react";
import { Hero } from "@/assets/index";
import CategoryCard from "@/Layout/Components/CategoryCard";
import { Cards } from "@/helper/config";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";

const images: string = Hero;

const HomePage = () => {
  return (
    <article className="">
      <section className="flex gap-3 text-sm justify-center items-center p-2 bg-green-800 text-white">
        <ChevronLeft /> Up to 70% Sale.{" "}
        <Link className="underline" to={""}>
          Shop at our latest sale
        </Link>{" "}
        <ChevronRight />
      </section>
      <Carousel
        images={images}
        topText="New Collection"
        headingText="Menswear 2020"
        primaryButton="Shop the Menwear"
        secondaryButton="Shop Sale"
      />
      <section className="flex justify-center items-center gap-5 flex-wrap">
        {Cards.map(({ img, text, id, link }) => (
          <CategoryCard img={img} text={text} key={id} link={link} />
        ))}
      </section>
      <section className="flex items-center flex-col gap-10 px-5 md:px-0 ">
        <Text className="text-3xl sm:text-4xl md:text-5xl font-bold">
          New arrivals
        </Text>
        <div className="text-center">
          <Text className="text-gray-500 text-lg mb-2">Check out our latest arrivals for the upcoming season.</Text>
          <Link to="/new-arrivals">See the collection here</Link>
        </div>
      </section>
    </article>
  );
};

export default HomePage;
