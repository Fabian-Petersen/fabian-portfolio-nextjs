import CTAButton from "./CTAButton";
import CVButton from "./CVButton";

// $ h-full set to ensure that the buttons are equal size in length due to the loading button /n
// $ from Shadcn being longer than the CTAButton.

function CTAButtonsContainer() {
  return (
    <main className="flex gap-4 w-[20rem]">
      <CTAButton className="px-4 py-5 outline-none border-none" />
      <CVButton className="px-4 py-5 outline-none border-none" />
    </main>
  );
}

export default CTAButtonsContainer;
