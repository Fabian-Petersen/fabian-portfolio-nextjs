import * as React from "react";

// $ Data and Images
import AboutBGHex from "@/public/backgroundHexSVG/AboutBGHex";

// $ components
import PageHeading from "@/components/PageHeading";
import MyInfo from "@/components/about/MyInfo";
import MySkills from "@/components/about/MySkills";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutBGHex />
      <div className="mx-auto">
        <PageHeading title="About Me" />
        <MyInfo />
        <MySkills />
      </div>
    </main>
  );
}
