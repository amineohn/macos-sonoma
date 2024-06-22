"use client";
import { useEffect, useState } from "react";
import { Icons } from "~/app/components/ui/icons";
import { getFormattedTime } from "~/app/utils/get-formatted-time";
import { getFormattedDate } from "~/app/utils/get-formatted-date";
import { ControlCenter } from "~/app/components/ui/control-center";

export function MenuBar() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getFormattedTime());
      setDate(getFormattedDate());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const showDate = () => {
    const currentDate = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    const formattedDate = new Intl.DateTimeFormat("fr-FR", options).format(
      currentDate
    );
    const capitalizedDate = capitalize(formattedDate);

    return capitalizedDate.replace(".,", " ").replace(".", "");
  };
  return (
    <>
      <div className="relative w-full h-9 select-none">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-white opacity-50 text-black flex items-center justify-center z-1"></div>
          <div className="absolute top-0 w-full z-50">
            <div className="flex items-center w-full justify-between h-9 px-2.5">
              <div className="inline-flex items-center space-x-1.5">
                <div className="hover:bg-black/5 px-0.5 py-0.5 rounded-md transition">
                  <Icons
                    name="apple"
                    className="w-6 h-6 text-black opacity-100"
                  />
                </div>
                {["Finder", "File", "Edit", "View", "Go", "Window", "Help"].map(
                  (item) => (
                    <button
                      key={item}
                      className="hover:bg-black/5 px-1.5 py-1 rounded-md transition ml-10"
                    >
                      <p className="text-xs font-medium text-black mix-blend-hard-light">
                        {item}
                      </p>
                    </button>
                  )
                )}
              </div>
              <div>
                <div className="flex items-center justify-center">
                  {["battery", "wifi", "search", "control"].map((icon) => (
                    <div
                      key={icon}
                      className="hover:bg-black/5 px-1 py-0.5 rounded-md transition"
                      onClick={
                        icon === "control" ? () => setOpen(!open) : undefined
                      }
                    >
                      <Icons
                        name={icon}
                        className={`w-${
                          icon === "battery" ? "7" : "6"
                        } h-6 text-black opacity-100`}
                      />
                    </div>
                  ))}
                  <div className="hover:bg-black/5 px-1 py-0.5 rounded-md transition">
                    <span className="text-black px-2 text-xs font-medium opacity-100">
                      {showDate()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gray-700/50 flex px-2 justify-between items-center mix-blend-color-burn backdrop-filter backdrop-blur-[51.8036px] z-0"></div>
      </div>

      <ControlCenter open={open} />
    </>
  );
}
