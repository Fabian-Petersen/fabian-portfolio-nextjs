import * as React from "react";
import PageHeading from "@/components/PageHeading";
import ProjectsBG from "@/public/backgroundSVG/Projects.BG";

// $ The relative positioning is set on the layout componet to apply to all the pages.

const ProjectsPage: React.FC = () => {
  return (
    <main className="">
      <div className="bg-cover bg-center absolute top-0 left-0 z-[-100] h-full w-full">
        <ProjectsBG />
      </div>
      <PageHeading title="Projects Page" />
    </main>
  );
};

export default ProjectsPage;
