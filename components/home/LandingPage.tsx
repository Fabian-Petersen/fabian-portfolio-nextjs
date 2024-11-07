import CTAButtonsContainer from "./cta_buttons/CTAButtonsContainer";
import HeroImage from "./HeroImage";
import HeroInfo from "./HeroInfo";

const LandingPage = () => {
  return (
    <main
      id="landing"
      className="grid grid-cols-2 items-start justify-center text-gray-600 dark:text-white tracking-wider h-screen"
    >
      <HeroInfo />
      <HeroImage />
    </main>
  );
};

export default LandingPage;
