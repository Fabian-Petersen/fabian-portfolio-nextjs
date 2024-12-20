"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/router";

type Props = { title: string; className?: string };

function BackHomeButton({ title, className }: Props) {
  //   const router = useRouter();
  return (
    <Button
      //   onClick={() => router.push("/")}
      className={className}
      title={title}
    >
      <ChevronLeft />
      <span>{title}</span>
    </Button>
  );
}

export default BackHomeButton;
