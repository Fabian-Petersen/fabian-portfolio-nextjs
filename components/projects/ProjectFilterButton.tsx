"use client";

import { Button } from "../ui/button";
import { useGlobalContext } from "@/useGlobalContext";
import projectsCardData from "@/public/data/projectData";
// import useFilterProjects from "@/app/customHooks/useFilterProjects";

type Props = {
  title: string;
  value: "all" | "front-end" | "cloud";
};

function ProjectFilterButton({ title, value }: Props) {
  const { setProjectType, projectType } = useGlobalContext();

  // $ const filteredProjects = useFilterProjects(projectsCardData, title);

  const handleClick = () => {
    // $ Clear the projectType before setting the new value
    setProjectType("");

    // Use a slight delay to ensure the state is cleared before updating it
    setTimeout(() => {
      setProjectType(projectType);
    }, 0);
  };

  return (
    <Button
      onClick={handleClick}
      className="hover:bg-gray-500 flex-1"
      variant={"default"}
      size={"lg"}
      value={value}
    >
      {title}
    </Button>
  );
}

export default ProjectFilterButton;
