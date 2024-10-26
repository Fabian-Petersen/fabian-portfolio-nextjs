import * as z from "zod";

// $ Schema for the Login Form
export const LoginSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z
    .string()
    .min(1, {
      message: "Please enter a valid password",
    })
    .refine(
      (value) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/g.test(
          value
        ),
      {
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (@$!%*?&)",
      }
    ),
});

// $ Schema for the Projects Upload Form
export const ProjectsFormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string(),
  name: z.string().min(1, {
    message: "Please enter your name",
  }),
});
