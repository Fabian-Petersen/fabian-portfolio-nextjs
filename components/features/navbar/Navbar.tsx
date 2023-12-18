// import BurgerMenuButton from "../features/BurgerMenuButton";
import ThemeSelector from "@/components/features/navbar/ThemeToggleButton";
import Logo from "./Logo";

const Navbar = () => {
  const theme = "dark";
  return (
    <div
      className={`${
        theme === "dark" ? "bg-bgDark" : "bg-bgLight"
      } flex items-center justify-between navbarHeight h-[var(--navbarHeight)] top-0 left-0 w-[100%]border-opacity-50 dark:border-opacity-5`}
    >
      {/* <Logo /> */}
      <p className="text-center w-full text-xl">Navbar</p>
      <div className="flex gap-[0.2rem] md:gap-[0.3rem] mr-[1.5rem] md:mr-[3rem] items-center">
        <ThemeSelector />
        {/* <BurgerMenuButton /> */}
      </div>
    </div>
  );
};
export default Navbar;
