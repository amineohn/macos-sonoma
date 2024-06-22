"use client";
import { useRef, useState } from "react";
import { LaunchPad } from "~/app/components/ui/dock/apps/launchpad";
import { DockButton } from "~/app/components/ui/dock/button";
import { dock_buttons } from "~/app/components/ui/dock/dock-buttons.data";
import { setButtonWidth } from "~/app/components/ui/dock/set-button-width";
export function Dock() {
  const dockButtonsWrapper = useRef<HTMLDivElement>(null);
  const [openLaunchpad, setOpenLaunchpad] = useState(false);

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
        itemIndex < dock_buttons.length - 1 &&
        buttonElements[itemIndex + 1]
      ) {
        (buttonElements[itemIndex + 1] as HTMLElement).style.width = `${
          expandSize - 1.5
        }rem`;
      }

      if (
        itemIndex < dock_buttons.length - 2 &&
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
      <LaunchPad openLaunchPad={openLaunchpad} />
      <div
        ref={dockButtonsWrapper}
        className="z-50 animate-fade-up flex h-16 flex-row justify-center items-end border border-gray-300/10 bg-white backdrop-blur-lg fixed bottom-2 left-0 right-0 px-2 bg-opacity-10 w-max m-auto rounded-xl"
      >
        {dock_buttons.map((item, index) => (
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
}
