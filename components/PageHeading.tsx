"use client";

import * as React from "react";
import headingVariants from "@/animations/pageHeadingAnimate";
import { motion } from "framer-motion";

type PageHeadingProps = {
  title: string | undefined;
  variant?: "mainPage" | "projectPage";
  className?: string;
};

const PageHeading = ({
  title = "",
  variant,
  className = "",
}: PageHeadingProps & React.ComponentProps<typeof motion.h1>) => {
  // $ Animations
  const [parentContainerHeading, childContainerHeading, ContainerHeadingTwo] =
    headingVariants;

  // $ Select animation variant based on the `variant` prop
  const headingAnimation =
    variant === "projectPage" ? ContainerHeadingTwo : parentContainerHeading;

  return (
    <motion.h1
      className={`${variant === "projectPage" ? className : ""} pageHeadingLines relative text-clamp mt-[5rem] w-[70%] mx-auto tracking-wider font-semibold dark:text-white text-blue-600 text-center`}
      initial={headingAnimation.initialState}
      animate={headingAnimation.animateState}
    >
      <motion.span
        className="sm:bg-white dark:bg-bgDark p-2"
        variants={childContainerHeading}
      >
        {title}
      </motion.span>
    </motion.h1>
  );
};

export default PageHeading;
