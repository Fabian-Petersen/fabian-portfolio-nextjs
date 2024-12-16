"use client";
import ProjectFilterButton from "./ProjectFilterButton";

type Props = {
  uniqueItems: (string | "all")[];
  filterByValue: (value: string | "all") => void;
};

const ProjectFilterButtons = ({ uniqueItems, filterByValue }: Props) => {
  return (
    <div className="flex gap-2 mx-auto w-[40%]">
      {uniqueItems.map((item, index) => (
        <ProjectFilterButton
          key={index}
          title={item}
          filterByValue={() => filterByValue(item)}
        />
      ))}
    </div>
  );
};

export default ProjectFilterButtons;
