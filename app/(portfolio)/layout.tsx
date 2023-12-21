// $ The main layout for the portfolio section of the site. This layout renders all the pages except dfor the home page which looks different.
// $ The homepage does not have a page title.

import PageHeading from "@/components/PageHeading";
import * as React from "react";

interface layoutProps {
  children: React.ReactNode;
  title: string;
}

const layout = ({ children, title }: layoutProps) => {
  return (
    <main className="px-16 sm:px-8">
      <PageHeading title={title} />
      {children}
    </main>
  );
};

export default layout;
