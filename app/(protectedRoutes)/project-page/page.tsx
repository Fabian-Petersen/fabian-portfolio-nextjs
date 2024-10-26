import PageHeading from "@/components/PageHeading";
import FormRowInput from "@/components/features/forms/FormRowInput";

const ProjectUploadPage = () => {
  return (
    <main className="w-full flex flex-col gap-8 px-6 md:max-w-6xl mx-auto min-h-screen capitalize">
      <PageHeading title="Upload New Project" />
      <FormRowInput
        type="text"
        labelText=""
        placeholderText="Enter Project Title"
        name="title"
        id=""
        className=""
        onChange={() => {}}
      />
    </main>
  );
};

export default ProjectUploadPage;
