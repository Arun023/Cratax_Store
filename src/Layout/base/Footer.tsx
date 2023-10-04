import { HelpItems, ShopItems } from "@/helper/config";
import { Image, Text } from "@chakra-ui/react";
import React from "react";
import FooterLinks from "@/Layout/Components/FooterLinks";
import SocialLinks from "@/Layout/Components/SocialLinks"
import { Appstore,Googlestore } from "@/assets/index";

const Footer = () => {
  return (
    <footer className="bg-slate-900 mt-10 flex justify-center items-center lg:py-20 px-10 py-10 ">
      <section className="flex gap-20 text-white md:flex-row flex-wrap px-10 md:px-0">
        <FooterLinks items={HelpItems} text="HELP" />
        <FooterLinks items={ShopItems} text="SHOP" />
        <section className="flex flex-col gap-5">
          <Text className="text-xl font-medium">GET IN TOUCH</Text>
          <section className="space-y-2">
            <div className="flex gap-2">
              <Text className="text-md">Call:</Text>
              <Text className="text-md text-gray-400 font-medium">
                (405) 555-0128
              </Text>
            </div>
            <div className="flex gap-2">
              <Text className="text-md">Email:</Text>
              <Text className="text-md text-gray-400 font-medium">
                arunc1044@gmail.com
              </Text>
            </div>
          </section>
          <SocialLinks />
        </section>
        <section className="space-y-5">
          <Text className="text-xl font-medium">DOWNLOAD OUR APP</Text>
          <div className="flex gap-6 flex-wrap">
            <Image src={Appstore} />
            <Image src={Googlestore} />
          </div>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
