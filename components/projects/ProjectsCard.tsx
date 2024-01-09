import { StaticImageData } from "next/image";
import Image from "next/image";

type ProjectCardDataType = {
  title: string;
  description: string;
  image: StaticImageData;
  githubLink: string;
  websiteLink: string;
};

const ProjectsCard: React.FC<ProjectCardDataType> = ({
  title,
  description,
  image,
  githubLink,
  websiteLink,
}) => {
  return (
    <div className="w-full relative isolate h-[15rem] hover:shadow-md hover:shadow-gray-600 hover:translate-y-[-2px] mx-auto bg-gray-200 border border-gray-400 rounded-lg dark:bg-gray-800 dark:border-gray-700">
      <a
        className="text-white hover:cursor-pointer  before:absolute before:inset-0 before:opacity-10 before:z-[1] before:rounded-lg before:bg-gradient-to-r before:bg-black"
        href={websiteLink}
      >
        <Image className="rounded-lg h-full" src={image} alt="" />
      </a>
      <div className="absolute top-0 left-0 p-5">
        <a href={githubLink}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-400 dark:text-white capitalize">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-white dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectsCard;
