import * as React from "react";
import AuthPageHeading from "@/components/protectedRoutes/AuthPageHeading";

interface layoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: layoutProps) => {
  return (
    <main className="mt-[7rem] w-full flex flex-col md:max-w-6xl mx-auto min-h-screen">
      {children}
    </main>
  );
};

export default layout;
