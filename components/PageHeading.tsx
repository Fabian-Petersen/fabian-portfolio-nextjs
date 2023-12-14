import * as React from "react";

const PageHeading = ({ title }: { title: string }) => {
  return (
    <h1 className="text-2xl md:text-4xl font-bold border text-blue-600 text-center">
      {title}
    </h1>
  );
};

export default PageHeading;
