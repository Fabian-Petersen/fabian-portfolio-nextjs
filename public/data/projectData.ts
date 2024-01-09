import projectImages from "@/public/images/projectImages";
import { StaticImageData } from "next/image";

type ProjectCardDataType = {
  id: number;
  title: string;
  language: string;
  description: string;
  image: StaticImageData;
  websiteLink: string;
  githubLink: string;
  singlePage: {
    description: string;
    images: string;
    skills: string[];
  };
};

const { teaProject, tours, comingSoon, cockTails } = projectImages;

const projectsCardData: ProjectCardDataType[] = [
  {
    id: 1,
    title: "cocktail library",
    language: "react",
    description: "Everything you need to know about your favourite cocktail",
    image: cockTails,
    websiteLink: "https://fabian-portfolio-cocktail-project.netlify.app",
    githubLink: "https://githubLink.com/fabian-petersen/cocktail-api-project",
    singlePage: {
      description:
        "In this project i used the xxxxxxxx API to get the information of the cocktails. The app render the cocktail information with each cocktail making use of a dynamic single page information about the cocktail you selected.",
      images: "",
      skills: ["html", "css", "javascript", "react", "githubLink"],
    },
  },
  {
    id: 2,
    title: "githubLink Users",
    language: "react",
    description:
      "Search for your favoutrite user on the githubLink site. The app make use of the githubLink API to search the users in the database",
    image: comingSoon,
    websiteLink:
      "https://fabian-portfolio-react-githubLink-users.netlify.app/login",
    githubLink:
      "https://githubLink.com/fabian-petersen/react-githubLink-users-search-app.git",
    singlePage: {
      description:
        "In this project i used the githubLink API to get the information of the users.",
      images: "",
      skills: ["html", "css", "javascript", "react"],
    },
  },
  {
    id: 3,
    title: "Creative Tours",
    language: "javascript",
    description:
      "Search for your favoutrite destination and book with us for a memorable holiday.",
    image: tours,
    websiteLink: "",
    githubLink: "https://githubLink.com/fabian-petersen/natours",
    singlePage: {
      description:
        "The project does not use any framework e.g. React. The project was created in in my early stages as a developer to learn vanilla sematic HTML, CSS (with SCSS) and JavaScript.",
      images: "",
      skills: ["html", "css", "javascript", "sass", "githubLink"],
    },
  },
  {
    id: 4,
    title: "Tea Brewery",
    language: "react",
    description: "The most exquisite tea range in the world",
    image: teaProject,
    websiteLink: "https://tea-brewery.netlify.app/",
    githubLink: "https://githubLink.com/Fabian-Petersen/tea-shop-app",
    singlePage: {
      description:
        "This is the first and most basic website I have build with React. All the data is stored within array objects and mapped over to display the different sections based on the hardgithubLinkd data. The css are done with styled components with fairly basic animations e.g. text movement in the X directions, object scaling and background image tranisioning over the product cards. The section id's was used to navigate bewteen the pages",
      images: "",
      skills: ["html", "css", "javascript", "react", "githubLink"],
    },
  },
  {
    id: 5,
    title: "comfy-sloth",
    language: "react",
    description: "Random e-commerce store for your favourite items",
    image: comingSoon,
    websiteLink: "",
    githubLink: "",
    singlePage: {
      description:
        "In this project i used the xxxxxxxx API to get the information of the cocktails. The app render the cocktail information with each cocktail making use of a dynamic single page information about the cocktail you selected.",
      images: "",
      skills: ["html", "css", "javascript", "react", "githubLink"],
    },
  },
  {
    id: 6,
    title: "Weather App",
    language: "javascript",
    description: "Weather App using Javascript and the OpenWeather API",
    image: comingSoon,
    websiteLink: "",
    githubLink: "",
    singlePage: {
      description:
        "In this project i used the xxxxxxxx API to get the information of the cocktails. The app render the cocktail information with each cocktail making use of a dynamic single page information about the cocktail you selected.",
      images: "",
      skills: ["html", "css", "javascript", "react", "githubLink"],
    },
  },
  {
    id: 7,
    title: "Calculator",
    language: "javascript",
    description: "Build a calculator using Javascript",
    image: comingSoon,
    websiteLink: "",
    githubLink: "",
    singlePage: {
      description:
        "In this project i used the xxxxxxxx API to get the information of the cocktails. The app render the cocktail information with each cocktail making use of a dynamic single page information about the cocktail you selected.",
      images: "",
      skills: ["html", "css", "javascript", "githubLink"],
    },
  },
  {
    id: 8,
    title: "Vehicle Booking App",
    language: "react",
    description:
      "Booking App for the department of transport - University of the Western Cape",
    image: comingSoon,
    websiteLink: "",
    githubLink: "",
    singlePage: {
      description:
        "In this project i used the Supabase Backend API with a PostgresSQL Database",
      images: "",
      skills: ["html", "css", "javascript", "react", "githubLink"],
    },
  },
];

export default projectsCardData;
