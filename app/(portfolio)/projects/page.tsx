import PageHeading from "@/components/PageHeading";
import Gallery from "@/components/projects/Gallery";

// $ The relative positioning is set on the layout componet to apply to all the pages.

const ProjectsPage = () => {
  return (
    <main className="w-full flex flex-col gap-8 px-6 md:max-w-6xl mx-auto min-h-screen">
      <PageHeading title="Projects Gallery" />
      <Gallery />
    </main>
  );
};

export default ProjectsPage;
