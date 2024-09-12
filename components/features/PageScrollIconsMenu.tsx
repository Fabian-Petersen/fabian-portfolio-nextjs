// import { motion } from "framer-motion";
// import iconPageLinksVariants from "@/app/animations/iconPageLinksAnimate";

"use client";
import links from "@/public/data/pageLinkData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "flowbite-react";
import pageLinkData from "@/data/pageLinkData";
import useInViewSections from "@/app/customHooks/useInViewSections";

interface PageLink {
  id: number;
  sectionId: string;
  icon: any; // Assuming FontAwesome icon type
  name: string;
  tooltip_content: string;
}

const PageScrollIconsMenu: React.FC = () => {
  // $ get the list of section ids from the links data
  const sectionIdArray = pageLinkData.map((link) => link.sectionId);

  const currentSectionId: string = useInViewSections(sectionIdArray);

  return (
    <div className="fixed md:right-[5%] xl:right-[5%] top-[50%] -translate-y-[25%] z-[1000] hidden md:block">
      <ul className="flex flex-col sm:flex-col gap-[2rem]">
        {links.map((link: PageLink) => {
          const { id, sectionId, icon, tooltip_content } = link;
          return (
            <Tooltip
              className="capitalize tracking-wide bg-slate-900"
              key={id}
              content={tooltip_content}
              placement="left"
            >
              <li
                className={`pageLinkIcons ${
                  currentSectionId === sectionId
                    ? "border-2 border-blue-500 hover:cursor-pointer bg-black dark:bg-white dark:text-blue-500 text-blue-500"
                    : "border-2 border-gray-400 bg-slate-300 hover:cursor-pointer text-gray-400"
                } `}
                data-tooltip-target="tooltip-animation"
              >
                <button
                  onClick={() => {
                    const scrollToElement = document.getElementById(sectionId);
                    if (scrollToElement) {
                      scrollToElement.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <FontAwesomeIcon className="iconSize" icon={icon} />
                </button>
              </li>
            </Tooltip>
          );
        })}
      </ul>
    </div>
  );
};
export default PageScrollIconsMenu;
