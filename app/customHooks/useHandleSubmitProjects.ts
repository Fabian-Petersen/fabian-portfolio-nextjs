import axios from "axios";
import { useCallback } from "react";
import { projectsFormSchema } from "../schemas";
// import projectsFormSubmit from "../api/projects/route";
import useHandleSubmitTest from "../tests/useHandleSubmitTest";

const useHandleSubmitProjects = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      projectTitle: e.currentTarget.projectTitle.value,
      typeOfProject: e.currentTarget.typeOfProject.value,
      aim: e.currentTarget.aim.value,
      projectStack: e.currentTarget.projectStack.value,
      description: e.currentTarget.description.value,
      websiteLink: e.currentTarget.websiteLink.value,
      githubLink: e.currentTarget.githubLink.value,
      challenges: e.currentTarget.challenges.value,
      projectDetails: e.currentTarget.projectDetails.value,
      image: e.currentTarget.image.value,
    };

    const api_gateway_url = "api/projects";

    // Validate form data with Zod
    const validationResult = projectsFormSchema.safeParse(formData);
    if (!validationResult.success) {
      console.error(validationResult.error.errors);
      console.log("Form data is invalid");
      return;
    }
    try {
      // POST request to AWS API Gateway
      const response = await axios.post(api_gateway_url, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Project send to sever successfully:");
      console.log(response.data);
    } catch (error) {
      console.error("Error sending project:", error);
    }
  };
  return { handleSubmit };
};

export default useHandleSubmitProjects;