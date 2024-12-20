"use client";

import React, { FormEvent } from "react";
import FormRowInput from "@/components/features/forms/FormRowInput";
import FormRowTextArea from "@/components/features/forms/FormRowTextArea";
import { Button } from "@/components/ui/button";
import { useCreateItem } from "@/lib/reactQueryCutomHooks";
import { z } from "zod";
import { useRouter } from "next/navigation";

// $ Create testimonial schema
const testimonialFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  position: z.string().min(2, "Position must be at least 2 characters"),
  company: z.string().min(2, "Company must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  image: z.string().optional(),
});

export type TestimonialFormProps = z.infer<typeof testimonialFormSchema>;

const TestimonialForm = () => {
  const router = useRouter();
  const { createItem, isPending } = useCreateItem("testimonials");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("clicked");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const formDataObject = Object.fromEntries(formData);

    // Validate form data with Zod
    const validationResult = testimonialFormSchema.safeParse(formDataObject);
    if (!validationResult.success) {
      console.error(validationResult.error.errors);
      return;
    }

    createItem(formDataObject, {
      onSuccess: () => {
        form.reset();
        router.push("/#testimonials");
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[30rem] w-full flex flex-col mx-auto p-4 gap-2 outline-none rounded-md shadow-md shadow-gray-400 dark:shadow-gray-800 bg-gray-100 dark:bg-gray-800"
    >
      <h2 className="py-4 font-semibold text-gray-600 dark:text-white tracking-[2px] capitalize text-clampH3">
        Thank you for your review...
      </h2>
      <FormRowInput
        id="name"
        labelText="Full Name"
        name="name"
        type="text"
        placeholderText="Your full name"
        className="bg-gray-200 dark:bg-gray-700 dark:text-fontLight text-fontDark dark:caret-fontLight caret-fontDark"
        onChange={() => {}}
      />
      <p className="text-red-500 text-sm"></p>

      <FormRowInput
        id="email"
        labelText="Email"
        name="email"
        type="email"
        placeholderText="Your email address"
        className="bg-gray-200 dark:bg-gray-700 dark:text-fontLight text-fontDark dark:caret-fontLight caret-fontDark"
        onChange={() => {}}
      />
      <p className="text-red-500 text-sm"></p>

      <FormRowInput
        id="position"
        labelText="Position"
        name="position"
        type="text"
        placeholderText="Your job title"
        className="bg-gray-200 dark:bg-gray-700 dark:text-fontLight text-fontDark dark:caret-fontLight caret-fontDark"
        onChange={() => {}}
      />
      <p className="text-red-500 text-sm"></p>

      <FormRowInput
        id="company"
        labelText="Company"
        name="company"
        type="text"
        placeholderText="Your company name"
        className="bg-gray-200 dark:bg-gray-700 dark:text-fontLight text-fontDark dark:caret-fontLight caret-fontDark"
        onChange={() => {}}
      />
      <p className="text-red-500 text-sm"></p>

      <FormRowInput
        id="image"
        labelText="Profile Image URL (Optional)"
        name="image"
        type="url"
        placeholderText="Link to your profile picture"
        className="bg-gray-200 dark:bg-gray-700 dark:text-fontLight text-fontDark dark:caret-fontLight caret-fontDark"
        onChange={() => {}}
      />
      <p className="text-red-500 text-sm"></p>

      <FormRowTextArea
        id="message"
        labelText="Your Testimonial"
        row={4}
        name="message"
        placeholderText="Share your experience working with me..."
        className="bg-gray-200 dark:bg-gray-700 dark:text-fontLight text-fontDark dark:caret-fontLight caret-fontDark"
        onChange={() => {}}
      />
      <p className="text-red-500 text-sm"></p>

      <Button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded tracking-wider uppercase dark:text-fontLight text-white"
        disabled={isPending}
      >
        {isPending ? "Submitting..." : "Submit Testimonial"}
      </Button>
    </form>
  );
};

export default TestimonialForm;
