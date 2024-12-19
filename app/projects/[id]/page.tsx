"use client";

import React from "react";
import { useFetchItem } from "@/lib/reactQueryCutomHooks";
import ProjectPage from "./ProjectPage";

// $ Import Types
import { SkillsDataType } from "@/public/data/mySkillsData";
import { ProjectCardDataType } from "@/public/data/projectData";

// $ import local data before fetching the data from the database
import projectData from "@/public/data/projectData";
import mySkillsData from "@/public/data/mySkillsData";

import { useParams } from "next/navigation";

const page = () => {
  // $ Get the Project ID from the URL
  const { id } = useParams();

  // $ Get the local Data
  const project = projectData?.find((item) => item?.singlePage?.title === id);

  // $ Array of Skills for each Project
  const projectSkills = project?.singlePage?.skills;

  const skillCards = projectSkills?.map((item) => {
    const skill = mySkillsData?.find((skill) => skill?.language === item);
    if (!skill) console.warn(`No match found for: ${item}`);
    return skill;
  });

  console.log(skillCards);

  // $ Get the Projects Data from the Server
  // const { data } = useFetchItem("projects");
  // const project: ProjectCardDataType[] = data ? JSON.parse(data.body) : [];
  return (
    <div>
      <ProjectPage project={project} projectSkills={projectSkills} />
    </div>
  );
};

export default page;
