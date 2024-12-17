"use client";

import ThemeToggleButton from "@/components/features/navbar/ThemeToggleMenu";
import Logo from "./Logo";
import useIsScrolled from "@/app/customHooks/useIsScrolled";
import LoginButton from "./LoginButton";
import HeaderLinks from "./HeaderLinks";

const Navbar = () => {
  const { isScrolled } = useIsScrolled();
  return (
    <nav
      className={`${
        isScrolled
          ? "fixed top-0 h-[65px] left-0 w-full z-[100] py-4 md:flex md:items-center border-opacity-50 dark:border-opacity-5 bg-white dark:bg-gray-900 shadow-md bg-opacity-100 transition-all duration-300 ease-in"
          : "fixed bg-opacity-0 top-0 left-0 w-full z-[2000] py-2 md:flex md:items-center transition-all"
      }`}
    >
      <div className="flex justify-between gap-[2rem] mr-[0.5rem] md:mr-[3.5rem] items-center w-full">
        <Logo isScrolled={isScrolled} variant="navbar" />
        <HeaderLinks />
        <div className="flex gap-4 items-center justify-center h-full">
          <LoginButton />
          <ThemeToggleButton />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
