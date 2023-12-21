"use client";

// import BurgerMenuButton from "../features/BurgerMenuButton";
import ThemeToggleButton from "@/components/features/navbar/ThemeToggleButton";
import { useThemeContext } from "@/app/ContextAPI_Hooks/usethemeContext";
import Button from "@/components/features/Button";
import Logo from "./Logo";

const Navbar = () => {
  const { theme } = useThemeContext();
  return (
    <div
      className={`${
        theme === "dark" ? "bg-bgDark" : "bg-bgLight"
      } flex items-center navbarHeight h-[var(--navbarHeight)] top-0 left-0 w-[100%] border-opacity-50 dark:border-opacity-5`}
    >
      <Logo />
      <div className="flex ml-auto gap-[2rem] mr-[1.5rem] items-center">
        <Button
          className="rounded-full text-[0.8rem] px-4 py-2 tracking-[1.2px] text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          label="Download CV"
          onClick={() => {}}
        />
        <ThemeToggleButton />
      </div>
    </div>
  );
};
export default Navbar;
