// $ The hook useFilterProjects.ts is used to filter the projects by projectType to display the unique projects in the gallery component.

// $ Import the type ProjectCardDataType from "@/public/data/projectData";
import { ProjectCardDataType } from "@/public/data/projectData";
import { useGlobalContext } from "@/useGlobalContext";

const useFilterProjects = () => {
  const { projectType } = useGlobalContext();
  console.log("projectType", projectType);
};
