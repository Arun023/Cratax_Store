import { IFooterProps } from "@/interfaces/homePage";
import { Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const FooterLinks = ({ text, items }: IFooterProps) => {
  return (
    <section className="flex flex-col gap-5">
      <Text className="text-xl font-medium">{text}</Text>
      <ul className="flex flex-col gap-3">
        {items.map(({ id, label, link }) => (
          <li key={id}>
            <Link className="text-gray-400 font-semibold" to={link}>{label}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FooterLinks;
