import React from "react";

type HorizontalRuleProps = {
  variant?: "default" | "auth-pages";
  classname?: string;
};

const HorizontalRule = ({ variant, classname = "" }: HorizontalRuleProps) => {
  const isAuthPage = variant === "auth-pages";

  return (
    <div>
      <hr
        className={`${isAuthPage ? "h-1 mt-[1rem] border-gray-600 opacity-20 w-full shadow-lg" : `${classname} mt-8 border-gray-700 opacity-50 w-full shadow-lg`}`}
      />
    </div>
  );
};

export default HorizontalRule;
