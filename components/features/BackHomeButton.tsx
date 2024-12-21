"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = { title: string; className?: string };

function BackHomeButton({ title, className }: Props) {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push("/")}
      className={`group ${className}`}
      title={title}
    >
      <ChevronLeft className="transition-transform group-hover:-translate-x-1 duration-200" />
      {title}
    </Button>
  );
}

export default BackHomeButton;
