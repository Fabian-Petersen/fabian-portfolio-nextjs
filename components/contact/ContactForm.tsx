"use client";

import React from "react";
import FormRowInput from "../features/forms/FormRowInput";
import FormRowTextArea from "../features/forms/FormRowTextArea";
import Button from "../features/Button";

const ContactForm = () => {
  return (
    <form className="max-w-[30rem] flex flex-col p-4 gap-6 mx-auto border-none outline-none rounded-md shadow-lg shadow-gray-400 dark:shadow-gray-800 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-2xl py-2 font-semibold text-gray-400 dark:text-white">
        Contact Me
      </h2>
      <FormRowInput
        id="name"
        labelText="name"
        name="name"
        type="text"
        placeholderText="name"
        className=""
        onChange={() => {}}
      />
      <FormRowInput
        id="email"
        labelText="email"
        name="email"
        type="email"
        placeholderText="email"
        className=""
        onChange={() => {}}
      />
      <FormRowTextArea
        id="message"
        labelText="message"
        row={4}
        name="message"
        placeholderText="message"
        className=""
        onChange={() => {}}
      />
      <Button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded tracking-wider uppercase"
        buttonLabel="Send Message"
      />
    </form>
  );
};

export default ContactForm;
