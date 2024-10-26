// import { } from "framer-motion;
import PageSubHeading from "../PageSubHeading";
import AboutSkillsHeading from "./AboutSkillsHeading";
import mySkillsData from "@/public/data/mySkillsData";
import SkillCard from "./SkillCard";
import HorizontalRule from "../features/HorizontalRule";

// $ Hook which returns the unique list of categories in the mySkillsData array
import useCategoriesHeadingsHook from "./useCategoriesHeadingsHook";
// $ The uniqueCategories array is destructured from the returned object for the headings
const { uniqueCategories } = useCategoriesHeadingsHook();
// $ The uniqueLanguages array is destructured from the returned object for the languages

const MySkills = () => {
  return (
    <article className="px-8 text-gray-600 dark:text-white">
      <PageSubHeading title="my skills" size="h3" />
      <div className="flex flex-col flex-wrap gap-6 lg:gap-12">
        {uniqueCategories.map((category, index) => (
          <div className="h-auto" key={index}>
            <AboutSkillsHeading category={category} />
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
              {mySkillsData
                .filter((item) => item.category === category)
                .map(({ id, language, iconImage }) => (
                  <SkillCard
                    key={id}
                    name={language}
                    image={iconImage?.toString() ?? ""}
                  />
                ))}
            </div>
            {/* Conditionally render the <hr> based on the index */}
            {index !== uniqueCategories.length - 1 && <HorizontalRule />}
          </div>
        ))}
      </div>
    </article>
  );
};

export default MySkills;
