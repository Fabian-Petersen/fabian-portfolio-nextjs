import skillsIconImages from "../icons/skill-icons/index";

// $ The Skills Icons Images comes from the index.ts file in the skill-icons folder
// $ The image links are imported from the index.ts file in the skill-icons folder and then used in the mySkillsData.ts file

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
} = skillsIconImages;

const mySkillsData = [
  {
    id: 1,
    language: "figma",
    iconImage: figma,
    category: "UI/UX Design",
    className: "figma",
  },
  {
    id: 2,
    language: "html",
    iconImage: html,
    category: "frontEnd",
    className: "html",
  },
  {
    id: 3,
    language: "css",
    iconImage: css,
    category: "frontEnd",
    className: "css",
  },
  {
    id: 4,
    language: "javascript",
    iconImage: javascript,
    category: "frontEnd",
    className: "javascript",
  },
  {
    id: 5,
    language: "react",
    iconImage: react,
    category: "frontEnd",
    className: "react",
  },
  {
    id: 6,
    language: "Supabase",
    iconImage: supabase,
    category: "backend",
    className: "api",
  },
  {
    id: 7,
    language: "next",
    iconImage: nextjs,
    category: "backend",
    className: "api",
  },
  {
    id: 8,
    language: "tailwind",
    iconImage: tailwind,
    category: "frontEnd",
    className: "api",
  },
  {
    id: 9,
    language: "github",
    iconImage: github,
    category: "other",
    className: "github",
  },
  {
    id: 10,
    language: "bootstrap",
    iconImage: bootstrap,
    category: "other",
    className: "bootstrap",
  },
  {
    id: 11,
    language: "visualstudiocode",
    iconImage: visualstudiocode,
    category: "other",
    className: "vsc",
  },
  {
    id: 12,
    language: "typescript",
    iconImage: typescript,
    category: "frontEnd",
    className: "typescript",
  },
];

export default mySkillsData;
