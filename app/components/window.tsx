import { useEffect, useRef, useState } from "react";
import { Icons } from "./icons";

export function Window() {
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

  return (
    <div
      className="fixed bg-white shadow-lg rounded-lg overflow-hidden"
      style={{
        top: position.y,
        left: position.x,
        width: windowSize.width,
        height: windowSize.height,
      }}
      ref={windowRef}
      onMouseMove={handleMouseMove as any}
      onMouseUp={handleMouseUp}
      onMouseEnter={handleMouseEnter}
    >
      <div
        className="flex items-center justify-between px-3 py-2 bg-gray-200"
        onMouseDown={handleMouseDown}
        style={{ cursor: "move" }}
      >
        <Icons name="apple" className="w-6 h-6 text-gray-700" />
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div
            className="w-3 h-3 bg-green-500 rounded-full cursor-pointer"
            onMouseDown={(event) => handleResizeMouseDown(event, "se")}
          ></div>
        </div>
      </div>
      <div className="p-3">
        <p className="text-lg font-medium">Window Title</p>
        <p className="text-gray-500">Window content goes here</p>
      </div>
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
        ></div>
      )}
    </div>
  );
}
