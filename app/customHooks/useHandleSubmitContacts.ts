import axios from "axios";
import { contactFormSchema } from "../schemas/index";
import { toast } from "react-toastify";
import { revalidatePath } from "next/cache";

const useHandleSubmitContacts = () => {
  // $ Define the Zod schema for validation
  // const contactFormSchema = z.object({
  //   username: z.string().min(1, { message: "Name is required" }),
  //   email: z.string().email({ message: "Invalid email address" }),
  //   message: z.string().min(1, { message: "Message is required" }),
  // });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const formDataObject = Object.fromEntries(formData);
    console.log(Object.fromEntries(formData));

    // Validate form data with Zod
    const validationResult = contactFormSchema.safeParse(formDataObject);
    if (!validationResult.success) {
      console.error(validationResult.error.errors);
      return;
    }

    try {
      // POST request to AWS API Gateway
      const response = await axios.post("api/contacts", formDataObject);

      if (response.status === 200) {
        toast.success("Form submitted successfully!");
      } else {
        toast.error("Unexpected response from server.");
      }
    } catch (error) {
      toast.error("Failed to submit the form.");
    } finally {
      // Safely reset the form regardless of success or failure
      // revalidatePath("/contacts");
      form.reset();
    }
  };

  return { handleSubmit };
};

export default useHandleSubmitContacts;
