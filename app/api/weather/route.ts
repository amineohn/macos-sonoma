import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const weather_key = process.env.WEATHER_KEY!;
  const weather = axios.get(
    `https://api.weatherapi.com/v1/current.json?key=${weather_key}&q=Bordeaux&aqi=no`
  );
  const response = await weather;
  return NextResponse.json(response.data);
}
