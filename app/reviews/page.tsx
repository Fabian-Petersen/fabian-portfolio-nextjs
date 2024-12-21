import React from "react";
import TestimonialForm from "@/components/testimonials/TestimonialForm";
import PageHeading from "@/components/PageHeading";
import { Button } from "@/components/ui/button";
import BackHomeButton from "@/components/features/BackHomeButton";

function AddTestimonial() {
  return (
    <main className="w-full grid grid-place-content-center bg-slate-200 dark:bg-bgDark h-auto py-32">
      <div className="w-full relative">
        <BackHomeButton className="top-0 left-20 absolute" title="Home" />
        <div className="sm:px-[var(--all-pages-spacing)] px-[var(--all-pages-spacing-small)] md:max-w-6xl mx-auto grid grid-cols-1 place-content-center h-full">
          <TestimonialForm />
        </div>
      </div>
    </main>
  );
}

export default AddTestimonial;
