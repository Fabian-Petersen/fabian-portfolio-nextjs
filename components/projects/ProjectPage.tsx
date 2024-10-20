import PageHeading from "@/components/PageHeading";
import Gallery from "@/components/projects/Gallery";
import ProjectFilterButtons from "./ProjectFilterButtonGroup";
import projectsCardData from "@/public/data/projectData";

// $ The relative positioning is set on the layout componet to apply to all the pages.

const ProjectsPage = () => {
  return (
    <main
      id="projects"
      className="w-full flex flex-col gap-8 px-6 md:max-w-6xl mx-auto min-h-screen"
    >
      <PageHeading title="Projects" />
      <ProjectFilterButtons />
      <Gallery />
    </main>
  );
};

export default ProjectsPage;
