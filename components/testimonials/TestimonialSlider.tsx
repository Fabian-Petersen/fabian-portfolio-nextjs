"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PageHeading from "../PageHeading";
import { useFetchItem } from "@/lib/reactQueryCutomHooks";
import { TestimonialFormProps } from "@/components/testimonials/TestimonialForm";

const TestimonialSlider = () => {
  // $ Data from the database is fetched using the useFetchItem hook.
  const { data } = useFetchItem("testimonials");
  const testimonials: TestimonialFormProps[] = data
    ? JSON.parse(data.body)
    : [];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // $ Function to generate initials from name
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  return (
    <main id="testimonials" className="w-full bg-bgLight dark:bg-bgDark px-4">
      <PageHeading title="Testimonials" />
      <div className="flex flex-col gap-6 px-[var(--all-pages-spacing-small) md:max-w-6xl mx-auto md:mt-[var(--navbarHeight)] w-full h-auto relative">
        <AnimatePresence mode="wait">
          {testimonials.length > 0 && (
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
            >
              <Quote className="w-12 h-12 text-blue-500 mb-6" />

              {testimonials[currentIndex].image ? (
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 rounded-full mb-4 object-cover"
                />
              ) : (
                <div className="w-20 h-20 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold mb-4">
                  {getInitials(testimonials[currentIndex].name)}
                </div>
              )}
              <div className="flex-1 min-h-[150px] flex flex-col items-center justify-center">
                <p className="text-gray-600 dark:text-gray-300 text-center mb-6 max-w-2xl">
                  "{testimonials[currentIndex].message}"
                </p>

                <div className="text-center">
                  <h4 className="font-semibold text-lg text-gray-800 dark:text-white">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-blue-500">
                    {testimonials[currentIndex].position}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {testimonials.length > 0 && (
          <>
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg text-blue-500 hover:bg-blue-50 dark:hover:bg-gray-700"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg text-blue-500 hover:bg-blue-50 dark:hover:bg-gray-700 z-[1000]"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-blue-500 w-4"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default TestimonialSlider;
