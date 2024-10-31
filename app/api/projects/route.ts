import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: Request) {
  const url = process.env.API_PROJECTS_ROUTE as string;

  try {
    // Parse incoming client data
    const clientData = await request.json();
    console.log("Client data:", clientData);

    // Make a POST request to AWS API Gateway
    const awsResponse = await axios.post(
      url, // Test endpoint for verifying POST request
      clientData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Return success response to the client
    return NextResponse.json(
      {
        message: "project data successfully sent to AWS",
        data: awsResponse.data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing request:", error);

    // Return error response to the client
    return NextResponse.json(
      { message: "Failed to create test", error: error },
      { status: 500 }
    );
  }
}
