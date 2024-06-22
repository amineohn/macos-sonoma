"use client";
import { useState } from "react";
import { Icons } from "~/app/components/ui/icons";
import { ControlCenter } from "~/app/components/ui/control-center";
import {
  iconItems,
  menuItems,
} from "~/app/components/ui/menu-bar/menu-bar.data";
import { showDate } from "~/app/components/ui/menu-bar/show-date";
import classNames from "classnames";
import { Home } from "~/app/components/ui/menu-bar/dropdown/home";

export function MenuBar() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const toggleDropdown = (itemName: string | null) => {
    if (openDropdown === itemName) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(itemName);
    }
  };

  return (
    <>
      <div className="relative w-full h-9 select-none">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-white opacity-50 text-black flex items-center justify-center z-1"></div>
          <div className="absolute top-0 w-full z-50">
            <div className="flex items-center w-full justify-between h-9 px-2.5">
              <div className="inline-flex items-center space-x-1.5">
                <div
                  className={classNames(
                    "hover:bg-black/5 px-1.5 py-1 rounded-md transition",
                    {
                      "bg-black/5": openDropdown === "home",
                    }
                  )}
                >
                  <Icons
                    name="apple"
                    className="w-6 h-6 text-black opacity-100"
                    onClick={() => toggleDropdown("home")}
                  />
                </div>
                {menuItems.map((item) => (
                  <button
                    key={item}
                    className={classNames(
                      "hover:bg-black/5 px-1.5 py-1 rounded-md transition ml-10",
                      {
                        "bg-black/5": openDropdown === item,
                      }
                    )}
                    onClick={() => toggleDropdown(item)}
                  >
                    <p className="text-xs font-medium text-black mix-blend-hard-light">
                      {item}
                    </p>
                  </button>
                ))}
              </div>
              <div>
                <div className="flex items-center justify-center">
                  {iconItems.map((icon) => (
                    <div
                      key={icon}
                      className={classNames(
                        "hover:bg-black/5 px-1 py-0.5 rounded-md transition"
                      )}
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
      <Home openDropdown={openDropdown!} />
    </>
  );
}
