import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { code } = await request.json();
  const headers = new Headers({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  });

  if (code === process.env.CODE) {
    return NextResponse.json({ message: "Code verified" }, { headers });
  } else {
    return NextResponse.json(
      { message: "Invalid code" },
      { status: 401, headers }
    );
  }
}
