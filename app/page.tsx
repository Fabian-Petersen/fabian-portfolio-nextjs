import * as React from "react";
import AboutPage from "@/components/about/AboutPage";
import ProjectsPage from "@/components/projects/ProjectPage";
import ContactPage from "../components/contact/ContactPage";
import LandingPage from "@/components/home/LandingPage";
import TestimonialSlider from "@/components/testimonials/TestimonialSlider";

export default function HomePage() {
  return (
    <main className="flex flex-col items-start justify-center h-auto mx-auto overflow-hidden">
      <LandingPage />
      <AboutPage />
      <ProjectsPage />
      <TestimonialSlider />
      <ContactPage />
    </main>
  );
}
