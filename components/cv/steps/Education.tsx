import React from "react";
import FormRowInput from "@/components/features/forms/FormRowInput";
import { useStepperContext } from "@/app/ContextAPI_Hooks/useStepperContext";
import StepperControls from "../StepperControls";
import { personalInfoSchema } from "@/app/schemas";
import { onChange } from "react-toastify/dist/core/store";

const Education = () => {
  const {
    handleClick,
    steps,
    currentStep,
    handleSubmit,
    setFormDataFull,
    formDataFull,
  } = useStepperContext();
  // Update personalInfo in context
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormDataFull?.((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleNextClick = () => {
    const formData = new FormData();
    // Ensure personalInfo is defined (fallback to an empty object if undefined)
    const info = formDataFull || {}; // Default to an empty object if personalInfo is undefined
    Object.entries(info).forEach(([key, value]) => formData.append(key, value));
    // Validate and proceed only if form data is valid
    if (handleSubmit?.(formData, personalInfoSchema)) {
      handleClick?.("Next");
    }
  };

  return (
    <main>
      <form
        className="grid grid-cols-2 h-auto gap-8"
        onSubmit={(e) => e.preventDefault()}
      >
        <FormRowInput
          labelText="Institution"
          onChange={handleChange}
          name="institution"
          type="text"
          placeholderText="Institution"
          className="bg-gray-200 dark:bg-gray-700 dark:text-fontLight text-fontDark dark:caret-fontLight caret-fontDark"
          required
        />
        <FormRowInput
          labelText="Degree"
          onChange={handleChange}
          name="degree"
          type="text"
          placeholderText="Degree"
          className="bg-gray-200 dark:bg-gray-700 dark:text-fontLight text-fontDark dark:caret-fontLight caret-fontDark"
          required
        />
        <FormRowInput
          labelText="Start Date"
          onChange={handleChange}
          name="startDate"
          type="date"
          placeholderText="Start Date"
          className="bg-gray-200 dark:bg-gray-700 dark:text-fontLight text-fontDark dark:caret-fontLight caret-fontDark"
          required
        />
        <FormRowInput
          labelText="End Date"
          onChange={handleChange}
          name="endDate"
          type="date"
          placeholderText="End Date"
          className="bg-gray-200 dark:bg-gray-700 dark:text-fontLight text-fontDark dark:caret-fontLight caret-fontDark"
          required
        />
      </form>
      <StepperControls
        handleClick={handleNextClick} // Use handleNextClick to validate before navigating
        currentStep={currentStep}
        steps={steps}
      />
    </main>
  );
};

export default Education;
