"use client";

import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

type ButtonProps = {
  className: string;
};

const CTAButton = ({ className }: ButtonProps) => {
  const handleClick = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button variant="contact" className={className} onClick={handleClick}>
      <Mail className="mr-2" />
      Contact Me
    </Button>
  );
};

export default CTAButton;
