import React from "react";
import pageLinkData from "@/data/pageLinkData";
import { useMobileNavContext } from "@/app/ContextAPI_Hooks/useMobileNavbarContext";

type PageLink = {
  id: number;
  href: string;
  icon: any;
  name: string;
};

const MobileNavMenu = () => {
  const { navOpen } = useMobileNavContext()!;
  return (
    <div
      className={`grid place-content-center absolute z-[100] mt-[var(--navbarHeight)] top-0 right-0 overflow-x-hidden transition-transform duration-1000 h-[var(--sectionHeight)] w-full bg-gray-200 ${
        navOpen ? "transform translate-x-0" : "transform translate-x-full"
      }`}
    >
      <ul className="flex flex-col flex-1 gap-12 p-12 text-[1.5rem] w-[15rem] justify-evenly">
        {pageLinkData.map((link: PageLink) => {
          const { id, href, name } = link;
          return (
            <li key={id} className="w-full">
              <a
                href={href}
                className="relative capitalize block py-2 text-gray-900 overflow-hidden group left-[50%] -translate-x-[25%]"
              >
                {name}
                <span className="absolute p-2 z-[-1] top-0 left-0 w-full h-full border-b-4 border-green-500 transform -translate-x-full transition-transform duration-1000 group-hover:translate-x-0"></span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileNavMenu;
