import * as React from "react";
import HomeMainContent from "@/components/home/HomeMainContent";

export default function HomePage() {
  return (
    <main className="border-4 border-blue-500 relative flex flex-col max-w-6xl items-center justify-center h-dvh mx-auto">
      <span className="absolute w-full h-full clip-path-home z-[-100] dark:bg-gray-900"></span>
      <HomeMainContent />
    </main>
  );
}
