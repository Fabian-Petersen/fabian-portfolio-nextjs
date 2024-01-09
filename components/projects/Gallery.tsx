// $ The component display the grid of the individual projects.
// $ The data is imported from a separate file.
// $ The data is mapped to the ProjectsCard component.

import projectsCardData from "@/public/data/projectData";
import ProjectsCard from "./ProjectsCard";

const Gallery = () => {
  return (
    <section className="grid gap-4 grid-cols-gallery p-6">
      {projectsCardData.map(
        ({ title, description, image, githubLink, websiteLink }) => (
          <ProjectsCard
            title={title}
            description={description}
            image={image}
            githubLink={githubLink}
            websiteLink={websiteLink}
          />
        )
      )}
    </section>
  );
};

export default Gallery;
