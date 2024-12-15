import projectImages from "@/public/images/projectImages";
import skillsIconImages from "../icons/skill-icons";
import { v4 as uuidv4 } from "uuid";

export type ProjectCardDataType = {
  id?: string;
  projectTitle?: string;
  language?: string;
  category?: string;
  description?: string;
  image?: string;
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
    category: "front-end",
    description: "Everything you need to know about your favourite cocktail",
    image:
      "https://fabian-portfolio-project-images.s3.af-south-1.amazonaws.com/cocktail-project-screenshot.jpg",
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
    category: "front-end",
    description: "Search for your favoutrite user on the githubLink site",
    image:
      "https://fabian-portfolio-project-images.s3.af-south-1.amazonaws.com/github-users-project.svg",
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
    category: "front-end",
    description:
      "Search for your favoutrite destination and book with us for a memorable holiday.",
    image:
      "https://fabian-portfolio-project-images.s3.af-south-1.amazonaws.com/tours.jpg",
    websiteLink: "",
    githubLink: "https://githubLink.com/fabian-petersen/natours",
    singlePage: {
      title: "tours-project",
      aim: "Design a website that showcases the best tours in the world",
      description:
        "The project does not use any framework e.g. React. The project was created in in my early stages as a developer to learn vanilla sematic HTML, CSS (with SCSS) and JavaScript.",
      images: "",
      challenges:
        "In this project the biggest challenge was to create a responsive website that works on all devices.",
      skills: ["html", "css", "javascript"],
    },
  },
  {
    id: uuidv4(),
    projectTitle: "Tea Brewery",
    language: "react",
    category: "front-end",
    description: "The most exquisite tea range in the world",
    image:
      "https://fabian-portfolio-project-images.s3.af-south-1.amazonaws.com/tea.jpeg",
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
    category: "front-end",
    description: "Random e-commerce store for your favourite items",
    image:
      "https://fabian-portfolio-project-images.s3.af-south-1.amazonaws.com/comingSoon.jpg",
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
    category: "front-end",
    description:
      "Booking App for the department of transport - University of the Western Cape",
    image:
      "https://fabian-portfolio-project-images.s3.af-south-1.amazonaws.com/comingSoon.jpg",
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
    category: "back-end",
    description:
      " - Web Scraping App using AI to get the latest news and updates",
    image:
      "https://fabian-portfolio-project-images.s3.af-south-1.amazonaws.com/comingSoon.jpg",
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
    category: "DevOps",
    description: "",
    image:
      "https://fabian-portfolio-project-images.s3.af-south-1.amazonaws.com/comingSoon.jpg",
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

// from database
[
  {
    websiteLink: "",
    projectTitle: "comfy-sloth",
    image:
      "https://fabian-portfolio-project-images.s3.af-south-1.amazonaws.com/comingSoon.jpg",
    description: "Random e-commerce store for your favourite items.",
    id: "35b8b999-c388-4f9f-9674-a6670b3adb14",
    githubLink: "",
    category: "front-end",
    language: "react",
    singlePage: {
      skills: ["html", "css", "javascript", "react", "githubLink"],
      description:
        "This project showcases an e-commerce platform with dynamic pages.",
      images: "",
      title: "comfy-sloth-project",
      aim: "",
      challenges: "",
    },
  },
  {
    websiteLink: "",
    projectTitle: "Creative Tours",
    image:
      "https://fabian-portfolio-project-images.s3.af-south-1.amazonaws.com/tours.jpg",
    description:
      "Search for your favourite destination and book with us for a memorable holiday.",
    id: "ce80cbab-271d-4e4e-8462-04e6d43dcdef",
    githubLink: "https://githubLink.com/fabian-petersen/natours",
    category: "front-end",
    language: "javascript",
    singlePage: {
      skills: ["html", "css", "javascript"],
      description:
        "This project was created to practice vanilla HTML, CSS (with SCSS), and JavaScript.",
      images: "",
      title: "tours-project",
      aim: "",
      challenges: "",
    },
  },
  {
    websiteLink: "https://fabian-portfolio-cocktail-project.netlify.app",
    projectTitle: "cocktail library",
    image:
      "https://fabian-portfolio-project-images.s3.af-south-1.amazonaws.com/cocktail-project-screenshot.jpg",
    description: "Everything you need to know about your favourite cocktail",
    id: "ee936829-098e-4749-b460-be6562f2410e",
    githubLink: "https://githubLink.com/fabian-petersen/cocktail-api-project",
    category: "front-end",
    language: "react",
    singlePage: {
      skills: ["html", "css", "javascript", "react"],
      description:
        "In this project i used the xxxxxxxx API to get the information of the cocktails. The app render the cocktail information with each cocktail making use of a dynamic single page information about the cocktail you selected.",
      images: "",
      title: "cocktail-project",
      aim: "The aim of this project was to create a single page application that uses the cocktailDB API to get the information of the cocktails. The app render the cocktail information with each cocktail making use of a dynamic single page information about the cocktail you selected.",
      challenges: "",
    },
  },
  {
    websiteLink: "",
    projectTitle: "Burger Fast Food App",
    image:
      "https://fabian-portfolio-project-images.s3.af-south-1.amazonaws.com/comingSoon.jpg",
    description: "",
    id: "c395f8a5-cab5-4123-b078-0fcc0fa0634e",
    githubLink: "",
    category: "DevOps",
    language: "python",
    singlePage: {
      skills: ["terraform", "python", "aws", "githubLink"],
      description:
        "Demonstrates DevOps practices with a Python backend and AWS deployment via Terraform.",
      images: "",
      title: "burger-fast-foods",
      aim: "",
      challenges: "",
    },
  },
  {
    websiteLink: "https://tea-brewery.netlify.app/",
    projectTitle: "Tea Brewery",
    image:
      "https://fabian-portfolio-project-images.s3.af-south-1.amazonaws.com/tea.jpeg",
    description: "The most exquisite tea range in the world.",
    id: "087d68b9-0951-4bcc-934e-9d60be859765",
    githubLink: "https://githubLink.com/Fabian-Petersen/tea-shop-app",
    category: "front-end",
    language: "react",
    singlePage: {
      skills: ["html", "css", "javascript", "react"],
      description:
        "This is a React-based website with styled components and basic animations for a smooth user experience.",
      images: "",
      title: "tea-shop-project",
      aim: "",
      challenges: "",
    },
  },
  {
    websiteLink: "",
    projectTitle: "Web Scraping App",
    image:
      "https://fabian-portfolio-project-images.s3.af-south-1.amazonaws.com/comingSoon.jpg",
    description:
      "Web scraping app using AI to fetch the latest news and updates.",
    id: "a246d914-6663-44c6-bd07-beacddbbdc7d",
    githubLink: "",
    category: "back-end",
    language: "python",
    singlePage: {
      skills: ["streamlit", "python", "githubLink"],
      description:
        "Uses Python with BeautifulSoup4 and Selenium for scraping and AI for contextual updates.",
      images: "",
      title: "ai-web-scraping-project",
      aim: "",
      challenges: "",
    },
  },
  {
    websiteLink:
      "https://fabian-portfolio-react-githubLink-users.netlify.app/login",
    projectTitle: "githubLink Users",
    image:
      "https://fabian-portfolio-project-images.s3.af-south-1.amazonaws.com/github-users-project.svg",
    description: "Search for your favoutrite user on the githubLink site",
    id: "6fb5ccaf-171a-49ba-aa2b-cacee1f4930d",
    githubLink:
      "https://githubLink.com/fabian-petersen/react-githubLink-users-search-app.git",
    category: "front-end",
    language: "react",
    singlePage: {
      skills: ["html", "css", "javascript", "react"],
      description:
        "In this project i used the githubLink API to get the information of the users.",
      images: "",
      title: "github-users",
      aim: "",
      challenges: "",
    },
  },
  {
    websiteLink: "",
    projectTitle: "Vehicle Booking App",
    image:
      "https://fabian-portfolio-project-images.s3.af-south-1.amazonaws.com/comingSoon.jpg",
    description:
      "Booking App for the department of transport at the University of the Western Cape.",
    id: "5604fa98-584f-457b-b487-dc4a966d3c17",
    githubLink: "",
    category: "front-end",
    language: "react",
    singlePage: {
      skills: ["html", "css", "javascript", "react", "githubLink"],
      description:
        "Built with Supabase and PostgreSQL for efficient data management.",
      images: "",
      title: "uwc-logistics-project",
      aim: "",
      challenges: "",
    },
  },
];
