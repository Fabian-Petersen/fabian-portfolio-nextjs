import { useThemeContext } from "@/app/ContextAPI_Hooks/usethemeContext";
import { useEffect } from "react";
import { Theme } from "@/app/ContextAPI_Hooks/usethemeContext";

const useSetDarkTheme = () => {
  const { isDarkTheme, setIsDarkTheme, theme, setTheme } = useThemeContext();

  const toggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    setTheme(isDarkTheme ? "dark" : "");
    document.documentElement.classList.toggle("dark", isDarkTheme);
    localStorage.setItem("theme", theme);
  };

  // $ save the theme in local storage and set it to the theme state
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      document.documentElement.classList.add("dark");
      setTheme(localTheme as Theme);
    }
  }, []);

  return { theme, setTheme, toggleDarkTheme, isDarkTheme };
};

export default useSetDarkTheme;
