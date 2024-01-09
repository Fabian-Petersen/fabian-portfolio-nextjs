// $ This component manages the theme of the website, dark theme or light theme.
// $ To use this the useSetTheme hook must be imported and used in the component to manage the theme state.
// $ The icons for the theme toggle are imported from the component ThemeToggleIcon.

"use client";
import Icons from "@/public/icons/icons";
import useSetTheme from "@/app/customHooks/useSetDarkTheme";
import ThemeToggleIcon from "./ThemeToggleIcon";

const ThemeToggleMenu = () => {
  const { toggleDarkTheme, isDarkTheme } = useSetTheme();
  const { faMoon, faSun } = Icons;

  const handleClick = () => {
    toggleDarkTheme();
  };

  return (
    <div
      className="mr-[1.6rem] w-[1rem] h-[1rem] md:w-[1.3rem] md:h-[1.3rem] text-[1.2rem]
        flex items-center justify-center rounded-full outline-2 outline-white hover:cursor-pointer"
    >
      {isDarkTheme ? (
        <ThemeToggleIcon
          handleClick={handleClick}
          icon={faSun}
          placement="bottom"
          content="Light Theme"
        />
      ) : (
        <ThemeToggleIcon
          handleClick={handleClick}
          icon={faMoon}
          content="Dark Theme"
          placement="bottom"
        />
      )}
    </div>
  );
};

export default ThemeToggleMenu;
