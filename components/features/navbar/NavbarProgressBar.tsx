"use client";

import React from "react";
import useIsScrolled from "@/app/customHooks/useIsScrolled";

const NavbarProgressBar = () => {
  const { isScrolled } = useIsScrolled();
  return (
    <div
      className={
        isScrolled ? "w-full fixed top-[3rem] z-[1000] bg-blue-500" : "hidden"
      }
    ></div>
  );
};

export default NavbarProgressBar;
