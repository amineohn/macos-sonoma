import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDrag } from "@use-gesture/react";
import classNames from "classnames";
import { menuItems } from "~/app/components/ui/dock/apps/launchpad/apps.buttons.data";
import { Button } from "~/app/components/ui/dock/apps/launchpad/button";

interface LaunchPadProps {
  openLaunchPad: boolean;
}

export function LaunchPad({ openLaunchPad }: LaunchPadProps) {
  const [isOpen, setIsOpen] = useState(openLaunchPad);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 28;

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

  const filteredMenuItems = menuItems.filter((item) =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = filteredMenuItems.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredMenuItems.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const bind = useDrag(({ swipe: [swipeX] }) => {
    if (swipeX < 0) {
      handleNextPage();
    } else if (swipeX > 0) {
      handlePrevPage();
    }
  });

  const launchpadClasses = classNames(
    "bg-black/50 backdrop-filter backdrop-blur-xl absolute inset-0",
    {
      "overflow-hidden z-50": isOpen,
      "z-0": !isOpen,
    }
  );

  return (
    <>
      <div {...bind()}>
        <motion.div
          className={launchpadClasses}
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className={classNames(
              "flex justify-center flex-col items-center py-10 select-none",
              {
                hidden: !isOpen,
              }
            )}
          >
            <div className="flex items-center bg-transparent border border-white/25 rounded-md px-1 py-0.5 w-60 max-w-xs select-none">
              <svg
                className="h-5 w-5 text-white/75 ml-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1111.24 3.37l4.16 4.16a1 1 0 01-1.41 1.41l-4.16-4.16A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1); // Reset to first page on search
                }}
                className="bg-transparent text-xs text-white/75 placeholder:text-white/75 focus:outline-none ml-2 w-full"
              />
            </div>
          </div>

          <div
            className={classNames("container mx-auto max-w-9xl mt-20 ", {
              hidden: !isOpen,
            })}
          >
            <div className="grid grid-cols-7 gap-y-20 gap-x-10">
              {paginatedItems.map((item, index) => (
                <Button
                  key={index}
                  className="select-none"
                  index={index}
                  image={item.image}
                  label={item.label}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-10 space-x-2">
            {!searchQuery && (
              <>
                <div
                  onClick={handleNextPage}
                  className={classNames(
                    "cursor-pointer text-white",
                    currentPage > 1 && "text-white/20",
                    currentPage >= itemsPerPage && "hidden",
                    {
                      hidden: !isOpen,
                    }
                  )}
                >
                  &bull;
                </div>
                <div
                  onClick={handlePrevPage}
                  className={classNames(
                    "cursor-pointer text-white",
                    currentPage < totalPages && "text-white/20",
                    {
                      hidden: !isOpen,
                    }
                  )}
                >
                  &bull;
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
}
