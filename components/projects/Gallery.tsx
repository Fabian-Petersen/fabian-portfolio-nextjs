"use client";

// $ The component display the grid of the individual projects.
// $ The data is imported from a separate file.
// $ The data is mapped to the ProjectsCard component.

import { ProjectCardDataType } from "@/public/data/projectData";
import ProjectsCard from "./ProjectsCard";

type GalleryProps = {
  items: ProjectCardDataType[];
};

const Gallery = ({ items }: GalleryProps) => {
  return (
    <section className="grid gap-6 grid-cols-gallery p-6">
      {items.map((item: ProjectCardDataType) => (
        <ProjectsCard key={item.id} {...item} />
      ))}
    </section>
  );
};

export default Gallery;
