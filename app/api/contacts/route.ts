// $ Route for POST request of Contacts Page Form Data

import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: Request) {
  const url = process.env.REST_API_DEV_CONTACTS as string;
  // const test_url = "https://httpbin.org/post";

  try {
    // Parse incoming client data
    const clientData = await request.json();

    // Make a POST request to AWS API Gateway
    const awsResponse = await axios.post(
      "https://fabian-portfolio.net/contacts",
      clientData
    );
    console.log("AWS response data:", awsResponse.data); // Confirm response
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
