// import { motion } from "framer-motion";
// import iconPageLinksVariants from "@/app/animations/iconPageLinksAnimate";
import links from "@/public/data/pageLinkData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Tooltip } from "flowbite-react";

interface PageLink {
  id: number;
  href: string;
  icon: any; // Assuming FontAwesome icon type
  name: string;
  tooltip_content: string;
}

const PageLinkIcons: React.FC = () => {
  return (
    <ul className="sm:fixed sm:flex sm:flex-col hidden md:visible gap-[2rem] z-50 top-[50%] right-[3%] transform -translate-y-[50%]">
      {links.map((link: PageLink) => {
        const { id, href, icon, tooltip_content } = link;
        return (
          <Tooltip
            className="uppercase"
            key={id}
            content={tooltip_content}
            placement="left"
          >
            <li
              className="pageLinkIcons"
              data-tooltip-target="tooltip-animation"
            >
              <Link href={href}>
                <FontAwesomeIcon className="iconSize" icon={icon} />
              </Link>
            </li>
          </Tooltip>
        );
      })}
    </ul>
  );
};
export default PageLinkIcons;
