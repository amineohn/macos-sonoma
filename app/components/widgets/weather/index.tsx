"use client";
import axios from "axios";
import { useEffect, useState } from "react";

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
    <div className="w-[150px] h-[150px] rounded-2xl bg-blue-500 hidden">
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
