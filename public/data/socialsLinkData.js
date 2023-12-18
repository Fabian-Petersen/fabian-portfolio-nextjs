// npm install react-icons --save
import facebook from "@/public/icons/icons8-facebook.svg";
import twitter from "@/public/icons/icons8-twitter.svg";
import linkedin from "@/public/icons/icons8-linkedin.svg";
import github from "@/public/icons/icons8-github.svg";
const socialLinks = [
  {
    id: 1,
    href: "facebook",
    tooltip: "facebook",
    iconImage: facebook,
    color: "#3b5998",
    colorClass: "facebookColor",
    animationClass: "animate-facebookOpenAnimation",
    animationCloseClass: "animate-facebookCloseAnimation socialIconStyles",
  },
  {
    id: 2,
    href: "/twitter",
    tooltip: "twitter",
    iconImage: twitter,
    color: "#1da1f2",
    colorClass: "twitterColor",
    animationClass: "animate-twitterOpenAnimation",
    animationCloseClass: "animate-twitterCloseAnimation socialIconStyles",
  },
  {
    id: 3,
    href: "/linkedin",
    tooltip: "linkedin",
    iconImage: linkedin,
    color: "#0077b5",
    colorClass: "linkedinColor",
    animationClass: "animate-linkedInOpenAnimation",
    animationCloseClass: "animate-linkedInCloseAnimation socialIconStyles",
  },
  {
    id: 4,
    href: "/github",
    tooltip: "github",
    iconImage: github,
    color: "#333",
    colorClass: "githubColor",
    animationClass: "animate-gitHubOpenAnimation",
    animationCloseClass: "animate-gitHubCloseAnimation socialIconStyles",
  },
];

export default socialLinks;
