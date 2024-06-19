"use client";
import { ReactNode, useEffect } from "react";

export function Alert({
  title,
  message,
  image,
}: {
  title: string;
  message: ReactNode;
  image: string;
}) {
  useEffect(() => {
    const el = document.getElementById("alert");

    setInterval(() => {
      el?.classList.add("hidden");
    }, 5000);
  });
  return (
    <div
      id="alert"
      className="flex justify-center items-center my-auto select-none"
    >
      <div className="flex flex-shrink-0 justify-center items-center w-[16.25rem] h-[14.5rem]">
        <div className="flex-shrink-0 w-[16.25rem] h-[14.5rem]">
          <div className="flex-shrink-0 relaztive w-[16.25rem] h-[14.5rem]">
            <div className="shadowZ absolute flex-shrink-0 w-[16.25rem] h-[14.5rem] rounded-[0.625rem] bg-white p-5"></div>
            <div className="absolute z-50 alert_backing flex-shrink-0 w-[16.25rem] h-[14.5rem] rounded-[0.625rem] bg-[#f6f6f6]/[.60] p-3">
              <div className="flex justify-center items-center space-y-5 flex-col mt-4">
                <img src={image} className="w-16 h-16" />
                <p className="text-md font-semibold text-black mt-2">{title}</p>
                <span className="text-xs text-center text-black mt-1">
                  {message}
                </span>
              </div>
            </div>
            <div className="inner_shadow flex-shrink-0 w-[16.25rem] h-[14.5rem] rounded-[0.625rem] bg-black/0" />
            <div className="flex flex-shrink-0 justify-center items-center w-5 h-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
