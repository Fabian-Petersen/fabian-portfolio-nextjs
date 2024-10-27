"use server";

// import { projectsFormSchema } from "../../schemas/index";
import { NextResponse } from "next/server";

export const POST = async (req: Response) => {
  const data = await req.json();

  console.log(data);

  return NextResponse.json({
    message: "Data successfully received by server",
    data: data,
  });
};

//   try {
//     const values = await req.json(); // Parse JSON from request
//     const validationResult = projectsFormSchema.safeParse(values);

//     if (!validationResult.success) {
//       return new Response(
//         JSON.stringify({ error: validationResult.error.errors }),
//         {
//           status: 400,
//           headers: { "Content-Type": "application/json" },
//         }
//       );
//     }

//     return new Response(
//       JSON.stringify({
//         message: "Data successfully received by server",
//         data: values,
//       }),
//       {
//         status: 200,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   } catch (error) {
//     return new Response(
//       JSON.stringify({
//         message: "Server Error from Backend",
//         error: "Invalid request",
//         details: error,
//       }),
//       {
//         status: 500,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   }
// };
