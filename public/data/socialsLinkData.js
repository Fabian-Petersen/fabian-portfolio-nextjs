import brandIcons from "../icons/brandIcons";
const { facebook, linkedin, github, twitter } = brandIcons;

const socialLinks = [
  {
    id: 1,
    href: "facebook",
    tooltip: "facebook",
    icon: facebook,
    iconColor: "facebookColor",
    animationClass: "animate-facebookOpenAnimation",
    animationCloseClass: "animate-facebookCloseAnimation socialIconStyles",
  },
  {
    id: 2,
    href: "/twitter",
    tooltip: "twitter",
    icon: twitter,
    iconColor: "twitterColor",
    animationClass: "animate-twitterOpenAnimation",
    animationCloseClass: "animate-twitterCloseAnimation socialIconStyles",
  },
  {
    id: 3,
    href: "/linkedin",
    tooltip: "linkedin",
    icon: linkedin,
    iconColor: "linkedInColor",
    animationClass: "animate-linkedInOpenAnimation",
    animationCloseClass: "animate-linkedInCloseAnimation socialIconStyles",
  },
  {
    id: 4,
    href: "/github",
    tooltip: "github",
    icon: github,
    iconColor: "gitHubColor",
    animationClass: "animate-gitHubOpenAnimation",
    animationCloseClass: "animate-gitHubCloseAnimation socialIconStyles",
  },
];

export default socialLinks;
