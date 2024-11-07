// const url = process.env.API_PROJECTS_ROUTE as string;
import React from "react";
import axios from "axios";

export function useHandleSubmitTest() {
  const handleTestSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create a FormData object to hold form data
    const formData = new FormData(e.currentTarget);

    const api_route = "http://localhost:3000/api/projects";

    try {
      const { data } = await axios.post(api_route, formData);
      console.log("Response from AWS:", data);
    } catch (error) {
      console.error("Error creating test:", error);
    }
  };

  return { handleTestSubmit };
}

export default useHandleSubmitTest;
