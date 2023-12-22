import * as React from "react";
// import HomeBG from "@/public/backgroundSVG/HomeBG";
import HomeBGHex from "@/public/backgroundHexSVG/HomeBGHex";
import HomeMainContent from "@/components/home/HomeMainContent";

export default function HomePage() {
  return (
    <main className="">
      <HomeBGHex />
      <HomeMainContent />
    </main>
  );
}
