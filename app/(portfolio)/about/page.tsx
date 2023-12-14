import * as React from "react";
import PageHeading from "@/components/PageHeading";
import AboutBG from "@/public/backgroundSVG/AboutBG";

export default function AboutPage() {
  return (
    <main>
      <AboutBG />
      <PageHeading title="About Page" />
      <div className="w-full h-full border border-red-500 text-white">
        <p>Main Content</p>
      </div>
    </main>
  );
}
