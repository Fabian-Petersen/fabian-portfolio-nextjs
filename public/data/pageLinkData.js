// { id: "https://fabian-portfolio.netlify.app/", name: "Home" }
import navIcons from "../icons/navIcons";
const { house, user, clipboard, phone } = navIcons;

const links = [
  { id: 1, href: "/", name: "home", icon: house, tooltip_content: "home" },
  {
    id: 2,
    href: "/about",
    name: "about",
    icon: user,
    tooltip_content: "about",
  },
  {
    id: 3,
    href: "/projects",
    name: "projects",
    icon: clipboard,
    tooltip_content: "projects",
  },
  {
    id: 4,
    href: "/contact",
    name: "contact",
    icon: phone,
    tooltip_content: "contact",
  },
];

export default links;
