// $ This component check what size of heading is passed in and renders the correct heading size for page sub headings

import * as React from "react";

interface SubHeadingProps {
  title: string | undefined;
  size?: "h2" | "h3";
  variant?: "mainPage" | "variantSubHeading";
  className?: string;
}

// modify the code to accept different heading sizes by passing a type prop
const PageSubHeading = ({
  title,
  size,
  variant,
  className,
}: SubHeadingProps) => {
  const isProjectPage = variant === "variantSubHeading";

  // $ Use if statements to check for different heading sizes
  if (size === "h2") {
    return (
      <h2
        className={`${isProjectPage ? className : "dark:text-white tracking-wider text-center text-[2rem]"}`}
      >
        {title}
      </h2>
    );
  }

  if (size === "h3") {
    return (
      <h2
        className={`${isProjectPage ? "pt-2 text-[1.5rem]" : "dark:text-white text-center text-[1.4rem]"}`}
      >
        {title}
      </h2>
    );
  }
};

export default PageSubHeading;
