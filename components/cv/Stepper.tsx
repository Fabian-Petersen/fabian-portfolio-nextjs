"use client";
import React, { useState, useEffect, useRef } from "react";
// import { StepperProps } from "@/app/(protectedRoutes)/cv/page";
import { useStepperContext } from "@/app/ContextAPI_Hooks/useStepperContext";
// import DisplaySingleStep from "./steps/DisplaySingleStep";

type StepProps = {
  description: string;
  completed: boolean;
  highlighted: boolean;
  selected: boolean;
  stepNumber: number;
};

const Stepper = () => {
  const {
    currentStep,
    steps,
    handleSubmit,
    validationStatus,
    setValidationStatus,
  } = useStepperContext();

  const [newStep, setNewStep] = useState<StepProps[]>([]);

  const stepRef = useRef<StepProps[] | null>(null);

  // Ensure correct typing for parameters and return updated steps
  const updateStep = (stepNumber: number, steps: StepProps[]): StepProps[] => {
    const newSteps = [...steps];
    let count = 0;

    while (count < newSteps.length) {
      if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          completed: true,
          highlighted: false,
          selected: false,
        };
      } else if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          completed: false,
          highlighted: true,
          selected: true,
        };
      } else {
        newSteps[count] = {
          ...newSteps[count],
          completed: false,
          highlighted: false,
          selected: false,
        };
      }
      count++;
    }
    return newSteps; // Return the modified array
  };

  useEffect(() => {
    // Initialize stepsState with required properties
    const stepsState: StepProps[] = steps
      ? steps.map((step, index) => ({
          description: step,
          completed: validationStatus || false,
          highlighted: index === 0,
          selected: index === 0,
          stepNumber: index + 1,
        }))
      : [];

    stepRef.current = stepsState;
    console.log("ref current:", stepRef.current);
    // Ensure updated steps are returned and set in state
    const current = updateStep(currentStep, stepsState);
    setNewStep(current);
  }, [currentStep]);

  return (
    <div className="container relative flex justify-between items-center text-teal-600 w-full">
      {newStep.map((step, index) => {
        return (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center">
              <div
                className={`${step.selected ? "bg-transparent text-fontDark border border-green-600" : ""} 
                  ${step.completed ? "bg-green-600 border border-green-600" : ""} 
                  rounded-full text-fontDark dark:text-fontLight transition duration-500 ease-in-out 
                  border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3`}
              >
                {step.completed && handleSubmit ? (
                  <span className="text-white font-bold text-xl">&#10003;</span>
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              <div
                className={`${step.highlighted ? "text-green-600" : "text-gray-400"} 
                  ${step.completed && "text-green-600"} absolute top-0 text-center mt-16 w-32 
                  text-xs font-medium uppercase`}
              >
                {step.description}
              </div>
            </div>
            {index !== newStep.length - 1 && (
              <div
                className={`${
                  step.completed
                    ? "border-green-600"
                    : "dark:border-gray-300 border-gray-800"
                } w-full flex-auto border-t-2 transition duration-500 ease-in-out`}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Stepper;
