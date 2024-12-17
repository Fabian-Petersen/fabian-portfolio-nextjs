"use client";

import HeroImage from "./HeroImage";
import HeroInfo from "./HeroInfo";
import useScreenSize from "@/app/customHooks/useScreenSize";

const LandingPage = () => {
  const isMobile = useScreenSize(640);
  return (
    <main
      id="landing"
      className={`grid grid-flow-row grid-cols-[minmax(200px,400px),1fr] md:grid-cols-[minmax(300px,1fr),auto] ${isMobile && "grid-cols-[1fr]"} items-start justify-center text-gray-600 dark:text-white tracking-wider w-full min-h-screen`}
    >
      <HeroInfo />
      <HeroImage />
    </main>
  );
};

export default LandingPage;
