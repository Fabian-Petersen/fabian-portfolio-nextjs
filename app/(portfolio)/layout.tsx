// $ The main layout for the portfolio section of the site. This layout renders all the pages except dfor the home page which looks different.
// $ The homepage does not have a page title.

import PageHeading from "@/components/PageHeading";
import * as React from "react";

interface layoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: layoutProps) => {
  return <main className="">{children}</main>;
};

export default layout;
