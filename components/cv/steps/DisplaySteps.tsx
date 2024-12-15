import PersonalInfo from "@/components/cv/steps/PersonalInfo";
import Education from "@/components/cv/steps/Education";
import Skills from "@/components/cv/steps/Skills";
import Projects from "@/components/cv/steps/Projects";
import { useStepperContext } from "@/app/ContextAPI_Hooks/useStepperContext";

const DisplaySteps = () => {
  const { currentStep } = useStepperContext();
  const step = currentStep + 1;
  switch (step) {
    case 1:
      return <PersonalInfo />;
    case 2:
      return <Education />;
    case 3:
      return <Skills />;
    case 4:
      return <Projects />;
    default:
      return <PersonalInfo />;
  }
};

export default DisplaySteps;
