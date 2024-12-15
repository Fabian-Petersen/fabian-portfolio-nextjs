import * as React from "react";
import projectCardDataType, { ProjectCardDataType } from "@/data/projectData";

type PageHeadingProps = {
  title: string | undefined;
  variant?: "mainPage" | "projectPage";
  className?: string;
};

const PageHeading = ({
  title,
  variant,
  className,
}: PageHeadingProps & ProjectCardDataType) => {
  const isProjectPage = variant === "projectPage";

  return (
    <h1
      className={` ${isProjectPage && className} pageHeadingLines relative text-clamp mt-[5rem] w-[70%] mx-auto tracking-wider font-semibold dark:text-white text-blue-600 text-center`}
    >
      <span className="sm:bg-white dark:bg-bgDark p-2">{title}</span>
    </h1>
  );
};

export default PageHeading;
