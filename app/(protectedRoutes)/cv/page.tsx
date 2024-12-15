"use client";

import React, { useState } from "react";
import Stepper from "@/components/cv/Stepper";
import StepperControls from "@/components/cv/StepperControls";
import AuthPageHeading from "@/components/protectedRoutes/AuthPageHeading";
import DisplaySteps from "@/components/cv/steps/DisplaySteps";
import { useStepperContext } from "@/app/ContextAPI_Hooks/useStepperContext";

const CV = () => {
  return (
    <main className="w-full space-y-20 mx-auto shadow-md rounded-2xl py-6 px-12 outline-none shadow-gray-400 dark:shadow-gray-800 bg-gray-100 dark:bg-gray-800">
      <AuthPageHeading title="Create / Update CV" />
      {/* <div className="container horizontal border border-blue-500"> */}
      <Stepper />
      {/* Display Different Forms with each step */}
      <DisplaySteps />
    </main>
  );
};

export default CV;
