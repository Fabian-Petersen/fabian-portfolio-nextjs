"use client";

import { useEffect, useState } from "react";
import ThemeSelector from "./ThemeSelector";
import { Tooltip } from "flowbite-react";

const ThemeToggleButton = () => {
  const [tooltipContent, setTooltipContent] = useState("Dark Mode");
  useEffect(() => {
    const element = document.documentElement;
    if (element) {
      // Check if the 'dark' class is present
      const isDarkMode = element.classList.contains("dark");
      // Change tooltip content based on the class
      if (isDarkMode) {
        setTooltipContent("dark Theme");
      } else {
        setTooltipContent("ligth Theme");
      }
    }
  }, []);
  return (
    <div className="ml-auto">
      <Tooltip {...{ content: tooltipContent, placement: "left" }}>
        <ThemeSelector />
      </Tooltip>
    </div>
  );
};

export default ThemeToggleButton;
