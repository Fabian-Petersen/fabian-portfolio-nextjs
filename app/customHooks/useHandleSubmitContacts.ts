import axios from "axios";
import { contactFormSchema } from "../schemas/index";
import { z } from "zod";

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

    const api_gateway_url =
      "https://jac532g7he.execute-api.af-south-1.amazonaws.com/dev/contacts";

    // Validate form data with Zod
    const validationResult = contactFormSchema.safeParse(formData);
    if (!validationResult.success) {
      console.error(validationResult.error.errors);
      return;
    }

    try {
      // POST request to AWS API Gateway
      const response = await axios.post(api_gateway_url, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Message sent successfully:", response.data);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return { handleSubmit };
};

export default useHandleSubmitContacts;
