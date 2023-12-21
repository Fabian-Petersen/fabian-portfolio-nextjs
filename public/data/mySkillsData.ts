import skillsIconImages from "../icons/skill-icons/index";

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
    iconImage: javascript.src,
    category: "frontEnd",
    className: "javascript",
  },
  {
    id: 5,
    language: "react",
    iconImage: react.src,
    category: "frontEnd",
    className: "react",
  },
  {
    id: 6,
    language: "Supabase",
    iconImage: supabase.src,
    category: "backend",
    className: "api",
  },
  {
    id: 7,
    language: "next",
    iconImage: nextjs.src,
    category: "UI/UX Design",
    className: "api",
  },
  {
    id: 8,
    language: "tailwind",
    iconImage: tailwind.src,
    category: "frontEnd",
    className: "api",
  },
  {
    id: 9,
    language: "github",
    iconImage: github.src,
    category: "other",
    className: "github",
  },
  {
    id: 10,
    language: "bootstrap",
    iconImage: bootstrap.src,
    category: "other",
    className: "bootstrap",
  },
  {
    id: 11,
    language: "visualstudiocode",
    iconImage: visualstudiocode.src,
    category: "other",
    className: "vsc",
  },
];

export default mySkillsData;
