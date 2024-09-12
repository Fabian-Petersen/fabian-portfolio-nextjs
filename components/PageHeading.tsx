import * as React from "react";
import pageLinkData from "@/data/pageLinkData";

type PageHeadingProps = {
  title: string | undefined;
};

const PageHeading = ({ title }: PageHeadingProps) => {
  return (
    <h1 className="pageHeadingLines relative text-clamp mt-[5rem] w-[70%] mx-auto tracking-wider font-semibold dark:text-white text-blue-600 text-center">
      <span className="sm:bg-white p-2">{title}</span>
    </h1>
  );
};

export default PageHeading;
