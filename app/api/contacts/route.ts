import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: Request) {
  const url = process.env.API_GATEWAY_URL as string; // Secure URL in .env
  //   "https://httpbin.org/post", // Test endpoint for verifying POST request

  try {
    // Parse incoming client data
    const clientData = await request.json();
    console.log("Received data on server:", clientData);

    // Make a POST request to AWS API Gateway
    const awsResponse = await axios.post(
      "https://3fay7enw02.execute-api.af-south-1.amazonaws.com/dev/contacts", // Test endpoint for verifying POST request
      clientData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("AWS (httpbin) response data:", awsResponse.data); // Confirm response
    // Return success response to the client
    return NextResponse.json(
      { message: "Data successfully sent to AWS", data: awsResponse.data },
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
