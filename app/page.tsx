import * as React from "react";
import HomeMainContent from "@/components/home/HomeMainContent";

export default function HomePage() {
  return (
    <main className="flex flex-col max-w-6xl items-start justify-center h-dvh mx-auto overflow-hidden">
      <span className="absolute inset-0 w-full h-full clip-path-home z-[-100] dark:bg-gray-900"></span>
      <HomeMainContent />
    </main>
  );
}
