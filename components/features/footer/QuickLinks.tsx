import React from "react";
import pageLinkData from "@/data/pageLinkData";

type QuickLinksProps = {
  className: string;
};

const QuickLinks: React.FC<QuickLinksProps> = ({ className }) => {
  return (
    <article className={`dark:text-white`}>
      <ul className={`${className} hover:cursor-pointer`}>
        {pageLinkData.map((link) => (
          <li key={link.id}>
            <a href={`#${link.sectionId}`}>{link.name}</a>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default QuickLinks;
