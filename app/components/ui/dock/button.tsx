"use client";
import { useState } from "react";
import Image from "next/image";

interface DockButtonProps {
  item: DockButton;
  index: number;
  onMouseEnter: (index: number) => void;
  onMouseLeave: (index: number) => void;
  onClick: (item: DockButton) => void;
}

export function DockButton({
  item,
  index,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: DockButtonProps) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsTooltipVisible(true);
    onMouseEnter(index);
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
    onMouseLeave(index);
  };

  return (
    <div className="relative w-16 p-2 transition-all ease-linear duration-[150ms]">
      <button
        key={item.title}
        className="w-full focus:outline-none border-transparent align-bottom transition-all animate-ease duration-200"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => onClick(item)}
      >
        <Image
          alt={item.title}
          className="select-none w-full"
          src={item.logo}
          width={500}
          height={500}
        />
      </button>
      {isTooltipVisible && (
        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-white/50 text-black text-xs px-2 py-1 rounded">
          {item.title}
        </div>
      )}
    </div>
  );
}
