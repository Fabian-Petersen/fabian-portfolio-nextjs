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
    <Button
      buttonLabel="Admin"
      type="button"
      onClick={handleLogin}
      className="bg-buttonBlueColor hover:bg-blue-400 text-sm text-white py-2 px-6 rounded-full"
    />
  );
};

export default LoginButton;
