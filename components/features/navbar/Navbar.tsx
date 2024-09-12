"use client";

// import BurgerMenuButton from "../features/BurgerMenuButton";
import ThemeToggleButton from "@/components/features/navbar/ThemeToggleMenu";
import { useState, useEffect } from "react";
import Logo from "./Logo";

const Navbar = () => {
  // Change the Navbar bg to white when scrolled
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  return (
    <div
      className={`${
        isScrolled
          ? "fixed top-0 left-0 w-full z-[100] py-2 md:flex md:items-center border-opacity-50 dark:border-opacity-5 bg-white dark:bg-gray-900 shadow-md bg-opacity-100 transition-all duration-300 ease-in"
          : "fixed bg-opacity-0 top-0 left-0 w-full z-[100] py-2 md:flex md:items-center hidden transition-all"
      }`}
    >
      <Logo />
      <div className="flex ml-auto gap-[2rem] mr-[0.5rem] md:mr-[3.5rem] items-center">
        {/* <ThemeToggleButton /> */}
      </div>
    </div>
  );
};
export default Navbar;
