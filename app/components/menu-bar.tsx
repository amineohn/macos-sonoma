"use client";
import { useEffect, useState } from "react";
import { Icons } from "~/app/components/icons";
import { useTheme } from "next-themes";
import { getFormattedTime } from "~/app/utils/get-formatted-time";
import { getFormattedDate } from "~/app/utils/get-formatted-date";

export function MenuBar() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

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
            <div className="flex items-center w-full justify-between h-9 px-1">
              <div className="inline-flex items-center space-x-1.5">
                <div className="hover:bg-white/10 px-1.5 py-1.5 rounded-md transition">
                  <Icons
                    name="apple"
                    className="w-6 h-6 text-white opacity-100"
                  />
                </div>
                {["Finder", "File", "Edit", "View", "Go", "Window", "Help"].map(
                  (item) => (
                    <button
                      key={item}
                      className="hover:bg-white/10 px-1.5 py-1.5 rounded-md transition ml-10"
                    >
                      <p className="text-xs font-medium text-white mix-blend-hard-light">
                        {item}
                      </p>
                    </button>
                  )
                )}
              </div>
              <div>
                <div className="inline-flex items-center justify-center py-2">
                  {["battery", "wifi", "search", "control"].map((icon) => (
                    <div
                      key={icon}
                      className="hover:bg-white/10 px-1 py-0.5 rounded-md transition"
                      onClick={
                        icon === "control" ? () => setOpen(!open) : undefined
                      }
                    >
                      <Icons
                        name={icon}
                        className={`w-${
                          icon === "battery" ? "7" : "6"
                        } h-6 text-white opacity-100`}
                      />
                    </div>
                  ))}
                  <div className="hover:bg-white/10 px-1 py-0.5 rounded-md transition">
                    <span className="text-white px-2 mt-1 text-xs font-medium opacity-100">
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

      {open && (
        <div className="fixed shadow w-80 h-96 max-w-full top-10 right-0 sm:right-1.5 p-2.5 text-black bg-white/30 backdrop-blur-md rounded-2xl select-none z-50">
          <div className="row-span-2 col-span-2 p-2 flex flex-col justify-around">
            {[
              { icon: "wifi", label: "Wi-Fi", status: "Home" },
              { icon: "bluetooth", label: "Bluetooth", status: "On" },
              {
                icon: "rss-feed-rounded",
                label: "AirDrop",
                status: "Contacts Only",
              },
            ].map(({ icon, label, status }) => (
              <div key={label} className="flex items-center space-x-2">
                <div className="cc-btn">
                  <span
                    className={`i-material-symbols:${icon} text-base`}
                  ></span>
                </div>
                <div className="flex flex-col pt-0.5">
                  <span className="font-medium leading-4">{label}</span>
                  <span className="cc-text">{status}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center col-span-2 p-2 space-x-2">
            <div className="cc-btn">
              <Icons
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                name={theme === "dark" ? "light" : "moon"}
                className="w-5 h-5"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-medium ml-1">Light Mode</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
