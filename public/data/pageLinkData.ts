// { id: "https://fabian-portfolio.netlify.app/", name: "Home" }
import navIcons from "../icons/navIcons";
const { house, user, clipboard, phone } = navIcons;

export type PageLinksTypes = {
  id: number;
  sectionId: string;
  name: string;
  icon: string;
  tooltip_content: string;
};

const pageLinkData = [
  {
    id: 1,
    sectionId: "landing",
    name: "home",
    icon: house,
    tooltip_content: "home",
  },
  {
    id: 2,
    sectionId: "about",
    name: "about",
    icon: user,
    tooltip_content: "about",
  },
  {
    id: 3,
    sectionId: "projects",
    name: "projects",
    icon: clipboard,
    tooltip_content: "projects",
  },
  {
    id: 4,
    sectionId: "contact",
    name: "contact",
    icon: phone,
    tooltip_content: "contact",
  },
];

export default pageLinkData;
