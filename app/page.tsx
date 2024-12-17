import * as React from "react";
import AboutPage from "@/components/about/AboutPage";
import ProjectsPage from "@/components/projects/ProjectPage";
import ContactPage from "../components/contact/ContactPage";
import LandingPage from "@/components/home/LandingPage";

export default function HomePage() {
  return (
    <main className="flex flex-col max-w-6xl items-start justify-center h-auto mx-auto overflow-hidden space-y-4">
      <LandingPage />
      <AboutPage />
      <ProjectsPage />
      <ContactPage />
    </main>
  );
}
