import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: Request) {
  // const url = process.env.REST_API_DEV_PROJECTS as string;
  const test_url = "https://httpbin.org/post";
  try {
    const formData = new FormData();
    const { data } = await axios.post(test_url, formData, {
      headers: { "Content-Type": "application/json" },
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
