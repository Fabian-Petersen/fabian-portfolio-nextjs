"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Button from "@/components/features/Button";

const LoginButton = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <>
      <Button
        buttonLabel="Admin"
        type="button"
        onClick={handleLogin}
        className="hover:bg-buttonBlueColor transition-all duration-100 text-md text-fontDark dark:text-fontLight py-2 px-6 rounded-full"
      />
    </>
  );
};

export default LoginButton;
