import { useEffect, useRef, useState } from "react";
import { Icons } from "./icons";

export function Window({ children }: { children: React.ReactNode }) {
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({
    width: "50vw",
    height: "50vh",
  });
  const [resizeDirection, setResizeDirection] = useState("");

  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isDragging || isResizing) {
      windowRef.current!.style.transition = "none";
    } else {
      windowRef.current!.style.transition = "all 0.2s ease-out";
    }
  }, [isDragging, isResizing]);
  useEffect(() => {
    const handleResize = () => {
      if (windowRef.current) {
        const windowWidth = windowRef.current.offsetWidth;
        const windowHeight = windowRef.current.offsetHeight;
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        setPosition({
          x: (screenWidth - windowWidth) / 2,
          y: (screenHeight - windowHeight) / 2,
        });
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    const windowTop = windowRef.current!.getBoundingClientRect().top;
    setIsDragging(true);
    setDragOffset({
      x: event.clientX - windowRef.current!.getBoundingClientRect().left,
      y: event.clientY - windowTop,
    });
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: event.clientX - dragOffset.x,
        y: event.clientY - dragOffset.y,
      });
    } else if (isResizing) {
      const windowRect = windowRef.current!.getBoundingClientRect();
      let newWidth = windowSize.width;
      let newHeight = windowSize.height;
      switch (resizeDirection) {
        case "n":
          newHeight = windowRect.bottom - event.clientY + "px";
          break;
        case "ne":
          newWidth = event.clientX - windowRect.left + "px";
          newHeight = windowRect.bottom - event.clientY + "px";
          break;
        case "e":
          newWidth = event.clientX - windowRect.left + "px";
          break;
        case "se":
          newWidth = event.clientX - windowRect.left + "px";
          newHeight = event.clientY - windowRect.top + "px";
          break;
        case "s":
          newHeight = event.clientY - windowRect.top + "px";
          break;
        case "sw":
          newWidth = windowRect.right - event.clientX + "px";
          newHeight = event.clientY - windowRect.top + "px";
          break;
        case "w":
          newWidth = windowRect.right - event.clientX + "px";
          break;
        case "nw":
          newWidth = windowRect.right - event.clientX + "px";
          newHeight = windowRect.bottom - event.clientY + "px";
          break;
      }
      setWindowSize({
        width: newWidth,
        height: newHeight,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsResizing(false);
  };

  const handleResizeMouseDown = (
    event: React.MouseEvent<HTMLDivElement>,
    direction: string
  ) => {
    setIsResizing(true);
    setResizeDirection(direction);
    event.stopPropagation();
  };

  const onClick = () => {
    const windowRect = windowRef.current!.getBoundingClientRect();
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    setPosition({
      x: (screenWidth - windowRect.width) / 2,
      y: (screenHeight - windowRect.height) / 2,
    });
  };

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    const windowRect = windowRef.current!.getBoundingClientRect();
    const x = event.clientX - windowRect.left;
    const y = event.clientY - windowRect.top;
    const top = y < 10;
    const bottom = y > windowRect.height - 10;
    const left = x < 10;
    const right = x > windowRect.width - 10;
    if (top && left) {
      setResizeDirection("nw");
    } else if (top && right) {
      setResizeDirection("ne");
    } else if (bottom && left) {
      setResizeDirection("sw");
    } else if (bottom && right) {
      setResizeDirection("se");
    } else if (top) {
      setResizeDirection("n");
    } else if (right) {
      setResizeDirection("e");
    } else if (bottom) {
      setResizeDirection("s");
    } else if (left) {
      setResizeDirection("w");
    } else {
      setResizeDirection("");
    }
  };

  useEffect(() => {
    const windowRect = windowRef.current!.getBoundingClientRect();
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    setPosition({
      x: (screenWidth - windowRect.width) / 2,
      y: (screenHeight - windowRect.height) / 2,
    });
  }, []);

  return (
    <div
      className="fixed bg-white shadow-lg overflow-hidden rounded-[10px]"
      style={{
        top: position.y,
        left: position.x,
        width: windowSize.width,
        height: windowSize.height,
        boxShadow:
          "0px 0.5px 0px 0px rgba(0, 0, 0, 0.15), 0px -0.5px 0px 0px rgba(0, 0, 0, 0.05) inset",
      }}
      ref={windowRef}
      onMouseMove={handleMouseMove as any}
      onMouseUp={handleMouseUp}
      onMouseEnter={handleMouseEnter}
    >
      <div
        className="flex items-center justify-between px-3 py-3 h-9 border border-b-neutral-300/70"
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center space-x-2 h-6">
          <div className="w-[13px] h-[13px] bg-[#EE6A5F] border border-[#CE5347] rounded-full" />
          <div
            className="w-[13px] h-[13px] bg-[#F5BD4F] border border-[#D6A243] rounded-full"
            onClick={handleMouseDown}
          />
          <div
            className="w-[13px] h-[13px] bg-[#61C454] border border-[#58A942] rounded-full cursor-pointer"
            onClick={onClick}
          />
        </div>
      </div>
      <div className="p-3">{children}</div>
      {resizeDirection && (
        <div
          className={`absolute ${
            resizeDirection.includes("n") ? "top-0" : "bottom-0"
          } ${
            resizeDirection.includes("w") ? "left-0" : "right-0"
          } w-10 h-10 cursor-${
            resizeDirection.includes("n") || resizeDirection.includes("s")
              ? "ns"
              : "ew"
          }`}
          onMouseDown={(event) => handleResizeMouseDown(event, resizeDirection)}
        />
      )}
    </div>
  );
}
