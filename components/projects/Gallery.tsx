"use client";

// $ The component display the grid of the individual projects.
// $ The data is imported from a separate file.
// $ The data is mapped to the ProjectsCard component.

import projectsCardData from "@/public/data/projectData";
import ProjectsCard from "./ProjectsCard";
import useGlobalContext from "@/useGlobalContext";
import { useState } from "react";

const Gallery = () => {
  const [projectType, setProjectType] = useState<string>("all");
  // import the projectType and setProjectType from the useGlobalContext hook
  // const { projectType, setProjectType } = useGlobalContext();

  // const { projectType, setProjectType } = useGlobalContext();
  console.log("projectType:", projectType);

  return (
    <section className="grid gap-6 grid-cols-gallery p-6">
      {projectsCardData.map((projectProps) => (
        <ProjectsCard key={projectProps.id} {...projectProps} />
      ))}
    </section>
  );
};

export default Gallery;
