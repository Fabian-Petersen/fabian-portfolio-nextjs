"use client";

import React from "react";
import { useFetchItem } from "@/lib/reactQueryCutomHooks";
import ProjectPage from "./ProjectPage";

import { ProjectCardDataType } from "@/public/data/projectData";

// $ import local data before fetching the data from the database

const page = () => {
  // $ import database data from AWS
  const { data, isPending } = useFetchItem("projects");
  const projectsData: ProjectCardDataType[] = data ? JSON.parse(data.body) : [];

  // if (isPending) {
  //   return (
  //     <div className="grid grid-cols-1 w-full h-full place-content-center text-xl">
  //       Loading...
  //     </div>
  //   );
  // }

  return (
    <div>
      {isPending ? (
        <div className="grid grid-cols-1 w-full h-full place-content-center text-xl">
          Loading...
        </div>
      ) : (
        <ProjectPage projectsData={projectsData} />
      )}
    </div>
  );
};

export default page;
