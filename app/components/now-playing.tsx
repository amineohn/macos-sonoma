"use client";
import React, { useEffect, useState } from "react";
import ColorThief from "colorthief";
import { getCurrentPlaying } from "../actions/get-current-playing";
import { CurrentlyPlaying } from "../types/spotify";
import { RiMusicFill } from "react-icons/ri";

export function NowPlaying() {
  const [shadowColor, setShadowColor] = useState("rgba(0, 0, 0, 0.3)");
  const [data, setData] = useState<CurrentlyPlaying | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentData = await getCurrentPlaying();
        setData(currentData);
      } catch (error) {
        console.error("Error fetching current playing data:", error);
      }
    };

    fetchData();
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = data?.albumImageUrl!;

    img.onload = () => {
      try {
        const colorThief = new ColorThief();
        const result = colorThief.getColor(img);
        const dominantColor = `rgb(${result[0]}, ${result[1]}, ${result[2]})`;
        setShadowColor(dominantColor);
      } catch (err) {
        console.error("Error extracting colors:", err);
      }
    };

    const intervalId = setInterval(fetchData, 5000);

    return () => clearInterval(intervalId);
  }, [data?.albumImageUrl]);
  if (data)
    return (
      <div className="flex flex-col justify-end items-end w-full px-6 py-2.5">
        {data ? (
          <div className="flex flex-col w-64">
            <div className="px-3 flex items-center space-x-2 ml-5 mb-5">
              <RiMusicFill />

              <p className="text-xs font-semibold">Currently Listening</p>
            </div>
            <div className="flex flex-col items-end justify-end">
              <img
                className="relative w-28 h-28 rounded-md mb-2"
                src={data.albumImageUrl}
                style={{ boxShadow: `0 4px 15px ${shadowColor}` }}
                alt={data.title}
              />
              <p className="font-semibold">{data.title}</p>
              <p className="font-light">{data.artist}</p>
            </div>
          </div>
        ) : (
          <div>No data available</div>
        )}
      </div>
    );
}
