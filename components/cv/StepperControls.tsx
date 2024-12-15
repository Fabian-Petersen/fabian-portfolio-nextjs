"use client";

import React from "react";
import Button from "../features/Button";
import { StepperContextProps } from "@/app/ContextAPI_Hooks/useStepperContext";

const StepperControls = ({
  handleClick,
  currentStep,
  steps,
}: StepperContextProps) => {
  return (
    <div className="container flex justify-between">
      {/* Back Button */}
      <Button
        onClick={() => handleClick?.("Back")}
        buttonLabel="Back"
        className={`${currentStep === 0 ? "opacity-50 cursor-not-allowed" : ""} hover:text-white border border-red-400 hover:bg-red-400 py-2 px-6 rounded-full transition-all duration-200`}
      />
      <Button
        onClick={() => handleClick?.("Next")}
        buttonLabel={currentStep === steps.length - 1 ? "Confirm" : "Next"}
        className="hover:text-white hover:bg-blue-500 border-blue-500 border hover:bg-opacity-80 py-2 px-6 rounded-full transition-all duration-200"
      />
    </div>
  );
};

export default StepperControls;
