import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const weather = axios.get(
    "https://api.weatherapi.com/v1/current.json?key=f8b5e7f5cd004bcdad4211327240806&q=Bordeaux&aqi=no"
  );
  const response = await weather;
  return NextResponse.json(response.data);
}
