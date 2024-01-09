import * as React from "react";

type PageHeadingProps = {
  title: string;
};

const PageHeading = ({ title }: PageHeadingProps) => {
  return (
    <h1 className="relative text-headingClamp headingLine tracking-wider font-semibold dark:text-white text-blue-600 text-center border border-red-300">
      <span>{title}</span>
    </h1>
  );
};

export default PageHeading;
