"use client";

// $ The component display the grid of the individual projects.
// $ The data is imported from a separate file.
// $ The data is mapped to the ProjectsCard component.

import projectsCardData, {
  ProjectCardDataType,
} from "@/public/data/projectData";
import ProjectsCard from "./ProjectsCard";
import { useFetchItem } from "@/lib/reactQueryCutomHooks";
import LoadingSpinner from "../features/LoadingSpinner";

type GalleryProps = {
  items: ProjectCardDataType[];
};

const Gallery = ({ items }: GalleryProps) => {
  console.log("items", items);

  return (
    <>
      {/* {isPending ? (
        <LoadingSpinner />
        ) : ( */}
      <section className="grid gap-6 grid-cols-gallery p-6 border border-red-500">
        {items.map((item: ProjectCardDataType) => (
          <ProjectsCard key={item.id} {...item} />
        ))}
      </section>
      {/* )} */}
    </>
  );
};

export default Gallery;
// const { data, isError, isPending } = useFetchItem("projects");
// const projects = data ? JSON.parse(data.body) : [];
// if (isError) {
//   return <p style={{ marginTop: "1rem " }}>There was an error...</p>;
// }
