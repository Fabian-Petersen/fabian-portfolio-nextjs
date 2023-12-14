import PageHeading from "@/components/PageHeading";
import * as React from "react";

interface layoutProps {
  children: React.ReactNode;
  title: string;
}

const layout = ({ children, title }: layoutProps) => {
  return (
    <main className="">
      <PageHeading title={title} />
      {children}
    </main>
  );
};

export default layout;
