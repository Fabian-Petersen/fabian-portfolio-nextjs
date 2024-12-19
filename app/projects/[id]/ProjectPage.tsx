"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHeading from "@/components/PageHeading";
import PageSubHeading from "@/components/PageSubHeading";
import Header from "@/components/header/Header";
import ScrollAnimation from "@/app/animations/ScrollAnimation";
import SkillCard from "@/components/about/SkillCard";
import { ProjectCardDataType } from "@/public/data/projectData";
import { SkillsDataType } from "@/public/data/mySkillsData";

// $ import local data before fetching the data from the database
import projectData from "@/public/data/projectData";

type ProjectPageProps = {
  project: ProjectCardDataType;
  projectSkills: SkillsDataType[] | [];
};

const ProjectPage = ({ project, projectSkills }: ProjectPageProps) => {
  const router = useRouter();

  return (
    <main className="min-h-screen w-full bg-white  dark:bg-gray-900">
      <Header />
      <div className="pt-24 px-6 max-w-6xl mx-auto">
        {/* Back Button */}
        <Button
          onClick={() => router.push("/")}
          variant="ghost"
          className="mb-8 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Button>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Title Section */}
          {/* <ScrollAnimation
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          > */}
          <PageHeading title={project?.projectTitle} variant="projectPage" />
          {/* </ScrollAnimation> */}

          {/* Aim Section */}
          <section className="space-y-4">
            <PageSubHeading title="Project Aim" size="h3" />
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {project?.singlePage?.aim}
            </p>
          </section>

          {/* Description Section */}
          <section className="space-y-4">
            <PageSubHeading title="Project Description" size="h3" />
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {project?.description}
            </p>
          </section>

          {/* Challenges Section */}
          <section className="space-y-4">
            <PageSubHeading title="Challenges & Solutions" size="h3" />
            <div className="space-y-4">
              {project?.singlePage?.challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <p className="text-gray-600 dark:text-gray-300">
                    {challenge}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Project Stack Section */}
          <section className="space-y-6">
            <PageSubHeading title="Project Stack" size="h3" />
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
              {projectSkills.map((tech) => (
                <SkillCard
                  key={tech.id}
                  name={tech.language}
                  image={tech.iconImage}
                />
              ))}
            </div>
          </section>

          {/* Backend Section */}
          <section className="space-y-8">
            <PageSubHeading title="Backend Architecture" size="h3" />

            {/* Security Section */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                Security Features
              </h4>
              {/* <div className="grid gap-4 md:grid-cols-2">
                {project.security.map((feature) => (
                  <div
                    key={feature.id}
                    className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <h5 className="font-medium text-gray-700 dark:text-gray-200 mb-2">
                      {feature.title}
                    </h5>
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div> */}
            </div>

            {/* Database Section */}
            {/* <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                Database Architecture
              </h4>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h5 className="font-medium text-gray-700 dark:text-gray-200 mb-2">
                  {project.database.type}
                </h5>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.database.description}
                </p>
                <ul className="list-disc list-inside space-y-2">
                  {project.database.features.map((feature, index) => (
                    <li
                      key={index}
                      className="text-gray-600 dark:text-gray-300"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}
          </section>
        </div>
      </div>
    </main>
  );
};

export default ProjectPage;
