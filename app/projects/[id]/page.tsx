"use client";
import PageHeading from "@/components/PageHeading";
import projectsCardData from "@/public/data/projectData";
import { useParams } from "next/navigation";
import PageSubHeading from "@/components/PageSubHeading";
import mySkillsData from "@/public/data/mySkillsData";
import SkillCard from "@/components/about/SkillCard";

const SingleProject = () => {
  const params = useParams();
  const id = params.id;

  const project = projectsCardData.find(
    (project) => project.singlePage?.title === id
  );

  console.log(project?.singlePage);

  // Filter out only the skills relevant to this single page
  const relevantSkills = mySkillsData.filter((skill) =>
    project?.singlePage?.skills?.includes(skill.language)
  );

  return (
    <main className="w-full flex flex-col gap-8 mt-2 md:max-w-5xl mx-auto min-h-screen">
      <PageHeading
        title={project?.singlePage?.title}
        variant="projectPage"
        className="mt-[8rem] mb-[3rem]"
      />
      <div className="flex flex-col gap-4 items-start">
        <div>
          <PageSubHeading
            title="Aim of the Project"
            size="h3"
            variant="variantSubHeading"
          />
          <p className="text-md tracking-wider leading-5">
            {project?.singlePage?.aim}
          </p>
        </div>
        <div>
          <PageSubHeading
            title="Description of the Project"
            size="h3"
            variant="variantSubHeading"
          />
          <p className="text-md tracking-wider leading-5">
            {project?.singlePage?.description}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <PageSubHeading title="Stack Used to Build the Project" size="h3" />
          <div className="flex flex-wrap justify-start items-center gap-4">
            {relevantSkills.map(({ id, language, iconImage }) => (
              <SkillCard
                key={id}
                name={language}
                image={iconImage?.toString() ?? ""}
              />
            ))}
          </div>
        </div>
        <div>
          <PageSubHeading
            title="Challenges"
            size="h3"
            variant="variantSubHeading"
          />
          <p className="text-md tracking-wider leading-5">
            {project?.singlePage?.challenges}
          </p>
        </div>
      </div>
    </main>
  );
};

export default SingleProject;
