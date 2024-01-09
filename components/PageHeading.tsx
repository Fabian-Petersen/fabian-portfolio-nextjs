import * as React from "react";

type PageHeadingProps = {
  title: string;
};

const PageHeading = ({ title }: PageHeadingProps) => {
  return (
    <h1
      className="relative text-headingClamp headingLine tracking-wider font-semibold dark:text-white text-blue-600 text-center 
    before:absolute before:content-[''] before:top-[50%] before:left-0 before:w-[20rem] before:h-[2px] before:z-[-1] before:bg-blue-500 
    after:absolute after:content-[''] after:top-[50%] after:right-0 after:w-[20rem] after:h-[2px] after:z-[-1] after:bg-blue-500"
    >
      <span className="bg-white px-6">{title}</span>
    </h1>
  );
};

export default PageHeading;
