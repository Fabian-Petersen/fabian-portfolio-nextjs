"use client";
// $ import react hooks and animation
import React, { FormEvent, useCallback } from "react";
import { useRouter } from "next/navigation";

// $ import components
import FormRowInput from "@/components/features/forms/FormRowInput";
import FormRowTextArea from "@/components/features/forms/FormRowTextArea";
import { Button } from "@/components/ui/button";

// $ import third party libraries
import { z } from "zod";
import { testimonialFormSchema } from "@/app/schemas";

// $ Type for the Testimonial Form
export type TestimonialFormProps = z.infer<typeof testimonialFormSchema>;

// $ import custom hooks
import { useCreateItem } from "@/lib/reactQueryCutomHooks";

// Test data for development
const defaultTestData = {
  username: "John Doe",
  email: "john.doe@example.com",
  position: "Senior Developer",
  company: "Tech Corp",
  image: "https://example.com/profile.jpg",
  message:
    "Working with this developer has been an amazing experience. Their technical skills and attention to detail are outstanding.",
};

const TestimonialForm = () => {
  const router = useRouter();
  const isDevelopment = process.env.NODE_ENV === "development";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    // const form = defaultFormValues;
    const formData = new FormData(form);
    const formDataObject = Object.fromEntries(formData);

    // Validate form data with Zod
    const validationResult = testimonialFormSchema.safeParse(formDataObject);
    if (!validationResult.success) {
      console.error(validationResult.error.errors);
      return;
    }

    // console.log(formDataObject);
    router.push("/#testimonials");

    // ! Fix the POST method to the database before using the createItem function (add the router function into onSuccess once complete)
    // createItem(formDataObject, {
    // onSuccess: () => {
    // form.reset();
    // },
    // });
    // };
  };
  const isPending = false;
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[30rem] w-full flex flex-col mx-auto p-4 gap-2 outline-none rounded-md shadow-md shadow-gray-400 dark:shadow-gray-800 bg-gray-100 dark:bg-gray-800"
    >
      <h2 className="py-4 font-semibold text-gray-600 dark:text-white tracking-[2px] capitalize text-clampH3">
        Add your review...
      </h2>
      <FormRowInput
        id="name"
        labelText="Full Name"
        name="name"
        type="text"
        placeholderText="Your full name"
        className="bg-gray-200 dark:bg-gray-700 dark:text-fontLight text-fontDark dark:caret-fontLight caret-fontDark"
        onChange={() => {}}
        defaultValues={isDevelopment ? defaultTestData.username : ""}
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
        defaultValues={isDevelopment ? defaultTestData.email : ""}
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
        defaultValues={isDevelopment ? defaultTestData.position : ""}
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
        defaultValues={isDevelopment ? defaultTestData.company : ""}
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
        defaultValues={isDevelopment ? defaultTestData.image : ""}
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
        defaultValues={isDevelopment ? defaultTestData.message : ""}
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
