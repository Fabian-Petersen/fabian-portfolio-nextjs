// Server-side code in route.ts to handle data forwarding
// const url = process.env.TEST_API_GATEWAY_URL as string; // Secure URL in .env
// const contactsURL = https://204hnqisec.execute-api.af-south-1.amazonaws.com/dev/contacts;
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const defaultURL =
    "https://mynko44mc6.execute-api.af-south-1.amazonaws.com/default"; // Update the URL
  const requestData = await request.json();

  try {
    const awsResponse = await fetch(defaultURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    // Check if the response is okay (status in the range 200-299)
    if (!awsResponse.ok) {
      throw new Error(`AWS response not OK: ${awsResponse.status}`);
    }

    const awsData = await awsResponse.json();
    console.log("AWS response data:", awsData);
    return NextResponse.json({
      message: "Data successfully sent to AWS",
      awsData,
    });
  } catch (error) {
    console.error("Error sending data to AWS:", error);
    return NextResponse.json(
      {
        message: "Failed to send data to AWS",
        error: error,
      },
      { status: 500 }
    );
  }
}
