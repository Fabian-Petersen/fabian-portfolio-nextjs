// $ The component display the grid of the individual projects.
// $ The data is imported from a separate file.
// $ The data is mapped to the ProjectsCard component.

import projectsCardData from "@/public/data/projectData";
import ProjectsCard from "./ProjectsCard";

const Gallery = () => {
  return (
    <section className="grid gap-6 grid-cols-gallery p-6">
      {projectsCardData.map((projectProps) => (
        <ProjectsCard key={projectProps.id} {...projectProps} />
      ))}
    </section>
  );
};

export default Gallery;
