import React from "react";

type Props = {
  heading: string;
};

const FooterHeadings = ({ heading }: Props) => {
  return <h3 className="text-xl my-1 tracking-wider">{heading}</h3>;
};

export default FooterHeadings;
