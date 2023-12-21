// import { } from "framer-motion;
import PageSubHeading from "../PageSubHeading";
import AboutSkillsHeading from "./AboutSkillsHeading";
import LanguageListRow from "./LanguageListRow";
import mySkillsData from "@/public/data/mySkillsData";

// $ Hook which returns the unique list of categories in the mySkillsData array
// import useSingleCategoriesHook from "./useSingleCategoriesHook";
// import useCategoryLanguageList from "./useCategoryLanguageList";
// const { uniqueCategories } = useSingleCategoriesHook();
// const { flteredLanguageList } = useCategoryLanguageList("frontEnd");

// console.log(flteredLanguageList);

// const [
//   skillsParentContainer,
//   skillsChildContainer,z
//   skillsHeading,
//   headingMySkills,
//   lineVariant,
// ] = aboutVariants;

const MySkills = () => {
  const iconImage: HTMLImageElement = mySkillsData[3].iconImage;
  return (
    <div>
      <article className="px-8 text-gray-600 dark:text-white">
        <PageSubHeading title="my skills" size="h3" />
        <div className="flex flex-col gap-8">
          {/* {uniqueCategories.map((category, index) => (
            <AboutSkillsHeading key={index} category={category} />
          ))} */}
        </div>
        {/* <LanguageListRow figma={iconImage} /> */}
      </article>
    </div>
  );
};

export default MySkills;
