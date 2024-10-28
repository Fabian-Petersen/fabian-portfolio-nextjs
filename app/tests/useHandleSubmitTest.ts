import React from "react";

export function useHandleSubmitTest() {
  const handleTestSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const testFormData = {
      title: e.currentTarget.test.value,
    };

    try {
      const response = await fetch("/api/test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(testFormData),
      });

      if (!response.ok) {
        throw new Error("Failed to create test");
      }

      const result = await response.json();
      console.log("Test created:", result);
    } catch (error) {
      console.error("Error creating test:", error);
    }
  };

  return { handleTestSubmit };
}

export default useHandleSubmitTest;
