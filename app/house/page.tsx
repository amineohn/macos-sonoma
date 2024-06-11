"use client";
import { TbHomeFilled } from "react-icons/tb";
import { getCurrentPlaying } from "../actions/get-current-playing";
import { RiMusicFill } from "react-icons/ri";
import Vibrant from "node-vibrant";
import { useEffect, useState } from "react";
import { CurrentlyPlaying } from "../types/spotify";

export default function Page() {
  const [data, setData] = useState<CurrentlyPlaying>();
  const [shadowColor, setShadowColor] = useState("rgba(0, 0, 0, 0.3)");

  useEffect(() => {
    async function fetchData() {
      const currentData = await getCurrentPlaying();
      setData(currentData);

      if (currentData && currentData.albumImageUrl) {
        const vibrant = new Vibrant(currentData.albumImageUrl);
        const palette = await vibrant.getPalette();
        const dominantColor = palette.Vibrant
          ? palette.Vibrant.getHex()
          : "rgba(0, 0, 0, 0.3)";
        setShadowColor(dominantColor);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="absolute">
        <div className="px-5">
          <TbHomeFilled className="w-6 h-6" />
        </div>
      </div>
      <div className="flex justify-center items-center my-5">
        <div className="grid grid-cols-3 gap-5">
          <div className="bg-gray-50/30 ring-2 hover:ring transition hover:ring-offset-2 ring-neutral-300/20 w-64 h-56 rounded-xl"></div>
          <div className="bg-gray-50/30 ring-2 hover:ring transition hover:ring-offset-2 ring-neutral-300/20 w-64 h-56 rounded-xl"></div>
          <div className="bg-gray-50/30 ring-2 hover:ring transition hover:ring-offset-2 ring-neutral-300/20 w-64 h-56 rounded-xl">
            {data ? (
              <div className="absolute w-64">
                <div className="px-3 py-2 flex items-center space-x-2">
                  <RiMusicFill />
                  <p className="text-xs font-semibold">Currently Listening</p>
                </div>
                <div className="flex flex-col justify-end items-end w-full px-6 py-2.5">
                  <img
                    className="relative w-28 h-28 rounded-md mb-2"
                    src={data.albumImageUrl}
                    style={{ boxShadow: `0 15px 15px ${shadowColor}` }}
                  />
                  <p className="font-semibold">{data.title}</p>
                  <p className="text-light">{data.artist}</p>
                </div>
              </div>
            ) : (
              <div>No data available</div>
            )}
          </div>
          <div className="bg-gray-50/30 ring-2 hover:ring transition hover:ring-offset-2 ring-neutral-300/20 w-64 h-56 rounded-xl"></div>
          <div className="bg-gray-50/30 ring-2 hover:ring transition hover:ring-offset-2 ring-neutral-300/20 w-64 h-56 rounded-xl"></div>
          <div className="bg-gray-50/30 ring-2 hover:ring transition hover:ring-offset-2 ring-neutral-300/20 w-64 h-56 rounded-xl"></div>
          <div className="bg-gray-50/30 ring-2 hover:ring transition hover:ring-offset-2 ring-neutral-300/20 w-64 h-56 rounded-xl"></div>
          <div className="bg-gray-50/30 ring-2 hover:ring transition hover:ring-offset-2 ring-neutral-300/20 w-64 h-56 rounded-xl"></div>
          <div className="bg-gray-50/30 ring-2 hover:ring transition hover:ring-offset-2 ring-neutral-300/20 w-64 h-56 rounded-xl"></div>
          <img
            src="/static/images/maps.png"
            className="col-span-3 rounded-xl ing-2 hover:ring transition hover:ring-offset-2 ring-neutral-300/20 w-[97.4%] h-full hover:translate-y-4 hover:scale-95"
          />
        </div>
      </div>
    </>
  );
}
