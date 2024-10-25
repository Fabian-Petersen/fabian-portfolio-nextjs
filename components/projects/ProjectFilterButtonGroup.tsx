import ProjectFilterButton from "./ProjectFilterButton";

const ProjectFilterButtons = () => {
  return (
    <div className="flex gap-2 mx-auto w-[40%]">
      <ProjectFilterButton title="All" value="all" />
      <ProjectFilterButton title="Front End" value="front-end" />
      <ProjectFilterButton title="Cloud" value="cloud" />
    </div>
  );
};

export default ProjectFilterButtons;
