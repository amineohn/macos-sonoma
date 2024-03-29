"use client";
import { useRef, memo, useState } from "react";
import { useStoreActions } from "../store";
import { LaunchPad } from "./launchpad";
interface DockButton {
  title: string;
  logo: string;
  action?: () => void;
}

interface DockProps {
  openLaunchPad?: boolean;
}
const Dock = ({ openLaunchPad }: DockProps) => {
  const dockButtonsWrapper = useRef<HTMLDivElement>(null);
  const closeMenu = useStoreActions((actions) => actions.menuBar.closeMenu);
  const [openLaunchpad, setOpenLaunchpad] = useState(false);
  const dockButtons: DockButton[] = [
    {
      title: "Finder",
      logo: "/static/images/finder-logo.png",
    },
    {
      title: "Launchpad",
      logo: "/static/images/launchpad-logo.png",
      action: () => {
        setOpenLaunchpad(openLaunchPad ? false : true);
      },
    },

    {
      title: "Safari",
      logo: "/static/images/safari-logo.png",
    },
    {
      title: "Music",
      logo: "/static/images/music-logo.png",
    },
    {
      title: "Mail",
      logo: "/static/images/mail-logo.png",
    },
    {
      title: "Photos",
      logo: "/static/images/photos-logo.png",
    },
    {
      title: "Contacts",
      logo: "/static/images/contacts-logo.png",
    },
    {
      title: "Calendar",
      logo: "/static/images/calendar-logo.png",
    },
    {
      title: "Stocks",
      logo: "/static/images/stocks-logo.png",
    },
    {
      title: "Facetime",
      logo: "/static/images/facetime-logo.png",
    },
    {
      title: "Maps",
      logo: "/static/images/maps-logo.png",
    },
    {
      title: "Note",
      logo: "/static/images/note-logo.png",
    },
    {
      title: "Settings",
      logo: "/static/images/settings-logo.png",
    },
    {
      title: "Reminders",
      logo: "/static/images/reminders-logo.png",
    },
    {
      title: "News",
      logo: "/static/images/news-logo.png",
    },
  ];

  const handleItemsMouseEnter = (itemIndex: number) => {
    const expandSize = 8;
    const buttonElements = dockButtonsWrapper.current?.children;

    if (buttonElements) {
      if (buttonElements) {
        (
          buttonElements[itemIndex] as HTMLElement
        ).style.width = `${expandSize}rem`;

        if (itemIndex > 0 && buttonElements[itemIndex - 1]) {
          (buttonElements[itemIndex - 1] as HTMLElement).style.width = `${
            expandSize - 1.5
          }rem`;
        }

        if (itemIndex > 1 && buttonElements[itemIndex - 2]) {
          (buttonElements[itemIndex - 2] as HTMLElement).style.width = `${
            expandSize - 2.5
          }rem`;
        }

        if (
          itemIndex < dockButtons.length - 1 &&
          buttonElements[itemIndex + 1]
        ) {
          (buttonElements[itemIndex + 1] as HTMLElement).style.width = `${
            expandSize - 1.5
          }rem`;
        }
      }

      if (itemIndex < dockButtons.length - 2 && buttonElements[itemIndex + 2]) {
        (buttonElements[itemIndex + 2] as HTMLElement).style.width = `${
          expandSize - 2.5
        }rem`;
      }
    }
  };

  const handleItemsMouseLeave = (itemIndex: number) => {
    const unexpandSize = 4;
    const buttonElements = dockButtonsWrapper.current?.children;

    if (buttonElements) {
      (
        buttonElements[itemIndex] as HTMLElement
      ).style.width = `${unexpandSize}em`;

      if (itemIndex > 0 && buttonElements[itemIndex - 1]) {
        (
          buttonElements[itemIndex - 1] as HTMLElement
        ).style.width = `${unexpandSize}em`;
      }

      if (itemIndex > 1 && buttonElements[itemIndex - 2]) {
        (
          buttonElements[itemIndex - 2] as HTMLElement
        ).style.width = `${unexpandSize}em`;
      }

      if (itemIndex < dockButtons.length - 1 && buttonElements[itemIndex + 1]) {
        (
          buttonElements[itemIndex + 1] as HTMLElement
        ).style.width = `${unexpandSize}em`;
      }

      if (itemIndex < dockButtons.length - 2 && buttonElements[itemIndex + 2]) {
        (
          buttonElements[itemIndex + 2] as HTMLElement
        ).style.width = `${unexpandSize}em`;
      }
    }
  };

  const handleItemsClick = () => {
    closeMenu();
  };
  return (
    <>
      <LaunchPad
        setOpenLaunchpad={setOpenLaunchpad}
        openLaunchPad={openLaunchpad}
      />
      <div
        ref={dockButtonsWrapper}
        className="animate-fade-up flex h-16 flex-row justify-center items-end border border-gray-300/10 bg-white backdrop-blur-lg fixed bottom-2 left-0 right-0 px-2 bg-opacity-10 w-max m-auto rounded-xl"
      >
        {dockButtons.map((item: DockButton, i: number) => (
          <button
            key={item.title}
            className="w-16 align-bottom dock-item p-2"
            style={{ transition: "all ease .2s" }}
            onMouseEnter={() => handleItemsMouseEnter(i)}
            onMouseLeave={() => handleItemsMouseLeave(i)}
            onClick={() => {
              if (item.title === "Launchpad") {
                setOpenLaunchpad(true);
              }
              handleItemsClick();
            }}
          >
            <img
              alt="dock icon"
              className="select-none w-full"
              src={item.logo}
            />
          </button>
        ))}
      </div>
    </>
  );
};

export default memo(Dock);
