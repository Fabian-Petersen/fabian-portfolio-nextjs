// $ This component renders the social links icons on the page for desktop view
// $ The data for each link is imported from the public data folder as socialLinks.
// $ The data is mapped and rendered as a list of icons.

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "flowbite-react";
import socialLinks from "@/public/data/socialsLinkData";
import Link from "next/link";
import Image from "next/image";

// import iconSocialLinksVariants from "../../animations/iconSocialLinksAnimate";
// import { motion } from "framer-motion";

const SocialsLinkIcons = () => {
  // const [parentContainer, childContainer] = iconSocialLinksVariants;
  return (
    <ul
      // variants={parentContainer}
      // initial="initialState"
      // animate="animateState"
      className="sm:fixed sm:flex sm:flex-col hidden md:visible gap-[2rem] z-50 top-[50%] left-[3%] transform -translate-y-[50%]"
    >
      {socialLinks.map((link) => {
        const { id, iconImage, href, tooltip, colorClass } = link;

        return (
          <Tooltip
            key={id}
            content={tooltip}
            placement="right"
            className={`capitalize ${colorClass}`}
          >
            <Link href={href} className="dark:text-white">
              <li
              // variants={childContainer}
              // 'Old Styles similart to the pagelinks ' className={`pageLinkIcons ${iconColor}`}
              // className={`bg-${iconColor} socialIconStyles`}
              >
                <Image
                  className={`w-[1.8rem] h-[1.8rem] md:w-[2.1rem] md:h-[2.1rem]`}
                  src={iconImage}
                  alt="icon"
                />
              </li>
            </Link>
          </Tooltip>
        );
      })}
    </ul>
  );
};

export default SocialsLinkIcons;
