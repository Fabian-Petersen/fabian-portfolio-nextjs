import React from "react";
import { useMobileNavContext } from "@/app/ContextAPI_Hooks/useMobileNavbarContext";
const MenuCloseButton = () => {
  const { setNavOpen } = useMobileNavContext()!;
  return (
    <button
      // data-collapse-toggle="navbar-solid-bg"
      type="button"
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      // aria-controls="navbar-solid-bg"
      // aria-expanded="false"
      onClick={() => {
        setNavOpen(true);
      }}
    >
      <svg
        // xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width="100px"
        height="100px"
      >
        <path d="M 5 9 L 5 11 L 45 11 L 45 9 L 5 9 z M 5 24 L 5 26 L 45 26 L 45 24 L 5 24 z M 5 39 L 5 41 L 45 41 L 45 39 L 5 39 z" />
      </svg>
    </button>
  );
};

export default MenuCloseButton;
