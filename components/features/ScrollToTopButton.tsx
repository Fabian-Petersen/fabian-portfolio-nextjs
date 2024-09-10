"use client";

import { IoIosArrowDropupCircle } from "react-icons/io";
import { useEffect, useState } from "react";

type Props = {};

const ScrollToTopButton = (props: Props) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      className={`${
        isScrolled && "opacity-100"
      } fixed md:right-[5%] xl:right-[5%] top-[90%] -translate-y-[25%] z-[1000] opacity-0 md:block transition-opacity duration-200 hover:cursor-pointer"`}
    >
      <button
        className="text-blue-500 flex items-center justify-center rounded-full border-2 border-blue-500 bg-black dark:bg-white hover:scale-110 transform transition-transform duration-200"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <IoIosArrowDropupCircle className="text-5xl dark:text-black w-10 h-10" />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
