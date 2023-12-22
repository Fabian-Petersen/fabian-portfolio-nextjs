"use client";

import React, { useState } from "react";
import { useEffect } from "react";
import { initFlowbite } from "flowbite";
import Logo from "@/components/features/navbar/Logo";
import MenuCloseButton from "../MenuCloseButton";
import MenuOpenButton from "../MenuOpenButton";
import MobileNavMenu from "./MobileNavMenu";

import { useMobileNavContext } from "@/app/ContextAPI_Hooks/useMobileNavbarContext";
import ThemeToggleButton from "../navbar/ThemeToggleButton";

// $ The mobile navbar context provider passes the navOpen state to the components that need it to handle the closing and opening of the mobile navbar

const MobileMenuFullWidth = () => {
  const { navOpen } = useMobileNavContext()!;

  // $ Initialise the flowbite library to enable the dropdown menu in the navbar to open and close.
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <nav className="md:hidden bg-transparent w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Logo />
        <div className="flex items-center">
          <ThemeToggleButton />
          {navOpen ? <MenuCloseButton /> : <MenuOpenButton />}
        </div>
        <MobileNavMenu />
      </div>
    </nav>
  );
};

export default MobileMenuFullWidth;
