import * as React from "react";

// $ Data and Images

// $ components
import PageHeading from "@/components/PageHeading";
import MyInfo from "@/components/about/MyInfo";
import MySkills from "@/components/about/MySkills";
import PageHeadingWithLines from "../PageHeadingWithLines";

const AboutPage = () => {
  return (
    <main id="about" className="w-full bg-slate-200 dark:bg-bgDark py-4">
      <div className="flex flex-col gap-6 w-full sm:px-[var(--all-pages-spacing)] px-[var(--all-pages-spacing-small)] md:max-w-6xl mx-auto min-h-screen]">
        <PageHeading title="About Me" className="bg-slate-200" />
        <MyInfo />
        <MySkills />
      </div>
    </main>
  );
};

export default AboutPage;
