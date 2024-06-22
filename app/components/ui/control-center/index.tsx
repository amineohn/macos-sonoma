"use client";
import { IoIosMoon } from "react-icons/io";
import { LuAirplay } from "react-icons/lu";
import { items } from "~/app/components/ui/control-center/control-center.data";

export function ControlCenter({ open }: { open: boolean }) {
  return (
    open && (
      <div className="fixed shadow w-80 h-96 max-w-full top-10 right-0 sm:right-1.5 p-2.5 text-black bg-white/30 backdrop-blur-md rounded-2xl select-none z-50">
        <div className="flex space-x-2">
          <div className="w-1/2 h-40 p-2 flex flex-col justify-around bg-white/20 rounded-xl">
            {items.map((item) => (
              <div key={item.label} className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="flex flex-col pt-0.5">
                  <span className="text-xs font-bold leading-4">
                    {item.label}
                  </span>
                  <span className="text-xs">{item.status}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="w-1/2 h-40 flex flex-col space-y-2">
            <div className="flex flex-col h-20 justify-center bg-white/20 items-center rounded-xl">
              <div className="flex justify-center items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center">
                  <IoIosMoon className="w-5 h-5" />
                </div>
                <p className="text-sm font-semibold text-center">
                  Do Not <br /> Disturb
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <div className="w-20 flex flex-col h-20 justify-center bg-white/20 items-center rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="10" width="18" height="4" rx="1" ry="1"></rect>
                  <line x1="12" y1="2" x2="12" y2="4"></line>
                  <line x1="12" y1="20" x2="12" y2="22"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
                <p className="text-xs text-center font-medium">
                  Keyboard Brightness
                </p>
              </div>
              <div className="w-20 flex flex-col h-20 justify-center bg-white/20 items-center rounded-xl">
                <LuAirplay className="w-5 h-5" />
                <p className="text-xs text-center font-medium">
                  AirPlay Display
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
