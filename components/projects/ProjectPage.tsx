"use client";

import PageHeading from "@/components/PageHeading";
import Gallery from "@/components/projects/Gallery";
import ProjectFilterButtons from "./ProjectFilterButtons";
import projectsCardData from "@/public/data/projectData";
import { ProjectCardDataType } from "@/public/data/projectData";
import useFilterItems from "@/app/customHooks/useFilterProjects";
import { useFetchItem } from "@/lib/reactQueryCutomHooks";

// $ The relative positioning is set on the layout componet to apply to all the pages.

const ProjectsPage = () => {
  // Data from the database is fetched using the useFetchItem hook.
  const { data } = useFetchItem("projects");
  const projects = data ? JSON.parse(data.body) : [];
  // console.log("projects", projects);

  if (projects.lenght === 0) {
    return;
  }

  const { items, uniqueItems, filterByValue } = useFilterItems<
    ProjectCardDataType,
    "category"
  >(projects, "category");
  return (
    <main
      id="projects"
      className="w-full flex flex-col gap-8 px-6 md:max-w-6xl mx-auto min-h-screen"
    >
      <PageHeading title="Projects" />
      <ProjectFilterButtons
        uniqueItems={uniqueItems.filter(
          (item): item is string => item !== undefined
        )}
        filterByValue={filterByValue}
      />
      <Gallery items={items} />
    </main>
  );
};

export default ProjectsPage;
