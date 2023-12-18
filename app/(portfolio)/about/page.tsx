import * as React from "react";
import PageHeading from "@/components/PageHeading";
import AboutBG from "@/public/backgroundSVG/AboutBG";

export default function AboutPage() {
  return (
    <main>
      <div className="bg-cover bg-center absolute top-0 left-0 z-[-100] h-full w-full">
        <AboutBG />
      </div>
      <PageHeading title="About Me" />
    </main>
  );
}
