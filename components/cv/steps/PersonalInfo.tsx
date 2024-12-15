import React from "react";
import FormRowInput from "@/components/features/forms/FormRowInput";
import { personalInfoSchema } from "@/app/schemas";
import { useStepperContext } from "@/app/ContextAPI_Hooks/useStepperContext";
import StepperControls from "../StepperControls";

const PersonalInfo = () => {
  const {
    handleClick,
    steps,
    currentStep,
    handleSubmit,
    setFormDataFull,
    formDataFull,
    validationErrors,
  } = useStepperContext();

  // Update formDataFull in context
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormDataFull?.((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  console.log("currentStep:", currentStep);
  const handleNextClick = () => {
    const formData = new FormData();
    // Ensure formDataFull is defined (fallback to an empty object if undefined)
    const info = formDataFull || {}; // Default to an empty object if formDataFull is undefined
    Object.entries(info).forEach(([key, value]) => formData.append(key, value));
    // console.log(formDataFull);

    // Validate and proceed only if form data is valid
    if (handleSubmit?.(formData, personalInfoSchema)) {
      handleClick?.("Next");
    }
  };

  return (
    <main className="grid gap-4">
      <form
        className="grid grid-cols-2 h-auto gap-8"
        onSubmit={(e) => e.preventDefault()}
      >
        <FormRowInput
          onChange={handleChange}
          labelText="First Name"
          name="firstName"
          type="text"
          placeholderText="First Name"
          className="bg-gray-200 dark:bg-gray-700 dark:text-fontLight text-fontDark dark:caret-fontLight caret-fontDark"
          value={formDataFull?.firstName || ""} // Bind to formDataFull state
          required
          error={
            validationErrors?.firstName
              ? { message: validationErrors.firstName }
              : undefined
          }
        />
        <FormRowInput
          labelText="Last Name"
          onChange={handleChange}
          name="lastName"
          type="text"
          placeholderText="Last Name"
          className="bg-gray-200 dark:bg-gray-700 dark:text-fontLight text-fontDark dark:caret-fontLight caret-fontDark"
          required
          error={
            validationErrors?.lastName
              ? { message: validationErrors.lastName }
              : undefined
          }
        />
        <FormRowInput
          labelText="Email"
          onChange={handleChange}
          name="email"
          type="email"
          placeholderText="Email"
          className="bg-gray-200 dark:bg-gray-700 dark:text-fontLight text-fontDark dark:caret-fontLight caret-fontDark"
          required
          error={
            validationErrors?.email
              ? { message: validationErrors.email }
              : undefined
          }
        />
        <FormRowInput
          labelText="Phone"
          onChange={handleChange}
          name="phone"
          type="tel"
          placeholderText="Phone"
          className="bg-gray-200 dark:bg-gray-700 dark:text-fontLight text-fontDark dark:caret-fontLight caret-fontDark"
          required
          error={
            validationErrors?.phone
              ? { message: validationErrors.phone }
              : undefined
          }
        />
        <FormRowInput
          labelText="Location"
          onChange={handleChange}
          name="location"
          type="text"
          placeholderText="Location"
          className="bg-gray-200 dark:bg-gray-700 dark:text-fontLight text-fontDark dark:caret-fontLight caret-fontDark"
          required
          error={
            validationErrors?.location
              ? { message: validationErrors.location }
              : undefined
          }
        />
        <FormRowInput
          labelText="Summary"
          onChange={handleChange}
          name="summary"
          type="text"
          placeholderText="Summary"
          className="bg-gray-200 dark:bg-gray-700 dark:text-fontLight text-fontDark dark:caret-fontLight caret-fontDark"
          required
          error={
            validationErrors?.summary
              ? { message: validationErrors.summary }
              : undefined
          }
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

export default PersonalInfo;
