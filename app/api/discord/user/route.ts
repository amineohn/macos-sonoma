import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const user = axios.get(
    "https://api.lanyard.rest/v1/users/762055588762877973"
  );

  const response = await user;
  return NextResponse.json(response.data);
}
