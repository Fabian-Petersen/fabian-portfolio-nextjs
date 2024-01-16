import * as React from "react";

type PageHeadingProps = {
  title: string | undefined;
};

const PageHeading = ({ title }: PageHeadingProps) => {
  return (
    <h1 className="pageHeadingLines relative text-clamp mt-[5rem] w-max-[50%] tracking-wider font-semibold dark:text-white text-blue-600 text-center">
      <span className="bg-white p-2">{title}</span>
    </h1>
  );
};

export default PageHeading;
