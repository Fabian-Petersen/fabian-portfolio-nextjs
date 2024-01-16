import projectImages from "@/public/images/projectImages";
import { StaticImageData } from "next/image";
import skillsIconImages from "../icons/skill-icons";

export type ProjectCardDataType = {
  id?: number;
  projectTitle?: string;
  language?: string;
  description?: string;
  image?: StaticImageData;
  websiteLink?: string;
  githubLink?: string;
  singlePage?: {
    title: string;
    description?: string;
    images?: string;
    skills?: string[];
  };
};

const { html, css, javascript, react, figma } = skillsIconImages;

const {
  teaProject,
  toursProject,
  comingSoon,
  cocktailsProject,
  githubProject,
} = projectImages;

const projectsCardData: ProjectCardDataType[] = [
  {
    id: 1,
    projectTitle: "cocktail library",
    language: "react",
    description: "Everything you need to know about your favourite cocktail",
    image: cocktailsProject,
    websiteLink: "https://fabian-portfolio-cocktail-project.netlify.app",
    githubLink: "https://githubLink.com/fabian-petersen/cocktail-api-project",
    singlePage: {
      title: "cocktail-project",
      description:
        "In this project i used the xxxxxxxx API to get the information of the cocktails. The app render the cocktail information with each cocktail making use of a dynamic single page information about the cocktail you selected.",
      images: "",
      skills: [
        { html: html },
        { css: css },
        { javascript: javascript },
        { react: react },
      ],
    },
  },
  {
    id: 2,
    projectTitle: "githubLink Users",
    language: "react",
    description: "Search for your favoutrite user on the githubLink site",
    image: githubProject,
    websiteLink:
      "https://fabian-portfolio-react-githubLink-users.netlify.app/login",
    githubLink:
      "https://githubLink.com/fabian-petersen/react-githubLink-users-search-app.git",
    singlePage: {
      title: "github-users",
      description:
        "In this project i used the githubLink API to get the information of the users.",
      images: "",
      skills: ["html", "css", "javascript", "react"],
    },
  },
  {
    id: 3,
    projectTitle: "Creative Tours",
    language: "javascript",
    description:
      "Search for your favoutrite destination and book with us for a memorable holiday.",
    image: toursProject,
    websiteLink: "",
    githubLink: "https://githubLink.com/fabian-petersen/natours",
    singlePage: {
      title: "tours-project",
      description:
        "The project does not use any framework e.g. React. The project was created in in my early stages as a developer to learn vanilla sematic HTML, CSS (with SCSS) and JavaScript.",
      images: "",
      skills: ["html", "css", "javascript", "sass", "githubLink"],
    },
  },
  {
    id: 4,
    projectTitle: "Tea Brewery",
    language: "react",
    description: "The most exquisite tea range in the world",
    image: teaProject,
    websiteLink: "https://tea-brewery.netlify.app/",
    githubLink: "https://githubLink.com/Fabian-Petersen/tea-shop-app",
    singlePage: {
      title: "tea-shop-project",
      description:
        "This is the first and most basic website I have build with React. All the data is stored within array objects and mapped over to display the different sections based on the hardgithubLinkd data. The css are done with styled components with fairly basic animations e.g. text movement in the X directions, object scaling and background image tranisioning over the product cards. The section id's was used to navigate bewteen the pages",
      images: "",
      skills: ["html", "css", "javascript", "react"],
    },
  },
  {
    id: 5,
    projectTitle: "comfy-sloth",
    language: "react",
    description: "Random e-commerce store for your favourite items",
    image: comingSoon,
    websiteLink: "",
    githubLink: "",
    singlePage: {
      title: "comfy-sloth-project",
      description:
        "In this project i used the xxxxxxxx API to get the information of the cocktails. The app render the cocktail information with each cocktail making use of a dynamic single page information about the cocktail you selected.",
      images: "",
      skills: ["html", "css", "javascript", "react", "githubLink"],
    },
  },
  {
    id: 6,
    projectTitle: "Vehicle Booking App",
    language: "react",
    description:
      "Booking App for the department of transport - University of the Western Cape",
    image: comingSoon,
    websiteLink: "",
    githubLink: "",
    singlePage: {
      title: "uwc-logistics-project",
      description:
        "In this project i used the Supabase Backend API with a PostgresSQL Database",
      images: "",
      skills: ["html", "css", "javascript", "react", "githubLink"],
    },
  },
];

export default projectsCardData;
