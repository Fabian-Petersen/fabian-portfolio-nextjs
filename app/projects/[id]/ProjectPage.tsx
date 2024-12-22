"use client";

import React from "react";
import PageSubHeading from "@/components/PageSubHeading";
import SkillCard from "@/components/about/SkillCard";
import mySkillsData from "@/public/data/mySkillsData";

import { useParams } from "next/navigation";
import { SkillsDataType } from "@/public/data/mySkillsData";

// $ import local data before fetching the data from the database
import { ProjectCardDataType } from "@/public/data/projectData";
import HorizontalRule from "@/components/features/HorizontalRule";

type ProjectPageProps = {
  projectsData: ProjectCardDataType[];
};

const ProjectPage: React.FC<ProjectPageProps> = ({ projectsData }) => {
  // $ Filter out the project data from the projectData file based on the title of the project in the url using the title of the project.
  const { id } = useParams();

  const project: ProjectCardDataType[] = projectsData.filter(
    (singleProject) => singleProject.id === id
  );

  // $ Array of Skills for each Project
  const projectSkills = project[0]?.singlePage.skills;
  const skillCards: SkillsDataType[] =
    projectSkills
      ?.map((item) => {
        const skill = mySkillsData.find((skill) => skill?.language === item);
        if (!skill) {
          console.warn(`No match found for: ${item}`);
          return null;
        }
        return skill;
      })
      .filter((skill): skill is SkillsDataType => skill !== null) || [];

  return (
    <main
      id="project"
      className="w-full bg-bgLight dark:bg-bgDark px-4 min-h-screen"
    >
      <div className="flex flex-col gap-6 items-start sm:px-[var(--all-pages-spacing)] px-[var(--all-pages-spacing-small) md:max-w-6xl mx-auto h-auto mt-[10rem] w-full">
        {project.map((section) => {
          const { title, aim, description, challenges, skills } =
            section.singlePage;
          return (
            <div
              key={section.id}
              className="flex flex-col items-start space-y-4 w-full"
            >
              <PageSubHeading
                title={`Project Title: ${title}`}
                size="h2"
                className="mb-2"
              />
              <HorizontalRule classname="border border-red-500 w-full" />
              <section className="flex flex-col space-y-2 items-start">
                <PageSubHeading title="Aim" size="h3" />
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {aim}
                </p>
              </section>
              <section className="flex flex-col space-y-2 items-start">
                <PageSubHeading title="description" size="h3" />
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {description}
                </p>
              </section>
              <section className="flex flex-col space-y-2 items-start">
                <PageSubHeading title="Challenges" size="h3" />
                <div className="flex flex-col gap-4 text-gray-600 dark:text-gray-300 leading-relaxed"></div>
              </section>
              <section className="flex flex-col space-y-2 items-start w-full">
                <PageSubHeading title="Stack used  in the Project" size="h3" />
                <div className="grid grid-cols-skillsGallery gap-4 place-items-start w-full">
                  {skillCards.map((item) => (
                    <SkillCard
                      key={item.id}
                      name={item.language}
                      image={item.iconImage}
                    />
                  ))}
                </div>
              </section>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default ProjectPage;
