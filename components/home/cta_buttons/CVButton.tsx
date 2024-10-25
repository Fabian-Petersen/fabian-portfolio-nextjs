"use client";

import Button from "@/components/features/Button";
import Link from "next/link";

const CVButton = () => {
  return (
    // <Link href="">
    <Button
      className="flex-1 text-[0.8rem] p-2 md:p-3 bg-transparent border border-blue-600 hover:bg-blue-600 hover:shadow-lg hover:translate-y-[1px] rounded-full text-gray-600 dark:text-white hover:text-white uppercase tracking-widest"
      buttonLabel="Download CV"
    />
    // </Link>
  );
};

export default CVButton;
