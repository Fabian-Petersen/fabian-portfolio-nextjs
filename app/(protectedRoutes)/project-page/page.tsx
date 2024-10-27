import ProjectUploadForm from "@/components/projects/uploadProject/ProjectUploadForm";

const ProjectUploadPage = () => {
  return (
    <main className="w-full flex flex-col gap-8 px-6 md:max-w-6xl mx-auto min-h-screen h-auto capitalize bg-formPageBgColor">
      <ProjectUploadForm />
    </main>
  );
};

export default ProjectUploadPage;
