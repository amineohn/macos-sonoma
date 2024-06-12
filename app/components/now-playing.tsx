"use client";
import React, { useEffect, useState } from "react";
import ColorThief from "colorthief";
import { RiMusicFill } from "react-icons/ri";
import { useLanyard } from "react-use-lanyard";
import { ProgressBar } from "./progress-bar";
import { AiOutlineLoading } from "react-icons/ai";
import { IoWarning } from "react-icons/io5";

export function NowPlaying() {
  const [shadowColor, setShadowColor] = useState("rgba(0, 0, 0, 0.3)");
  const { loading, status } = useLanyard({
    userId: "762055588762877973",
    socket: true,
  });
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = status?.spotify?.album_art_url!;

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
  }, [status?.spotify?.album_art_url]);
  return (
    <div className="flex flex-col justify-end items-end w-full px-6 py-2.5">
      {loading ? (
        <AiOutlineLoading className="animate-spin w-7 h-7" />
      ) : (
        <>
          {!status?.listening_to_spotify && (
            <div className="flex items-center space-x-2">
              <IoWarning />
              <p className="text-xs">No music right here</p>
            </div>
          )}
          {status ? (
            <>
              {status?.listening_to_spotify && (
                <div className="flex flex-col w-64">
                  <div className="px-3 flex items-center space-x-2 ml-5 mb-5">
                    <RiMusicFill />

                    <p className="text-xs font-semibold">Currently Listening</p>
                  </div>
                  <div className="flex flex-col items-end justify-end">
                    {status?.listening_to_spotify && (
                      <img
                        className="relative w-28 h-28 rounded-xl mb-2"
                        src={status?.spotify?.album_art_url}
                        style={{ boxShadow: `0 4px 15px ${shadowColor}` }}
                        alt={status?.spotify?.artist}
                      />
                    )}
                    <p className="font-semibold text-xs">
                      {status?.spotify?.artist}
                    </p>
                    <p className="font-light text-xs">
                      {status?.spotify?.song}
                    </p>
                    <ProgressBar
                      start={status?.spotify?.timestamps.start as number}
                      end={status?.spotify?.timestamps.end as number}
                    />
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="flex items-center space-x-2">
              <IoWarning />
              <p className="text-xs">No data available</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
