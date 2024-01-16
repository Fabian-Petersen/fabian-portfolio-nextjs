"use client";

// import BurgerMenuButton from "../features/BurgerMenuButton";
import ThemeToggleButton from "@/components/features/navbar/ThemeToggleMenu";
import Button from "@/components/features/Button";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="hidden mb-[5rem] bg-transparent fixed top-0 left-0 w-full z-[100] py-2 md:flex md:items-center border-opacity-50 dark:border-opacity-5">
      <Logo />
      <div className="flex ml-auto gap-[2rem] mr-[0.5rem] md:mr-[3.5rem] items-center">
        <Button
          className="rounded-full text-[0.8rem] p-3 tracking-[1.2px] text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          buttonLabel="Download CV"
          onClick={() => {}}
        />
        {/* <ThemeToggleButton /> */}
      </div>
    </div>
  );
};
export default Navbar;
