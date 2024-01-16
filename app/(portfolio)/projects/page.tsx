import PageHeading from "@/components/PageHeading";
import Gallery from "@/components/projects/Gallery";

// $ The relative positioning is set on the layout componet to apply to all the pages.

const ProjectsPage = () => {
  return (
    <main className="w-full px-6 md:max-w-6xl mx-auto min-h-screen">
      <PageHeading title="My Projects" />
      <Gallery />
    </main>
  );
};

export default ProjectsPage;
