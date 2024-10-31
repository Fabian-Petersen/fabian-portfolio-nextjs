"use client";

import React from "react";
import FormRowInput from "../features/forms/FormRowInput";
import FormRowTextArea from "../features/forms/FormRowTextArea";
import Button from "../features/Button";
import useHandleSubmitContacts from "@/customHooks/useHandleSubmitContacts";

const ContactForm = () => {
  const { handleSubmit } = useHandleSubmitContacts();

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[35rem] w-[20rem] flex flex-col mx-auto p-4 gap-6 outline-none rounded-md shadow-md shadow-gray-400 dark:shadow-gray-800 bg-gray-100 dark:bg-gray-800"
    >
      <h2 className="py-2 font-semibold text-gray-600 dark:text-white tracking-[2px] capitalize text-clamp_h2">
        Send Message...
      </h2>
      <FormRowInput
        id="name"
        labelText="name"
        name="username"
        type="text"
        placeholderText="name"
        className="bg-gray-200 dark:bg-gray-700 dark:text-fontLight text-fontDark dark:caret-fontLight caret-fontDark"
        onChange={() => {}}
      />
      <FormRowInput
        id="email"
        labelText="email"
        name="email"
        type="email"
        placeholderText="email"
        className="bg-gray-200 dark:bg-gray-700 dark:text-fontLight text-fontDark dark:caret-fontLight caret-fontDark"
        onChange={() => {}}
      />
      <FormRowTextArea
        id="message"
        labelText="message"
        row={4}
        name="message"
        placeholderText="message"
        className="bg-gray-200 dark:bg-gray-700 dark:text-fontLight text-fontDark dark:caret-fontLight caret-fontDark"
        onChange={() => {}}
      />
      <Button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded tracking-wider uppercase dark:text-fontLight text-fontDark"
        buttonLabel="Submit Message"
      />
    </form>
  );
};

export default ContactForm;
