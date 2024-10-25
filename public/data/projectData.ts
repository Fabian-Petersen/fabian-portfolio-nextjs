import projectImages from "@/public/images/projectImages";
import { StaticImageData } from "next/image";
import skillsIconImages from "../icons/skill-icons";
import { v4 as uuidv4 } from "uuid";

export type ProjectCardDataType = {
  id?: string;
  projectTitle?: string;
  language?: string;
  projectType?: string;
  description?: string;
  image?: StaticImageData;
  websiteLink?: string;
  githubLink?: string;
  singlePage?: {
    title: string;
    aim: string;
    description?: string;
    challenges: string;
    skills?: string[];
    images?: string;
  };
};

const { html, css, javascript, react, figma } = skillsIconImages;

const {
  teaProject,
  toursProject,
  comingSoon,
  cocktailsProject,
  githubProject,
  pendingProject,
} = projectImages;

const projectsCardData: ProjectCardDataType[] = [
  {
    id: uuidv4(),
    projectTitle: "cocktail library",
    language: "react",
    projectType: "front-end",
    description: "Everything you need to know about your favourite cocktail",
    image: cocktailsProject,
    websiteLink: "https://fabian-portfolio-cocktail-project.netlify.app",
    githubLink: "https://githubLink.com/fabian-petersen/cocktail-api-project",
    singlePage: {
      title: "cocktail-project",
      aim: "The aim of this project was to create a single page application that uses the cocktailDB API to get the information of the cocktails. The app render the cocktail information with each cocktail making use of a dynamic single page information about the cocktail you selected.",
      description:
        "In this project i used the xxxxxxxx API to get the information of the cocktails. The app render the cocktail information with each cocktail making use of a dynamic single page information about the cocktail you selected.",
      skills: ["html", "css", "javascript", "react"],
      images: "",
      challenges: "",
    },
  },
  {
    id: uuidv4(),
    projectTitle: "githubLink Users",
    language: "react",
    projectType: "front-end",
    description: "Search for your favoutrite user on the githubLink site",
    image: githubProject,
    websiteLink:
      "https://fabian-portfolio-react-githubLink-users.netlify.app/login",
    githubLink:
      "https://githubLink.com/fabian-petersen/react-githubLink-users-search-app.git",
    singlePage: {
      title: "github-users",
      aim: "",
      description:
        "In this project i used the githubLink API to get the information of the users.",
      images: "",
      skills: ["html", "css", "javascript", "react"],
      challenges: "",
    },
  },
  {
    id: uuidv4(),
    projectTitle: "Creative Tours",
    language: "javascript",
    projectType: "front-end",
    description:
      "Search for your favoutrite destination and book with us for a memorable holiday.",
    image: toursProject,
    websiteLink: "",
    githubLink: "https://githubLink.com/fabian-petersen/natours",
    singlePage: {
      title: "tours-project",
      aim: "",
      description:
        "The project does not use any framework e.g. React. The project was created in in my early stages as a developer to learn vanilla sematic HTML, CSS (with SCSS) and JavaScript.",
      images: "",
      challenges: "",
      skills: ["html", "css", "javascript"],
    },
  },
  {
    id: uuidv4(),
    projectTitle: "Tea Brewery",
    language: "react",
    projectType: "front-end",
    description: "The most exquisite tea range in the world",
    image: teaProject,
    websiteLink: "https://tea-brewery.netlify.app/",
    githubLink: "https://githubLink.com/Fabian-Petersen/tea-shop-app",
    singlePage: {
      title: "tea-shop-project",
      aim: "",
      description:
        "This is the first and most basic website I have build with React. All the data is stored within array objects and mapped over to display the different sections based on the hardgithubLinkd data. The css are done with styled components with fairly basic animations e.g. text movement in the X directions, object scaling and background image tranisioning over the product cards. The section id's was used to navigate bewteen the pages",
      images: "",
      challenges: "",
      skills: ["html", "css", "javascript", "react"],
    },
  },
  {
    id: uuidv4(),
    projectTitle: "comfy-sloth",
    language: "react",
    projectType: "front-end",
    description: "Random e-commerce store for your favourite items",
    image: pendingProject,
    websiteLink: "",
    githubLink: "",
    singlePage: {
      title: "comfy-sloth-project",
      aim: "",
      description:
        "In this project i used the xxxxxxxx API to get the information of the cocktails. The app render the cocktail information with each cocktail making use of a dynamic single page information about the cocktail you selected.",
      images: "",
      challenges: "",
      skills: ["html", "css", "javascript", "react", "githubLink"],
    },
  },
  {
    id: uuidv4(),
    projectTitle: "Vehicle Booking App",
    language: "react",
    projectType: "front-end",
    description:
      "Booking App for the department of transport - University of the Western Cape",
    image: pendingProject,
    websiteLink: "",
    githubLink: "",
    singlePage: {
      title: "uwc-logistics-project",
      aim: "",
      description:
        "In this project i used the Supabase Backend API with a PostgresSQL Database",
      images: "",
      challenges: "",
      skills: ["html", "css", "javascript", "react", "githubLink"],
    },
  },
  {
    id: uuidv4(),
    projectTitle: "Web Scraping App",
    language: "python",
    projectType: "back-end",
    description:
      " - Web Scraping App using AI to get the latest news and updates",
    image: pendingProject,
    websiteLink: "",
    githubLink: "",
    singlePage: {
      title: "ai-web-scraping-project",
      aim: "",
      description:
        "In this project i used the Python with the BeautifulSoup4 and Selenium libraries to scrape the web for the latest news and updates. The app uses a simple AI to get the latest news and updates.",
      images: "",
      challenges: "",
      skills: ["streamlit", "python", "githubLink"],
    },
  },
  {
    id: uuidv4(),
    projectTitle: "Burger Fast Food App",
    language: "python",
    projectType: "DevOps",
    description: "",
    image: pendingProject,
    websiteLink: "",
    githubLink: "",
    singlePage: {
      title: "Burger Fast Foods",
      aim: "",
      description:
        "In this project the best practices of devOps were used. The Front-End is build with HTML, CSS and JavaScript. The Back-End is build with Python and the app is deployed on AWS with the use of Terraform. The Front End is the work of a third party front-end developer from Youtube.",
      skills: ["terraform", "python", "aws", "githubLink"],
      challenges: "",
    },
  },
];

export default projectsCardData;
