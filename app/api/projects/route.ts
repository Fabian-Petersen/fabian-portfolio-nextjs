import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: Request) {
  const url = process.env.REST_API_DEV_PROJECTS as string;
  // const test_url = "https://httpbin.org/post";
  try {
    // Parse incoming client data
    const clientData = await request.formData(); // Ensure input name is 'file'

    const formData = new FormData();
    formData.append("file", clientData.get("image") as File);
    formData.append("projectTitle", clientData.get("projectTitle") as string);

    const { data } = await axios.post(url, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log("Response from AWS:", data);

    return NextResponse.json(
      { message: "server response successfull" },
      { status: 200 }
    );
  } catch (error) {
    // Return error response to the client
    console.error("Error processing request:", error);
    return NextResponse.json(
      { message: "Failed to create test", error: error },
      { status: 500 }
    );
  }
}
