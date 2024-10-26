import React from "react";
import SocialsLinkIcons from "../SocialsLinkIcons";
import FooterHeadings from "./FooterHeadings";
import QuickLinks from "./QuickLinks";
import Logo from "../navbar/Logo";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="absolute z-[100] border border-t-gray-800/30 shadow-border bg-bgDarkFooter/80 text-white mx-auto h-auto w-full text-sm p-4 mt-auto">
      <main className="grid sm:grid-cols-4 gap-2 sm:justify-between h-auto px-10 pb-12">
        <div className="md:flex justify-center hidden">
          <a
            href="/#landing"
            className="text-xl my-1 font-semibold tracking-widest"
          >
            Portfolio
            <span className="text-2xl text-primaryColor">.</span>
          </a>
        </div>
        <div className="flex flex-col gap-2 capitalize">
          <FooterHeadings heading="Quick Links" />
          <QuickLinks className="flex flex-col gap-2" />
        </div>
        <div className="flex flex-col gap-2 capitalize">
          <FooterHeadings heading="Recent Projects" />
          <ul className="space-y-3">
            <li className="capitalize">Project 1</li>
            <li>Project 2</li>
            <li>Project 3</li>
            <li>Project 4</li>
          </ul>
        </div>
        <div className="space-y-3">
          <FooterHeadings heading="Socials" />
          <SocialsLinkIcons />
        </div>
      </main>
      <p className="flex justify-center pt-5 pb-1">
        &copy; {currentYear} Designed by Fabian Petersen.
      </p>
    </footer>
  );
}

export default Footer;
