// { id: "https://fabian-portfolio.netlify.app/", name: "Home" }
import navIcons from "../icons/navIcons";
const { house, user, clipboard, phone } = navIcons;

const links = [
  { id: 1, href: "/", tooltip: "home", icon: house },
  { id: 2, href: "/about", tooltip: "about", icon: user },
  { id: 3, href: "/projects", tooltip: "projects", icon: clipboard },
  { id: 4, href: "/contact", tooltip: "contact", icon: phone },
];

export default links;
