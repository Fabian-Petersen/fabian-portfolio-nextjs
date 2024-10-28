"use server";

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json(); // Parse incoming JSON data

    // Process data (e.g., log to check incoming data)
    console.log("Received data on server:", data);

    // Respond with success
    return NextResponse.json(
      { message: "Test created successfully", data },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { message: "Failed to create test", error: error },
      { status: 500 }
    );
  }
}
