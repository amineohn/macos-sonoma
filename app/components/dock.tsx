"use client";

import { useRef, memo, useState } from "react";
import { LaunchPad } from "./launchpad";

interface DockButton {
  title: string;
  logo: string;
  action?: (
    setOpenLaunchpad: (state: boolean) => void,
    openLaunchPad: boolean
  ) => void;
}

interface DockProps {
  openLaunchPad?: boolean;
}

const DOCK_BUTTONS: DockButton[] = [
  { title: "Finder", logo: "/static/images/finder-logo.png" },
  {
    title: "Launchpad",
    logo: "/static/images/launchpad-logo.png",
    action: (setOpenLaunchpad, openLaunchPad) => {
      setOpenLaunchpad(!openLaunchPad);
    },
  },
  { title: "Safari", logo: "/static/images/safari-logo.png" },
  { title: "Music", logo: "/static/images/music-logo.png" },
  { title: "Mail", logo: "/static/images/mail-logo.png" },
  { title: "Photos", logo: "/static/images/photos-logo.png" },
  { title: "Contacts", logo: "/static/images/contacts-logo.png" },
  { title: "Calendar", logo: "/static/images/calendar-logo.png" },
  { title: "Stocks", logo: "/static/images/stocks-logo.png" },
  { title: "Facetime", logo: "/static/images/facetime-logo.png" },
  { title: "Maps", logo: "/static/images/maps-logo.png" },
  { title: "Note", logo: "/static/images/note-logo.png" },
  { title: "Settings", logo: "/static/images/settings-logo.png" },
  { title: "Reminders", logo: "/static/images/reminders-logo.png" },
  { title: "News", logo: "/static/images/news-logo.png" },
];

const DockButton = memo(
  ({
    item,
    index,
    onMouseEnter,
    onMouseLeave,
    onClick,
  }: {
    item: DockButton;
    index: number;
    onMouseEnter: (index: number) => void;
    onMouseLeave: (index: number) => void;
    onClick: (item: DockButton) => void;
  }) => (
    <button
      key={item.title}
      className="w-16 align-bottom dock-item p-2"
      style={{ transition: "all ease .2s" }}
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={() => onMouseLeave(index)}
      onClick={() => onClick(item)}
    >
      <img alt="dock icon" className="select-none w-full" src={item.logo} />
    </button>
  )
);

const Dock = ({ openLaunchPad }: DockProps) => {
  const dockButtonsWrapper = useRef<HTMLDivElement>(null);
  const [openLaunchpad, setOpenLaunchpad] = useState(false);

  const setButtonWidth = (
    buttonElements: HTMLCollection,
    indices: number[],
    size: number
  ) => {
    indices.forEach((index) => {
      if (buttonElements[index]) {
        (buttonElements[index] as HTMLElement).style.width = `${size}em`;
      }
    });
  };

  const handleItemsMouseEnter = (itemIndex: number) => {
    const expandSize = 8;
    const buttonElements = dockButtonsWrapper.current?.children;

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
        itemIndex < DOCK_BUTTONS.length - 1 &&
        buttonElements[itemIndex + 1]
      ) {
        (buttonElements[itemIndex + 1] as HTMLElement).style.width = `${
          expandSize - 1.5
        }rem`;
      }

      if (
        itemIndex < DOCK_BUTTONS.length - 2 &&
        buttonElements[itemIndex + 2]
      ) {
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
      const indicesToUpdate = [
        itemIndex,
        itemIndex - 1,
        itemIndex - 2,
        itemIndex + 1,
        itemIndex + 2,
      ].filter((index) => index >= 0 && index < buttonElements.length);

      setButtonWidth(buttonElements, indicesToUpdate, unexpandSize);
    }
  };

  const handleItemsClick = (item: DockButton) => {
    if (item.action) {
      item.action(setOpenLaunchpad, openLaunchpad);
    }
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
        {DOCK_BUTTONS.map((item, index) => (
          <DockButton
            key={item.title}
            item={item}
            index={index}
            onMouseEnter={handleItemsMouseEnter}
            onMouseLeave={handleItemsMouseLeave}
            onClick={handleItemsClick}
          />
        ))}
      </div>
    </>
  );
};

export default memo(Dock);
