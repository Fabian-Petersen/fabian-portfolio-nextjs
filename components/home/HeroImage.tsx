import React from "react";
import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="flex justify-center h-full">
      <Image
        src=""
        alt="hero"
        className="w-[25rem] h-[25rem] rounded-full object-cover border-[5px] border-green-500 my-auto"
      />
    </div>
  );
};

export default HeroImage;
