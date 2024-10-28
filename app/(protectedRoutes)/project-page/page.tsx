import ProjectUploadForm from "@/components/projects/uploadProject/ProjectUploadForm";
import ProjectTestForm from "@/components/projects/uploadProject/ProjectTestForm";
import TestForm from "@/app/tests/TestForm";

const ProjectUploadPage = () => {
  return (
    <main className="w-full flex flex-col gap-8 px-6 md:max-w-6xl mx-auto min-h-screen h-auto capitalize bg-formPageBgColor">
      {/* <ProjectUploadForm /> */}
      <TestForm />
      {/* <ProjectTestForm /> */}
    </main>
  );
};

export default ProjectUploadPage;
