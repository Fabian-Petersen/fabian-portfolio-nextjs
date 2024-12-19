import React from "react";

type Props = {};

const FooterLogo = (props: Props) => {
  return (
    <div className="md:flex justify-center">
      <a
        href="/#landing"
        className="text-xl my-1 font-semibold tracking-widest"
      >
        Portfolio
        <span className="text-2xl text-primaryColor">.</span>
      </a>
    </div>
  );
};

export default FooterLogo;
