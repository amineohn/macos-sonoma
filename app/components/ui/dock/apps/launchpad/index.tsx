import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { menuItems } from "~/app/components/ui/dock/apps/launchpad/apps.buttons.data";
import { Buttons } from "./buttons";

interface LaunchPadProps {
  openLaunchPad: boolean;
}

export function LaunchPad({ openLaunchPad }: LaunchPadProps) {
  const launchpadRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(openLaunchPad);

  useEffect(() => {
    setIsOpen(openLaunchPad);
  }, [openLaunchPad]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const launchpad = launchpadRef.current;
    if (launchpad) {
      if (!isOpen) {
        launchpad.classList.add(
          "animate-fade",
          "animate-once",
          "animate-ease-in-out",
          "animate-reverse",
          "overflow-hidden"
        );
      } else {
        launchpad.classList.remove(
          "animate-fade",
          "animate-once",
          "animate-ease-in-out",
          "animate-reverse",
          "overflow-hidden"
        );
      }
    }
  }, [isOpen]);

  const launchpadClasses = classNames(
    "bg-black/50 backdrop-filter backdrop-blur-xl absolute inset-0 z-50 transition-all ease-in-out launchpad",
    {
      "overflow-hidden": !isOpen,
    }
  );

  return (
    <>
      {isOpen && (
        <motion.div
          className={launchpadClasses}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          ref={launchpadRef}
        >
          <div className="flex justify-center flex-col items-center py-10">
            <div className="flex items-center">
              <div className="relative hidden">
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
              {menuItems.map((item, index) => (
                <Buttons index={index} image={item.image} label={item.label} />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
