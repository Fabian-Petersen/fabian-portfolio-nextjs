import React from "react";

type HorizontalRuleProps = {
  variant?: "default" | "auth-pages";
};

const HorizontalRule = ({ variant }: HorizontalRuleProps) => {
  const isAuthPage = variant === "auth-pages";

  return (
    <div>
      <hr
        className={`${isAuthPage ? "mt-[1rem] border-gray-600 opacity-20 w-full shadow-lg" : "mt-8 border-gray-700 opacity-20 w-full shadow-lg"}`}
      />
    </div>
  );
};

export default HorizontalRule;
