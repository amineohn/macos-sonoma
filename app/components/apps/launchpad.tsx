"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import classNames from "classnames";

interface LaunchPadProps {
  setOpenLaunchpad: (open: boolean) => void;
  openLaunchPad: boolean;
}

export function LaunchPad({ openLaunchPad, setOpenLaunchpad }: LaunchPadProps) {
  const launchpadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const launchpad = launchpadRef.current;
    const launchpadAnimation = launchpad?.classList.contains("animate-fade");
    if (launchpadAnimation) {
      launchpad?.classList.remove(
        "animate-fade",
        "animate-once",
        "animate-ease-in-out",
        "animate-reverse"
      );
    }
    if (!openLaunchPad && launchpadAnimation) {
      launchpad?.classList.add(
        "animate-fade",
        "animate-once",
        "animate-ease-in-out",
        "animate-reverse"
      );
      launchpad?.classList.add("overflow-hidden");
    }
  }, [openLaunchPad]);

  const launchpadClasses = classNames(
    "bg-black/50 backdrop-filter backdrop-blur-xl absolute inset-0 z-50 transition-all ease-in-out launchpad",
    {
      "overflow-hidden": !openLaunchPad,
    }
  );

  return (
    <>
      {openLaunchPad && (
        <motion.div
          className={launchpadClasses}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onMouseLeave={() => {
            setOpenLaunchpad(false);
          }}
          ref={launchpadRef}
        >
          <div className="flex justify-center flex-col items-center py-10">
            <div className="flex items-center">
              <div className="relative">
                <input
                  type="text"
                  className="outline-none bg-white/10 rounded-md py-[1px] w-80 text-center font-normal text-white placeholder-white/60 border border-white/30 pl-8"
                  placeholder="Search"
                />
                <svg
                  className="w-4 h-4 absolute top-1/2 left-[8rem] transform -translate-y-1/2 text-white/60 stroke-white/60"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                    stroke="currentStroke"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="container mx-auto max-w-9xl mt-20">
            <div className="grid grid-cols-7 gap-3">
              <div className="flex flex-col items-center">
                <img
                  src="/static/images/finder-logo.png"
                  className="w-16 h-16"
                />
                <span className="text-white text-xs font-medium mt-2">
                  Finder
                </span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="/static/images/facetime-logo.png"
                  className="w-16 h-16"
                />
                <span className="text-white text-xs font-medium mt-2">
                  Facetime
                </span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="/static/images/contacts-logo.png"
                  className="w-16 h-16"
                />
                <span className="text-white text-xs font-medium mt-2">
                  Contacts
                </span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="/static/images/calendar-logo.png"
                  className="w-16 h-16"
                />
                <span className="text-white text-xs font-medium mt-2">
                  Calendar
                </span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="/static/images/music-logo.png"
                  className="w-16 h-16"
                />
                <span className="text-white text-xs font-medium mt-2">
                  Music
                </span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="/static/images/messages-logo.png"
                  className="w-16 h-16"
                />
                <span className="text-white text-xs font-medium mt-2">
                  Messages
                </span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/static/images/mail-logo.png" className="w-16 h-16" />
                <span className="text-white text-xs font-medium mt-2">
                  Mail
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
