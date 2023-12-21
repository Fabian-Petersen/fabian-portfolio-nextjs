// $ This hook takes in the skills data and return the unique list of skills in the dataset

import mySkillsData from "../../public/data/mySkillsData";

const useSingleCategoriesHook = () => {
  const uniqueCategories = [
    ...new Set(mySkillsData.map((item) => item.category)),
  ];

  return { uniqueCategories };
};

export default useSingleCategoriesHook;
