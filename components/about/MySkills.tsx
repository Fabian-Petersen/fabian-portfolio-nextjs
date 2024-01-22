// import { } from "framer-motion;
import PageSubHeading from "../PageSubHeading";
import AboutSkillsHeading from "./AboutSkillsHeading";
import LanguageListRow from "./LanguageListRow";
import mySkillsData from "@/public/data/mySkillsData";
import SkillCard from "./SkillCard";

// $ Hook which returns the unique list of categories in the mySkillsData array
import useCategoriesHeadingsHook from "./useCategoriesHeadingsHook";
import { link } from "fs";
// $ The uniqueCategories array is destructured from the returned object for the headings
const { uniqueCategories } = useCategoriesHeadingsHook();
// $ The uniqueLanguages array is destructured from the returned object for the languages

const MySkills = () => {
  return (
    <article className="px-8 text-gray-600 dark:text-white">
      <PageSubHeading title="my skills" size="h3" />
      <div className="flex flex-col flex-wrap gap-6 lg:gap-12">
        {uniqueCategories.map((category, index) => (
          <div className="" key={index}>
            <AboutSkillsHeading category={category} />
            <div className="flex gap-[4rem]">
              {mySkillsData
                .filter((item) => item.category === category)
                .map(({ id, language, iconImage, link }) => (
                  <SkillCard
                    key={id}
                    name={language}
                    link={link}
                    image={iconImage?.toString() ?? ""}
                  />
                ))}
            </div>
            <hr className="mt-8 border-gray-700 opacity-20 w-[80%] shadow-lg" />
          </div>
        ))}
      </div>
    </article>
  );
};

export default MySkills;
