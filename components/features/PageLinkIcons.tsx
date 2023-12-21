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
    <ul className="flex flex-col justify-center items-center xxl:items-start h-full sm:flex-col md:visible gap-[2rem] z-50">
      {links.map((link: PageLink) => {
        const { id, href, icon, tooltip_content } = link;
        return (
          <Tooltip
            className="capitalize tracking-wide"
            key={id}
            content={tooltip_content}
            placement="left"
          >
            <li
              className="pageLinkIcons dark:text-white text-gray-600"
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
