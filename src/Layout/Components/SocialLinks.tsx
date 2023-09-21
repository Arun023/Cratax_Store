import { FacebookIcon, InstagramIcon, TwitchIcon, TwitterIcon, YoutubeIcon } from "lucide-react";
import React from "react";

const SocialLinks = () => {
  return (
    <div className="flex gap-6 flex-wrap md:flex-nowrap">
      <div className="bg-gray-700 px-3 py-2 rounded-lg hover:bg-green-800 duration-200">
        <FacebookIcon size={25} className="hover:text-white hover:scale-125 duration-200" />
      </div>
      <div className="bg-gray-700 px-3 py-2 rounded-lg hover:bg-green-800 duration-200">
        <InstagramIcon size={25} className="hover:text-white hover:scale-125 duration-200" />
      </div>
      <div className="bg-gray-700 px-3 py-2 rounded-lg hover:bg-green-800 duration-200">
        <TwitterIcon size={25} className="hover:text-white hover:scale-125 duration-200" />
      </div>
      <div className="bg-gray-700 px-3 py-2 rounded-lg hover:bg-green-800 duration-200">
        <YoutubeIcon size={25} className="hover:text-white hover:scale-125 duration-200" />
      </div>
      <div className="bg-gray-700 px-3 py-2 rounded-lg hover:bg-green-800 duration-200">
        <TwitchIcon size={25} className="hover:text-white hover:scale-125 duration-200" />
      </div>
    </div>
  );
};

export default SocialLinks;
