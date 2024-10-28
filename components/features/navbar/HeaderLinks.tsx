import pageLinkData from "@/public/data/pageLinkData";

import React from "react";

const HeaderLinks: React.FC = () => {
  return (
    // $ The mobile menu links for the portfolio section of the site.
    <div className="dark:text-fontLight text-fontDark">
      <ul className="flex justify-evenly gap-4 items-center h-full">
        {pageLinkData.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.sectionId}`}
              className="text-md uppercase tracking-wider hover:text-buttonBlueColor transition-all duration-100"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderLinks;
