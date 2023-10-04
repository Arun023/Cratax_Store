import Carousel from "@/Layout/Components/Carousel";
import React from "react";
import {
  Hero,
  Banner1,
  Banner2,
  Banner3,
  Banner4,
  Background,
  ProductOne,
  ProductTwo,
  Apk,
  Appstore,
  Googlestore,
} from "@/assets/index";
import CategoryCard from "@/Layout/Components/CategoryCard";
import {
  Cards,
  FeatureCardList,
  ProductCategoryList,
  Products,
} from "@/helper/config";
import { BusFront, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Image, Input, Text } from "@chakra-ui/react";
import CarouselProduct from "@/Layout/Components/CarouselProduct";
import Button from "@/Layout/Components/Button";
import BannerText from "@/Layout/Components/BannerText";
import ProductCategory from "@/Layout/Components/ProductCategory";
import FeatureCard from "@/Layout/Components/FeatureCard";
const images: string = Hero;

const HomePage = () => {
  return (
    <article className="flex flex-col">
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
        secondaryButton="Shop the Menwear"
        primaryButton="Shop Sale"
      />
      <section className="flex justify-center items-center gap-5 flex-wrap">
        {Cards.map(({ img, text, id, link }) => (
          <CategoryCard img={img} text={text} key={id} link={link} />
        ))}
      </section>
      <section className="container flex items-center flex-col gap-10 px-5 md:px-0 ">
        <Text className="text-3xl sm:text-4xl md:text-5xl font-bold">
          New arrivals
        </Text>
        <div className="text-center">
          <Text className="text-gray-500 text-lg mb-2">
            Check out our latest arrivals for the upcoming season.
          </Text>
          <Link className="text-[#17696A] underline " to="/new-arrivals">
            See the collection here
          </Link>
        </div>
        <CarouselProduct card={true} Items={Products} />
      </section>
      <section className="mt-10 mb-28 mx-10 flex flex-col gap-3 ">
        <section className="flex gap-3 flex-wrap lg:flex-nowrap">
          <div className="relative">
            <Image src={Banner1} className="w-fit min-h-max object-contain" />
            <BannerText
              heading="SUMMER COLLECTIONS"
              subHeading="Sale Up to 70%"
              btnText="Explore new prices"
              btnClassApplied="lg:mt-8 mt-2 my-1 inline-block w-48"
            />
          </div>
          <div className="relative">
            <Image src={Banner2} className="w-fit min-h-max object-contain" />
            <BannerText
              heading="DEAL OF THE WEEK"
              subHeading="Stay Warm With Our New Sweaters"
              btnText="Shop now"
              subHeadingClass="w-7/12"
              btnClassApplied="lg:mt-8 mt-2 my-1 inline-block w-48"
            />
          </div>
        </section>
        <section className="flex items-end bg-gray-200 gap-3 flex-wrap lg:flex-nowrap relative">
          <div className="relative">
            <Image src={Banner3} />
            <BannerText
              heading="NEW COLLECTIONS"
              subHeading="Shoes & Bags autumn / winter 2023"
              btnText="See offers &#8594;"
              subHeadingClass="w-7/12"
              btnClassApplied="lg:mt-8 mt-2 my-1 inline-block w-48"
            />
          </div>
          <div className="relative">
            <Image src={Background} />
            <Image
              src={Banner4}
              className="absolute bottom-0 right-0 w-80 object-contain"
            />
            <div className="absolute top-0 text-gray-900 flex flex-col gap-5 w-96 p-5">
              <Text className="lg:text-lg md:text-xl text-md font-bold">
                FOR ALL NEW EMAIL SUBSCRIBERS
              </Text>
              <Text className={`lg:text-3xl md:text-xl text-sm font-bold`}>
                Get 5% Off & Free Delivery
              </Text>
              <div className="flex justify-center items-center gap-3">
                <Input
                  type="email"
                  className="border-gray-800 border-2"
                  placeholder="Enter Email"
                />
                <Button primary={"Subscribe"} />
              </div>
              <Text className="">
                *Sign up to be First to hear about exclusive deals ,special
                offers and upcoming collections
              </Text>
            </div>
          </div>
        </section>
      </section>
      <section className="mt-20 flex flex-col container">
        <div className="text-4xl font-bold text-center">Popular Categories</div>
        <div className="flex gap-5 justify-center">
          {ProductCategoryList.map(({ id, prodImage, prodTitle }) => (
            <ProductCategory
              key={id}
              prodImage={prodImage}
              prodTitle={prodTitle}
            />
          ))}
        </div>
      </section>
      <section className="bg-gray-300 px-10 py-20 my-16">
        <div className="container flex flex-col items-center gap-10">
          <Text className="text-3xl font-bold">Trending Now</Text>
          <CarouselProduct card={true} Items={Products} />
          <Button secondary="Explore top sales" />
        </div>
      </section>
      <section className="px-10 py-20 my-16">
        <div className="container flex flex-col items-center gap-10">
          <Text className="text-3xl font-bold">Sale up to 70%</Text>
          <CarouselProduct card={true} Items={Products} />
          <Button secondary="See all sale product" />
        </div>
      </section>
      <section className="px-10 banner_background mb-10 relative flex gap-10 text-white justify-around items-center">
        <Image src={Apk} className="w-3/12 hidden md:block" />
        <div className="flex flex-col gap-10">
          <Text fontSize={{ base: "lg", md: "3xl" }}>
            Enjoy mobile shopping with our Cratax Store App!
          </Text>
          <div className="flex gap-6 flex-wrap">
            <Image src={Appstore} />
            <Image src={Googlestore} />
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center gap-10">
        {FeatureCardList.map(({ description, text, icon }) => (
          <FeatureCard
            description={description}
            text={text}
            icon={icon}
          />
        ))}
      </section>
    </article>
  );
};

export default HomePage;
