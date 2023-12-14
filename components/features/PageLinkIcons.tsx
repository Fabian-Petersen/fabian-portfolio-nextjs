import links from "@/public/data/pageLinkData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { motion } from "framer-motion";
// import iconPageLinksVariants from "@/app/animations/iconPageLinksAnimate";
import { Tooltip } from "flowbite-react";

const PageLinkIcons = () => {
  return (
    <ul className="sm:fixed sm:flex sm:flex-col hidden md:visible gap-[2rem] z-50 top-[50%] right-[3%] transform -translate-y-[50%]">
      {links.map((link) => {
        const { id, href, icon, tooltip } = link;
        return (
          <Tooltip key={id} content={tooltip} placement="left">
            <li
              className="pageLinkIcons"
              data-tooltip-target="tooltip-animation"
            >
              <link href={href}>
                <FontAwesomeIcon className="iconSize" icon={icon} />
              </link>
            </li>
          </Tooltip>
        );
      })}
    </ul>
  );
};
export default PageLinkIcons;
