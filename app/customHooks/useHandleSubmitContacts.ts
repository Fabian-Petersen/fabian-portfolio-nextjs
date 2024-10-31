import axios from "axios";
import { contactFormSchema } from "../schemas/index";
import { toast } from "react-toastify";

const useHandleSubmitContacts = () => {
  // $ Define the Zod schema for validation
  // const contactFormSchema = z.object({
  //   username: z.string().min(1, { message: "Name is required" }),
  //   email: z.string().email({ message: "Invalid email address" }),
  //   message: z.string().min(1, { message: "Message is required" }),
  // });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      username: e.currentTarget.username.value,
      email: e.currentTarget.email.value,
      message: e.currentTarget.message.value,
    };

    // Validate form data with Zod
    const validationResult = contactFormSchema.safeParse(formData);
    if (!validationResult.success) {
      console.error(validationResult.error.errors);
      return;
    }

    try {
      // POST request to AWS API Gateway
      const response = await axios.post("api/contacts", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Check if response status is success
      if (response.status === 200) {
        toast.success("Form submitted successfully!");
        // Clear the form
        const formData = { username: "", email: "", message: "" };
      }
    } catch (error) {
      toast.error("Failed to submit the form.");
    }
  };

  return { handleSubmit };
};

export default useHandleSubmitContacts;
