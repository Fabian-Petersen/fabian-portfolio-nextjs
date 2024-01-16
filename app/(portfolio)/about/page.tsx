import * as React from "react";

// $ Data and Images
import AboutBGHex from "@/public/backgroundHexSVG/AboutBGHex";

// $ components
import PageHeading from "@/components/PageHeading";
// import MyInfo from "@/components/about/MyInfo";
// import MySkills from "@/components/about/MySkills";

export default function AboutPage() {
  return (
    <main className="w-full px-6 md:max-w-6xl mx-auto min-h-screen">
      <PageHeading title="About Me" />
      {/* <MyInfo />
      <MySkills /> */}
    </main>
  );
}
