import React from "react";
import mySkillsData from "@/public/data/mySkillsData";
import Image from "next/image";
import useSingleCategoriesHook from "./useCategoriesHeadingsHook";

const LanguageListRow = () => {
  //   const iconImage: HTMLImageElement = mySkillsData[3];

  return (
    <div className="flex gap-4">
      {/* <Image src={iconImage} alt="iconImage.name" /> */}
    </div>
  );
};

export default LanguageListRow;
