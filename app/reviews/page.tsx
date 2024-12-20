import React from "react";
import TestimonialForm from "@/components/testimonials/TestimonialForm";
import PageHeading from "@/components/PageHeading";
import { Button } from "@/components/ui/button";
import BackHomeButton from "@/components/features/BackHomeButton";

type Props = {};

function AddTestimonial({}: Props) {
  return (
    <main className="w-full bg-slate-200 dark:bg-bgDark px-4 h-screen">
      <div className="sm:px-[var(--all-pages-spacing)] px-[var(--all-pages-spacing-small)] md:max-w-6xl mx-auto grid grid-cols-1 place-content-center h-full">
        <TestimonialForm />
      </div>
    </main>
  );
}

export default AddTestimonial;
