"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

type Theme = "light" | "dark";

// $ Step 0: Define the types and specify the theme to only take the values 'light' or 'dark' via the Theme type
type ThemeContext = {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
};

// $ Step 1: Create the context
// % The ThemeContext type takes in the ThemeContext type or null 
const ThemeContext = createContext<ThemeContext | null>(null);

type ThemeContextProviderProps = {
  children: ReactNode;
};

// $ Step 2: Create the provider for the context
export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  // Typescript will throw an error if the theme is not set to light or dark, use <'light'|'dark'>
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// $ Step 3: Export the custom hook to be used in other components
export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  // $ Throw an error if the hook is used outside of the ThemeContextProvider or does not exist
  if (!context) {
    throw new Error(
      "useThemeContext must be used within a ThemeContextProvider"
    );
  }
  return context;
};
