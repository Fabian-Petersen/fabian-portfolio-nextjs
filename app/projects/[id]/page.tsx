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

  // Filter out only the skills relevant to this single page
  const relevantSkills = mySkillsData.filter((skill) =>
    project?.singlePage?.skills?.includes(skill.language)
  );

  return (
    <main className="w-full flex flex-col gap-8 mt-2 md:max-w-5xl mx-auto min-h-screen border border-red-500">
      <PageHeading title={project?.singlePage?.title} variant="projectPage" />
      <div className="border border-red-500 mr-auto">
        <PageSubHeading
          title="Aim of the Project"
          size="h3"
          variant="variantSubHeading"
        />
        <div>
          <p className="tracking-wider leading-5">
            {project?.singlePage?.description}
          </p>
        </div>
        <PageSubHeading title="Stack Used to Build the Project" size="h3" />
        <div className="flex flex-wrap gap-6 justify-center">
          {relevantSkills.map(({ id, language, iconImage }) => (
            <SkillCard
              key={id}
              name={language}
              image={iconImage?.toString() ?? ""}
            />
          ))}
        </div>
        <div>
          <PageSubHeading title={project?.singlePage?.challenges} size="h3" />
        </div>
      </div>
    </main>
  );
};

export default SingleProject;
