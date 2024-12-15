import CTAButtonsContainer from "./cta_buttons/CTAButtonsContainer";
import HeroImage from "./HeroImage";
import HeroInfo from "./HeroInfo";

const LandingPage = () => {
  return (
    <main
      id="landing"
      className="mt-[8rem] sm:mt-0 grid grid-flow-row sm:grid-flow-col grid-cols-[1fr, auto] px-4 gap-4 items-start justify-center text-gray-600 dark:text-white tracking-wider sm:mt-none h-auto sm:min-h-screen"
    >
      <HeroInfo />
      <HeroImage />
    </main>
  );
};

export default LandingPage;
