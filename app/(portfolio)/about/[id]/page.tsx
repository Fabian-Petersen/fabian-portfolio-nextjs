// $ This page render extra detail of each language in my skills set

"use client";
import PageHeading from "@/components/PageHeading";
import mySkillsData from "@/public/data/mySkillsData";
import { useParams } from "next/navigation";
import PageSubHeading from "@/components/PageSubHeading";

const SingleProject = () => {
  const params = useParams();
  const id = params.id;
  const title = mySkillsData.find((item) => item.language === id)?.language;

  return (
    <main className="w-full flex flex-col gap-8 px-6 md:max-w-6xl mx-auto min-h-screen capitalize">
      <PageHeading title={title} />
    </main>
  );
};

export default SingleProject;
