import React from "react";

type Props = {};

function Footer({}: Props) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex justify-center align-middle w-full text-sm pt-4 pb-1">
      © {currentYear} Designed by Fabian Petersen.
    </div>
  );
}

export default Footer;
