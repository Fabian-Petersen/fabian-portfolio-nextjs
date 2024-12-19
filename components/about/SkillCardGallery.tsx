import React from "react";
import AboutSkillsHeading from "./AboutSkillsHeading";
import mySkillsData from "@/public/data/mySkillsData";
import SkillCard from "./SkillCard";
import HorizontalRule from "../features/HorizontalRule";

// $ Hook which returns the unique list of categories in the mySkillsData array
import useCategoriesHeadingsHook from "./useCategoriesHeadingsHook";
// $ The uniqueCategories array is destructured from the returned object for the headings
const { uniqueCategories } = useCategoriesHeadingsHook();

const SkillCardGallery = () => {
  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      {uniqueCategories.map((category, index) => (
        <div className="h-auto" key={index}>
          <AboutSkillsHeading category={category} />
          <div className="grid grid-cols-skillsGallery gap-4 place-items-start">
            {mySkillsData
              .filter((item) => item.category === category)
              .map(({ id, language, iconImage }) => (
                <SkillCard key={id} name={language} image={iconImage} />
              ))}
          </div>
          {/* {

            <p>{uniqueCategories.language}</p>

          } */}

          {/* Conditionally render the <hr> if it is not the last child component. The child component will have no <hr /> after it */}
          {/* {index !== uniqueCategories.length - 1 && (
            <HorizontalRule classname="w-[75%] mx-auto opacity-15" />
          )} */}
        </div>
      ))}
    </div>
  );
};

export default SkillCardGallery;