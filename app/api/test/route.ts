// Server-side code in route.ts to handle data forwarding
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const requestData = await request.json();
  const awsResponse = await fetch("url", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  });

  const awsData = await awsResponse.json();
  return NextResponse.json({
    message: "Data successfully sent to AWS",
    awsData,
  });
}
