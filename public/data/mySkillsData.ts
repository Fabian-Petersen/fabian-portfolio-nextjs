import { StaticImageData } from "next/image";
import skillsIconImages from "../icons/skill-icons/index";

// $ The Skills Icons Images comes from the index.ts file in the skill-icons folder
// $ The image links are imported from the index.ts file in the skill-icons folder and then used in the mySkillsData.ts file

type MySkillsDataType = {
  id?: number;
  language?: string;
  iconImage?: string | undefined;
  category?: string;
  className?: string;
  link?: string;
};

const {
  html,
  css,
  javascript,
  react,
  bootstrap,
  figma,
  visualstudiocode,
  supabase,
  nextjs,
  github,
  typescript,
  tailwind,
  aws,
} = skillsIconImages;

const mySkillsData: MySkillsDataType[] = [
  {
    id: 1,
    language: "figma",
    iconImage: figma,
    category: "UI/UX Design",
    className: "figma",
    link: "/figma",
  },
  {
    id: 2,
    language: "html",
    iconImage: html,
    category: "frontEnd",
    className: "html",
    link: "/html",
  },
  {
    id: 3,
    language: "CSS",
    iconImage: css,
    category: "frontEnd",
    className: "css",
    link: "/css",
  },
  {
    id: 4,
    language: "javascript",
    iconImage: javascript,
    category: "frontEnd",
    className: "javascript",
    link: "/javascript",
  },
  {
    id: 5,
    language: "react",
    iconImage: react,
    category: "frontEnd",
    className: "react",
    link: "/react",
  },
  {
    id: 6,
    language: "Supabase",
    iconImage: "",
    category: "backend",
    className: "api",
    link: "/supabase",
  },
  {
    id: 7,
    language: "next",
    iconImage: nextjs,
    category: "frontEnd",
    className: "api",
  },
  {
    id: 8,
    language: "AWS",
    iconImage: aws,
    category: "cloud computing",
    className: "aws",
    link: "/aws",
  },
  {
    id: 9,
    language: "tailwind",
    iconImage: tailwind,
    category: "frontEnd",
    className: "api",
    link: "/tailwind",
  },
  {
    id: 10,
    language: "github",
    iconImage: github,
    category: "other",
    className: "github",
    link: "/github",
  },
  {
    id: 11,
    language: "bootstrap",
    iconImage: bootstrap,
    category: "other",
    className: "bootstrap",
    link: "/bootstrap",
  },
  {
    id: 12,
    language: "visual studio code",
    iconImage: visualstudiocode,
    category: "other",
    className: "vsc",
    link: "/vsc",
  },
  {
    id: 13,
    language: "typescript",
    iconImage: typescript,
    category: "frontEnd",
    className: "typescript",
    link: "/typescript",
  },
];

export default mySkillsData;
