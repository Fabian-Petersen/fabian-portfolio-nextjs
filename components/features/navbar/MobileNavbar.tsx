"use client";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeToggleMenu from "./ThemeToggleMenu";
import useIsScrolled from "@/app/customHooks/useIsScrolled";

// import custom hook to open and close menu from the left
import useMobileMenu from "@/app/customHooks/useMobileMenu";

const MobileNavbar = () => {
  const { isScrolled } = useIsScrolled();
  const { isOpen, toggleMenu } = useMobileMenu();
  return (
    <nav
      className={`${isOpen ? "translate-y-100" : "translate-y-0"} uppercase transition-all duration-100 flex align-middle h-auto w-full fixed z-[100] dark:text-white text-fontDark ${isScrolled ? "bg-white dark:bg-gray-900 shadow-md w-full z-[99]" : undefined}`}
    >
      <div className="flex align-middle gap-3 justify-between w-full h-full p-4">
        <button
          className="w-[2rem] h-[2rem] hover:cursor-pointer z-[2000]"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={faBarsStaggered} />
        </button>
        <ThemeToggleMenu />
      </div>
    </nav>
  );
};
export default MobileNavbar;
