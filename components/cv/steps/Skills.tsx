import React from "react";
import StepperControls from "../StepperControls";
import { useStepperContext } from "@/app/ContextAPI_Hooks/useStepperContext";
import FormRowInput from "@/components/features/forms/FormRowInput";

const Skills = () => {
  // Update formDataFull in context
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormDataFull?.((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const {
    handleClick,
    steps,
    currentStep,
    handleSubmit,
    setFormDataFull,
    formDataFull,
    validationErrors,
  } = useStepperContext();
  return (
    <main>
      <form>
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
      </form>
      <StepperControls
        handleClick={handleClick}
        // handleSubmit={handleSubmit}
        currentStep={currentStep}
        steps={steps}
      />
    </main>
  );
};

export default Skills;
