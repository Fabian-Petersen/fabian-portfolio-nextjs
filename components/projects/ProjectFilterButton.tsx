"use client";

import { Button } from "../ui/button";
import useFilterItems from "@/app/customHooks/useFilterProjects";
import { useGlobalContext } from "@/useGlobalContext";
import projectsCardData from "@/public/data/projectData";
// import useFilterProjects from "@/app/customHooks/useFilterProjects";

type Props = {
  title: string;
  filterByValue: (value: string) => void;
};

function ProjectFilterButton({ title, filterByValue }: Props) {
  return (
    <Button
      onClick={() => filterByValue(title)}
      className="hover:bg-blue-400 capitalize"
      variant={"default"}
      size={"lg"}
    >
      {title}
    </Button>
  );
}

export default ProjectFilterButton;
