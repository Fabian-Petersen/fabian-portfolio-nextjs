import * as React from "react";

// $ Data and Images

// $ components
import PageHeading from "@/components/PageHeading";
import MyInfo from "@/components/about/MyInfo";
import MySkills from "@/components/about/MySkills";

const AboutPage = () => {
  return (
    <main
      id="about"
      className="w-full px-6 md:max-w-6xl mx-auto h-min-screen mb-12"
    >
      <PageHeading title="About Me" />
      <div className="flex flex-col gap-4">
        <MyInfo />
        <MySkills />
      </div>
    </main>
  );
};

export default AboutPage;
