"use client";

import Icons from "@/public/icons/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "flowbite-react";
import { useThemeContext } from "@/app/ContextAPI_Hooks/usethemeContext";

const ThemeSelector = () => {
  const { theme, setTheme } = useThemeContext();
  console.log(theme);
  // const { theme } = useGlobalContext();
  // const setTheme = () => {
  //   console.log("setTheme");
  // };
  // console.log("theme", theme);
  const { faMoon, faSun } = Icons;
  // $ =========================  Set the theme for the first time when the page loads and add the theme to the html element ========================= //
  // useEffect(() => {
  //   // Load the theme from localStorage
  //   const savedTheme = localStorage.getItem("theme");
  //   if (savedTheme) {
  //     setTheme(savedTheme); // Set the theme from localStorage
  //   } else {
  //     setTheme(""); // Set a default theme if it's not found in localStorage
  //   }
  // }, [setTheme]);
  // $ ========================= Update the HTML element classList based on the selected theme ========================= //
  // useEffect(() => {
  //   if (theme === "dark") {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  //   // Save the theme in localStorage
  //   localStorage.setItem("theme", theme);
  // }, [theme]);

  const handleClick = () => {
    console.log("handleClick");
    // setTheme(theme === "dark" ? "" : "dark");
    // setToggleTheme(!toggleTheme);
  };
  return (
    <div className="w-[1rem] h-[1rem] md:w-[1.3rem] md:h-[1.3rem] text-[1.2rem] flex items-center justify-center rounded-full outline-2 outline-white hover:cursor-pointer">
      {theme === "dark" ? (
        <Tooltip content="Dark Theme" placement="left">
          <FontAwesomeIcon
            className="dark:text-white text-fontLightTheme"
            icon={faMoon}
            onClick={handleClick}
          />
        </Tooltip>
      ) : (
        <Tooltip content="Light Theme" placement="left">
          <FontAwesomeIcon
            icon={faSun}
            className="dark:text-white text-fontLightTheme"
            onClick={handleClick}
          />
        </Tooltip>
      )}
    </div>
  );
};

export default ThemeSelector;
