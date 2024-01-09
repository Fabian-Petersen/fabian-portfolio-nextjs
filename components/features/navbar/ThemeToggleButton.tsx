// $ Tis component manages the theme of the website, dark theme or light theme.
// $ It also manages the theme of the background SVG to display the different colors.
// $ The theme is stored in localStorage so that it persists when the user refreshes the page.
// $ The theme is also stored in the useThemeContext API so that it can be accessed by other components.
// $ The theme is set to light by default.

"use client";
import { useEffect } from "react";
import Icons from "@/public/icons/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "flowbite-react";
import { useThemeContext } from "@/app/ContextAPI_Hooks/usethemeContext";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useThemeContext();
  const { faMoon, faSun } = Icons;
  // $ =========================  Set the theme for the first time when the page loads and add the theme to the html element ========================= //
  // useEffect(() => {
  //   // Load the theme from localStorage
  //   const savedTheme = localStorage.getItem("theme");
  //   if (savedTheme) {
  //     setTheme(savedTheme); // Set the theme from localStorage
  //   } else {
  //     setTheme(null); // Set a default theme if it's not found in localStorage
  //   }
  // }, [setTheme]);
  // $ ========================= Update the HTML element classList based on the selected theme ========================= //
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Save the theme in localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="mr-[1.6rem] w-[1rem] h-[1rem] md:w-[1.3rem] md:h-[1.3rem] text-[1.2rem] flex items-center justify-center rounded-full outline-2 outline-white hover:cursor-pointer">
      {theme === "dark" ? (
        <Tooltip
          className="text-white capitalize tracking-wider"
          content="Light Theme"
          placement="bottom"
        >
          <FontAwesomeIcon
            icon={faSun}
            className="dark:text-white text-fontLightTheme"
            onClick={handleClick}
          />
        </Tooltip>
      ) : (
        <Tooltip
          className="capitalize tracking-wider"
          content="Dark Theme"
          placement="bottom"
        >
          <FontAwesomeIcon
            className="dark:text-white text-gray-600"
            icon={faMoon}
            onClick={handleClick}
          />
        </Tooltip>
      )}
    </div>
  );
};

export default ThemeToggleButton;
