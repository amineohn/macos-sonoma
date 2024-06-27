"use client";
import classNames from "classnames";
import { useState } from "react";
import { IoIosMoon } from "react-icons/io";
import { LuAirplay } from "react-icons/lu";
import { items } from "~/app/components/ui/control-center/control-center.data";
import { Icons } from "~/app/components/ui/icons";
type ClickedToKeys = "doNotDisturb" | "keyboardBrightness" | "airPlayDisplay";

export function ControlCenter({ open }: { open: boolean }) {
  const [isClickedTo, setIsClickedTo] = useState({
    doNotDisturb: false,
    keyboardBrightness: false,
    airPlayDisplay: false,
  });
  return (
    open && (
      <div className="fixed shadow w-80 h-96 max-w-full top-10 right-0 sm:right-1.5 p-2.5 text-black bg-white/30 backdrop-blur-md rounded-2xl select-none z-50">
        <div className="flex space-x-2">
          <div className="w-1/2 h-40 p-2 flex flex-col justify-around bg-white/20 rounded-xl">
            {items.map((item) => (
              <div
                key={item.label}
                className="flex items-center space-x-2"
                onClick={() =>
                  setIsClickedTo({
                    ...isClickedTo,
                    [item.label as ClickedToKeys]:
                      !isClickedTo[item.label as ClickedToKeys],
                  })
                }
              >
                <div
                  className={classNames(
                    "w-6 h-6 rounded-full flex items-center justify-center cursor-pointer transition",
                    {
                      "bg-blue-500 text-white":
                        isClickedTo[item.label as ClickedToKeys],
                      "bg-white/30 text-black":
                        !isClickedTo[item.label as ClickedToKeys],
                    }
                  )}
                >
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
                <div
                  onClick={() =>
                    setIsClickedTo({
                      ...isClickedTo,
                      doNotDisturb: !isClickedTo.doNotDisturb,
                    })
                  }
                  className={classNames(
                    "w-8 h-8 rounded-full flex items-center transition justify-center cursor-pointer",
                    {
                      "bg-blue-500": isClickedTo.doNotDisturb,
                      "bg-white/30": !isClickedTo.doNotDisturb,
                    }
                  )}
                >
                  <IoIosMoon
                    className={classNames("w-5 h-5", {
                      "text-white": isClickedTo.doNotDisturb,
                      "text-black": !isClickedTo.doNotDisturb,
                    })}
                  />
                </div>
                <p className="text-sm font-semibold text-center">
                  Do Not <br /> Disturb
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <div className="w-20 flex flex-col h-20 justify-center bg-white/20 items-center rounded-xl">
                <Icons name="keyboard-bright" className="w-6 h-6" />

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
