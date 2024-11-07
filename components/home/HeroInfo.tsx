import React from "react";
import CTAButtonsContainer from "./cta_buttons/CTAButtonsContainer";

const HeroInfo = () => {
  return (
    <div className="flex flex-col gap-2 justify-center h-full">
      {/* <span className="absolute inset-0 w-full h-full clip-path-home z-[-100] dark:bg-gray-900"></span> */}
      <span
        className="text-primaryColor w-20 h-4 border-b-4 border-primaryColor"
        // variants={animateLine}
      ></span>
      <h3 className="text-[1rem] md:text-[1.2rem] lg:text-[1.25rem] tracking-wide">
        Hi, my name is
      </h3>
      <h1 className="tracking-[0.095em] text-[1.8rem] md:text-[2.5rem] lg:text-[3rem] font-bold mb-6">
        <span className="text-primaryColor">Fabian </span>Petersen
      </h1>
      <p className="text-[1rem] tracking-wider md:text-[1.2rem] lg:text-[1.25rem] leading-2 normal-case mb-8">
        Welcome to my official portfolio website showcasing my work as a
        <span className="text-primaryColor"> Front End Developer.</span>
      </p>
      <CTAButtonsContainer />
    </div>
  );
};

export default HeroInfo;
