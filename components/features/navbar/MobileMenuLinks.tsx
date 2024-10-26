import pageLinkData from "@/public/data/pageLinkData";

import React from "react";

const MobileMenuLinks = () => {
  return (
    // $ The mobile menu links for the portfolio section of the site.
    <div className="fixed bg-bgDark text-white hover:text-primaryColor top-0 w-full h-[15rem] p-2 z-[1000]">
      <ul className="flex flex-col gap-4 items-center justify-center h-full">
        {pageLinkData.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.sectionId}`}
              className="text-xl font-semibold uppercase tracking-wider text-fontLight"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenuLinks;
