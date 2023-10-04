import { ButtonProps } from "@/interfaces/homePage";
import React from "react";

const Button = ({ secondary, primary,classAppiled }: ButtonProps) => {
  return (
    <>
      {primary && (
        <button
          className={`bg-green-700 px-10 rounded-lg lg:py-3 py-2 text-white font-medium ${
            classAppiled ? classAppiled : ""
          }`}>
          {primary}
        </button>
      )}
      {secondary && (
        <button
          className={`border-[2px] border-green-700 px-6 lg:py-3 py-2 rounded-lg text-green-700 font-medium ${
            classAppiled ? classAppiled : ""
          }`}>
          {secondary}
        </button>
      )}
    </>
  );
};

export default Button;
