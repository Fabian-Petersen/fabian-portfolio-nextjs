// import { motion } from "framer-motion";
// import iconPageLinksVariants from "@/app/animations/iconPageLinksAnimate";

"use client";
import links from "@/public/data/pageLinkData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Tooltip } from "flowbite-react";
import { usePathname } from "next/navigation";
import path from "path";
// import useIsActivePathHook from "./useIsActivePathHook";

interface PageLink {
  id: number;
  href: string;
  icon: any; // Assuming FontAwesome icon type
  name: string;
  tooltip_content: string;
}

const PageLinkIconsMenu: React.FC = () => {
  const pathname = usePathname();
  return (
    <div className="fixed md:right-[5%] xl:right-[5%] top-[50%] -translate-y-[25%] z-[1000] hidden md:block">
      <ul className="flex flex-col sm:flex-col gap-[2rem]">
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
                className={`pageLinkIcons ${
                  pathname === href
                    ? "border-2 border-blue-500 hover:cursor-pointer bg-black dark:bg-white dark:text-blue-500 text-blue-500"
                    : "border-2 border-gray-400 bg-slate-300 hover:cursor-pointer text-gray-400"
                } `}
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
    </div>
  );
};
export default PageLinkIconsMenu;
