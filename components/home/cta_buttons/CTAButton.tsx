"use client";

import Button from "@/components/features/Button";

const CTAButton = () => {
  const handleClick = () => {
    const element = document.getElementById("/projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button
      className="flex-1 text-[0.8rem] p-2 md:p-3 bg-blue-500 hover:bg-blue-600 hover:shadow-lg hover:translate-y-[1px] rounded-full text-gray-200 uppercase tracking-widest"
      buttonLabel="Projects"
      onClick={handleClick}
    />
  );
};

export default CTAButton;
