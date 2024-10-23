"use client";

import React from "react";
import FormRowInput from "../features/forms/FormRowInput";
import FormRowTextArea from "../features/forms/FormRowTextArea";
import Button from "../features/Button";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";

const ContactForm = () => {
  // $ Define the Zod schema for validation
  const contactFormSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }), // Must be a non-empty string
    email: z.string().email({ message: "Invalid email address" }), // Must be a valid email
    message: z.string().min(1, { message: "Message is required" }), // Must be non-empty
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[35rem] w-[20rem] flex flex-col mx-auto p-4 gap-6 outline-none rounded-md shadow-lg shadow-gray-400 dark:shadow-gray-800 bg-gray-100 dark:bg-gray-800"
    >
      <h2 className="py-2 font-semibold text-gray-600 dark:text-white tracking-wider capitalize text-clamp_h2">
        Send Message...
      </h2>
      <FormRowInput
        id="name"
        labelText="name"
        name="name"
        type="text"
        placeholderText="name"
        className="bg-gray-200 dark:bg-gray-700"
        onChange={() => {}}
      />
      <FormRowInput
        id="email"
        labelText="email"
        name="email"
        type="email"
        placeholderText="email"
        className="bg-gray-200 dark:bg-gray-700"
        onChange={() => {}}
      />
      <FormRowTextArea
        id="message"
        labelText="message"
        row={4}
        name="message"
        placeholderText="message"
        className="bg-gray-200 dark:bg-gray-700"
        onChange={() => {}}
      />
      <Button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded tracking-wider uppercase"
        buttonLabel="Submit Message"
      />
    </form>
  );
};

export default ContactForm;
