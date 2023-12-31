// $ This component check what size of heading is passed in and renders the correct heading size for page sub headings

import * as React from "react";

interface SubHeadingProps {
  title: string;
  size?: "h2" | "h3";
}

// modify the code to accept different heading sizes by passing a type prop
const PageSubHeading = ({ title, size }: SubHeadingProps) => {
  // $ Use if statements to check for different heading sizes
  if (size === "h2") {
    return (
      <h2 className="dark:text-white text-center text-[1.8rem] uppercase p-8">
        {title}
      </h2>
    );
  }

  if (size === "h3") {
    return (
      <h2 className="dark:text-white text-center text-[1.4rem] uppercase p-8">
        {title}
      </h2>
    );
  }
};

export default PageSubHeading;
