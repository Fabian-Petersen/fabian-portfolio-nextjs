import * as React from "react";
import HomeBG from "@/public/backgroundSVG/HomeBG";
import HomeMainContent from "@/components/home/HomeMainContent";

export default function HomePage() {
  return (
    <main>
      <div className="absolute top-0 left-0 z-[-100] h-full w-full">
        <HomeBG />
      </div>
      <HomeMainContent />
    </main>
  );
}
