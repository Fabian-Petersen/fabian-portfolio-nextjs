import * as React from "react";
import projectCardDataType, { ProjectCardDataType } from "@/data/projectData";
import HorizontalRule from "@/components/features/HorizontalRule";

type PageHeadingProps = {
  title: string;
};

const AuthPageHeading = ({ title }: PageHeadingProps) => {
  return (
    <div className="w-full h-auto grid gap-2 border border-red-500">
      {/* <HorizontalRule variant="auth-pages" /> */}
      <h2 className="block text-clamp_h2 tracking-widest font-semibold dark:text-white text-blue-600">
        {title}
      </h2>
    </div>
  );
};

export default AuthPageHeading;
