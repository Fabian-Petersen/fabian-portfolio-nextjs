// $ This component is the mobile navbar menu button that is displayed on mobile devices ONLY.
// $ The button controls the opening and closing of the navbar menu items with the navlinks.

import pageLinkData from "@/public/data/pageLinkData";
import { useEffect } from "react";
import { initFlowbite } from "flowbite";

const MenuButton = () => {
  // $ Initialise the flowbite library to enable the dropdown menu in the navbar to open and close.
  useEffect(() => {
    initFlowbite();
  }, []);

  // $ Define the interface for the pageLinkData array.
  interface PageLink {
    id: number;
    href: string;
    icon: any;
    name: string;
  }

  return (
    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button
        data-collapse-toggle="navbar-sticky"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text:text-gray-500 dark:text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-sticky"
        aria-expanded="false"
        onClick={() => {
          console.log("Menu button clicked");
        }}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          // xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      {/* // $ This is the menu items that are displayed when the menu button isclicked. */}
      <div
        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 border border-gray-100 rounded-lg bg-gray-50"
        id="navbar-sticky"
      >
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          {pageLinkData.map((link: PageLink) => {
            const { id, href, name } = link;
            return (
              <li key={id}>
                <a
                  href={href}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MenuButton;
