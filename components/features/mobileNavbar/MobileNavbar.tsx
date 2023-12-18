"use client";
// $ This component is the mobile navbar that is displayed on mobile devices ONLY.
// $ It is a modified version of the Navbar component.
// $ The component renders the Logo component, a MenuButton to open the navbar, and the nav links when open.

import * as React from "react";
import Logo from "../navbar/Logo";
import MenuToggleButton from "./MobileMenuFullWidth";

import { useThemeContext } from "@/app/ContextAPI_Hooks/usethemeContext";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuButton from "./MenuButton";

const MobileNavbar = () => {
  const { theme } = useThemeContext();
  return (
    <nav
      className={`
        ${theme === "dark" ? "bg-bgDark" : "bg-bgLight"}
      } h-[var(--navbarHeight)] sticky w-full z-20 top-0 start-0 border border-red-500 dark:border-gray-600`}
    >
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <Logo />
        <MenuToggleButton />
        {/* <MenuButton /> */}
      </div>
    </nav>
  );
};

export default MobileNavbar;
