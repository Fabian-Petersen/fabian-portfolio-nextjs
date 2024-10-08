import skillsIconImages from "../icons/skill-icons/index";
import { v4 as uuidv4 } from "uuid";

// $ The Skills Icons Images comes from the index.ts file in the skill-icons folder
// $ The image links are imported from the index.ts file in the skill-icons folder and then used in the mySkillsData.ts file

type MySkillsDataType = {
  id: string;
  language?: string;
  iconImage?: string | undefined;
  category?: string;
  className?: string;
  uuid?: string;
};

const {
  html,
  css,
  javascript,
  react,
  bootstrap,
  figma,
  visualstudiocode,
  nextjs,
  github,
  typescript,
  tailwind,
  aws,
} = skillsIconImages;

const mySkillsData: MySkillsDataType[] = [
  {
    id: uuidv4(),
    language: "figma",
    iconImage: figma,
    category: "UI/UX Design",
    className: "figma",
  },
  {
    id: uuidv4(),
    language: "html",
    iconImage: html,
    category: "frontEnd",
    className: "html",
  },
  {
    id: uuidv4(),
    language: "CSS",
    iconImage: css,
    category: "frontEnd",
    className: "css",
  },
  {
    id: uuidv4(),
    language: "javascript",
    iconImage: javascript,
    category: "frontEnd",
    className: "javascript",
  },
  {
    id: uuidv4(),
    language: "react",
    iconImage: react,
    category: "frontEnd",
    className: "react",
  },
  {
    id: uuidv4(),
    language: "Supabase",
    iconImage: "",
    category: "backend",
    className: "api",
  },
  {
    id: uuidv4(),
    language: "next",
    iconImage: nextjs,
    category: "frontEnd",
    className: "api",
  },
  {
    id: uuidv4(),
    language: "AWS",
    iconImage: aws,
    category: "cloud computing",
    className: "aws",
  },
  {
    id: uuidv4(),
    language: "tailwind",
    iconImage: tailwind,
    category: "frontEnd",
    className: "api",
  },
  {
    id: uuidv4(),
    language: "github",
    iconImage: github,
    category: "other",
    className: "github",
  },
  {
    id: uuidv4(),
    language: "bootstrap",
    iconImage: bootstrap,
    category: "other",
    className: "bootstrap",
  },
  {
    id: uuidv4(),
    language: "visual studio code",
    iconImage: visualstudiocode,
    category: "other",
    className: "vsc",
  },
  {
    id: uuidv4(),
    language: "typescript",
    iconImage: typescript,
    category: "frontEnd",
    className: "typescript",
  },
];

export default mySkillsData;
