"use client";
import axios from "axios";
import { useEffect, useState } from "react";

interface Condition {
  text: string;
  icon: string;
  code: number;
}

interface CurrentWeather {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
}

interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

interface WeatherData {
  location: Location;
  current: CurrentWeather;
}

export function Weather() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get<WeatherData>(
          process.env.NEXT_PUBLIC_BASE_URL + "/api/weather"
        );
        setWeatherData(response.data);
      } catch (error) {
        setError("Failed to fetch weather data.");
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  if (loading) {
    return (
      <div className="w-[150px] h-[150px] rounded-2xl bg-white/60 animate-pulse"></div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!weatherData) {
    return null;
  }

  return (
    <div className="w-[150px] h-[150px] rounded-2xl bg-blue-500">
      <div className="p-3">
        <h3 className="text-white font-semibold text-xs">
          {weatherData.location.name}
        </h3>
        <span className="text-3xl text-white font-bold">
          {weatherData.current.temp_c}°
        </span>
        <div className="mt-1 text-yellow-300">
          <span className="text-base font-bold">☁️</span>
          <span className="text-white ml-1 font-semibold text-xs">
            {weatherData.current.condition.text}
          </span>
        </div>
        <div className=" text-white">
          <div className="flex justify-between text-xs">
            <span className="font-semibold">Humidity:</span>
            <span className="font-semibold">
              {weatherData.current.humidity}%
            </span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="font-semibold">Wind:</span>
            <span className="font-semibold">
              {weatherData.current.wind_kph} kph
            </span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="font-semibold">Pressure:</span>
            <span className="font-semibold">
              {weatherData.current.pressure_mb} mb
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
