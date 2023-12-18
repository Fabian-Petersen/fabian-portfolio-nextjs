import * as React from "react";

interface PageHeadingProps {
  title: string;
}

const PageHeading = ({ title }: PageHeadingProps) => {
  return (
    <h1 className="text-2xl md:text-4xl font-bold dark:text-white text-blue-600 text-center">
      {title}
    </h1>
  );
};

export default PageHeading;
