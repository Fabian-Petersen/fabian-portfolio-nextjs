import * as React from "react";
import PageHeading from "@/components/PageHeading";
import ProjectsBGHex from "@/public/backgroundHexSVG/ProjectsBGHex";
import Gallery from "@/components/projects/Gallery";

// $ The relative positioning is set on the layout componet to apply to all the pages.

const ProjectsPage: React.FC = () => {
  return (
    <main>
      <PageHeading title="My Projects" />
      <Gallery />
    </main>
  );
};

export default ProjectsPage;
