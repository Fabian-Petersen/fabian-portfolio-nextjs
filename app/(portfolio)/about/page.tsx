import * as React from "react";

// $ Data and Images
import AboutBG from "@/public/backgroundSVG/AboutBG";

// $ components
import PageHeading from "@/components/PageHeading";
import MyInfo from "@/components/about/MyInfo";
import MySkills from "@/components/about/MySkills";

export default function AboutPage() {
  return (
    <main className="">
      <div className="bg-cover bg-center absolute top-0 left-0 z-[-100] h-full w-full">
        <AboutBG />
      </div>
      <div className="mx-auto">
        <PageHeading title="About Me" />
        <MyInfo />
        {/* <MySkills /> */}
      </div>
    </main>
  );
}
