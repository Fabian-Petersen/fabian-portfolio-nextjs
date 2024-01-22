"use client";
import PageHeading from "@/components/PageHeading";
import projectsCardData from "@/public/data/projectData";
import { useParams } from "next/navigation";
import PageSubHeading from "@/components/PageSubHeading";

const SingleProject = () => {
  const params = useParams();
  const id = params.id;
  const project = projectsCardData.find(
    (project) => project.singlePage?.title === id
  );

  return (
    <main className="w-full flex flex-col gap-8 px-6 md:max-w-6xl mx-auto min-h-screen capitalize">
      <PageHeading title={project?.singlePage?.title} />
      <div className="flex flex-col gap-4">
        <p className="tracking-wider leading-5">
          {project?.singlePage?.description}
        </p>
        <PageSubHeading title="Stack Used to Build the Project" size="h3" />
        <div className="flex flex-wrap gap-6 justify-center">
          {project?.singlePage?.skills?.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
};

export default SingleProject;

// {
//   "id": 4,
//   "projectTitle": "Tea Brewery",
//   "language": "react",
//   "description": "The most exquisite tea range in the world",
//   "image": {
//       "src": "/_next/static/media/tea.22963a16.jpeg",
//       "height": 667,
//       "width": 1000,
//       "blurDataURL": "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftea.22963a16.jpeg&w=8&q=70",
//       "blurWidth": 8,
//       "blurHeight": 5
//   },
//   "websiteLink": "https://tea-brewery.netlify.app/",
//   "githubLink": "https://githubLink.com/Fabian-Petersen/tea-shop-app",
//   "singlePage": {
//       "title": "tea-shop-project",
//       "description": "This is the first and most basic website I have build with React. All the data is stored within array objects and mapped over to display the different sections based on the hardgithubLinkd data. The css are done with styled components with fairly basic animations e.g. text movement in the X directions, object scaling and background image tranisioning over the product cards. The section id's was used to navigate bewteen the pages",
//       "images": "",
//       "skills": [
//           "html",
//           "css",
//           "javascript",
//           "react",
//           "githubLink"
//       ]
//   }
// }
