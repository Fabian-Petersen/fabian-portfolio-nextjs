"use client";
import ProjectFilterButton from "./ProjectFilterButton";
import projects from "@/public/data/projectData";
import { ProjectCardDataType } from "@/public/data/projectData";
import useFilterItems from "@/app/customHooks/useFilterProjects";
import { useFetchItem } from "@/lib/reactQueryCutomHooks";

type Props = {
  uniqueItems: (string | "all")[];
  filterByValue: (value: string | "all") => void;
};

const ProjectFilterButtons = ({ uniqueItems, filterByValue }: Props) => {
  // const { data } = useFetchItem("projects");
  // const projects = data ? JSON.parse(data.body) : [];

  return (
    <div className="flex gap-2 mx-auto w-[40%]">
      {uniqueItems.map((item, index) => (
        <ProjectFilterButton
          key={index}
          title={String(item)}
          filterByValue={() => filterByValue(item)}
        />
      ))}
    </div>
  );
};

export default ProjectFilterButtons;
