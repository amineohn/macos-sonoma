import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

let codeDatabase: { [key: string]: string } = {};

export async function POST(request: NextRequest) {
  const { user } = await request.json();
  const code = uuidv4();

  if (user === "amine") {
    codeDatabase[code] = user;
  }

  return NextResponse.json({ code });
}
