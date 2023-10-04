import { ICategoryCard } from "@/interfaces/homePage";
import React from "react";
import { NavLink } from "react-router-dom";
const CategoryCard = ({ img, text, link }: ICategoryCard) => {
  console.log(img, text);
  return (
    <NavLink
      to={link}
      className="-translate-y-10 flex justify-center flex-col items-center">
      <img src={img} className="w-72 object-contain" />
      <p className="font-medium">{text}</p>
    </NavLink>
  );
};

export default CategoryCard;
