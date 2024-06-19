import { useEffect, useRef, useState } from "react";

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
    const handleTransition = () => {
      if (windowRef.current) {
        windowRef.current.style.transition =
          isDragging || isResizing ? "none" : "all 0.2s ease-out";
      }
    };
    handleTransition();
  }, [isDragging, isResizing]);

  useEffect(() => {
    const handleResize = () => {
      if (windowRef.current) {
        const { offsetWidth: windowWidth, offsetHeight: windowHeight } =
          windowRef.current;
        const { innerWidth: screenWidth, innerHeight: screenHeight } = window;
        setPosition({
          x: (screenWidth - windowWidth) / 2,
          y: (screenHeight - windowHeight) / 2,
        });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowRef.current) {
      const { offsetWidth: windowWidth, offsetHeight: windowHeight } =
        windowRef.current;
      const { innerWidth: screenWidth, innerHeight: screenHeight } = window;
      setPosition({
        x: (screenWidth - windowWidth) / 2,
        y: (screenHeight - windowHeight) / 2,
      });
    }
  }, []);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = windowRef.current!.getBoundingClientRect();
    setIsDragging(true);
    setDragOffset({ x: event.clientX - left, y: event.clientY - top });
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: event.clientX - dragOffset.x,
        y: event.clientY - dragOffset.y,
      });
    } else if (isResizing) {
      const { left, right, top, bottom } =
        windowRef.current!.getBoundingClientRect();
      let newWidth = windowSize.width;
      let newHeight = windowSize.height;

      switch (resizeDirection) {
        case "n":
          newHeight = `${bottom - event.clientY}px`;
          break;
        case "ne":
          newWidth = `${event.clientX - left}px`;
          newHeight = `${bottom - event.clientY}px`;
          break;
        case "e":
          newWidth = `${event.clientX - left}px`;
          break;
        case "se":
          newWidth = `${event.clientX - left}px`;
          newHeight = `${event.clientY - top}px`;
          break;
        case "s":
          newHeight = `${event.clientY - top}px`;
          break;
        case "sw":
          newWidth = `${right - event.clientX}px`;
          newHeight = `${event.clientY - top}px`;
          break;
        case "w":
          newWidth = `${right - event.clientX}px`;
          break;
        case "nw":
          newWidth = `${right - event.clientX}px`;
          newHeight = `${bottom - event.clientY}px`;
          break;
      }

      setWindowSize({ width: newWidth, height: newHeight });
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

  const handleClick = () => {
    if (windowRef.current) {
      const { width, height } = windowRef.current.getBoundingClientRect();
      const { innerWidth: screenWidth, innerHeight: screenHeight } = window;
      setPosition({
        x: (screenWidth - width) / 2,
        y: (screenHeight - height) / 2,
      });
    }
  };

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isResizing && !isDragging) {
      const { left, top, width, height } =
        windowRef.current!.getBoundingClientRect();
      const x = event.clientX - left;
      const y = event.clientY - top;
      const topEdge = y < 10;
      const bottomEdge = y > height - 10;
      const leftEdge = x < 10;
      const rightEdge = x > width - 10;

      if (topEdge && leftEdge) setResizeDirection("nw");
      else if (topEdge && rightEdge) setResizeDirection("ne");
      else if (bottomEdge && leftEdge) setResizeDirection("sw");
      else if (bottomEdge && rightEdge) setResizeDirection("se");
      else if (topEdge) setResizeDirection("n");
      else if (rightEdge) setResizeDirection("e");
      else if (bottomEdge) setResizeDirection("s");
      else if (leftEdge) setResizeDirection("w");
      else setResizeDirection("");
    }
  };

  return (
    <div
      className="fixed bg-white border-transparent shadow-lg overflow-hidden rounded-md"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        width: windowSize.width,
        height: windowSize.height,
        transition: isDragging || isResizing ? "none" : "all 0.2s ease-out",
      }}
      ref={windowRef}
      onMouseMove={(event) => handleMouseMove(event as unknown as MouseEvent)}
      onMouseUp={handleMouseUp}
      onMouseEnter={handleMouseEnter}
    >
      <div
        className="flex items-center justify-between px-3 py-3 h-9 border border-b-neutral-300/70"
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center space-x-2 h-6">
          <div className="w-[13px] h-[13px] bg-[#EE6A5F] border border-[#CE5347] rounded-full" />
          <div className="w-[13px] h-[13px] bg-[#F5BD4F] border border-[#D6A243] rounded-full" />
          <div
            className="w-[13px] h-[13px] bg-[#61C454] border border-[#58A942] rounded-full cursor-pointer"
            onClick={handleClick}
          />
        </div>
      </div>
      {children}
      {/*<div
        className="absolute top-0 left-0 w-2 h-2 cursor-nw-resize"
        onMouseDown={(event) => handleResizeMouseDown(event, "nw")}
      />
      <div
        className="absolute top-0 right-0 w-2 h-2 cursor-ne-resize"
        onMouseDown={(event) => handleResizeMouseDown(event, "ne")}
      />
      <div
        className="absolute bottom-0 left-0 w-2 h-2 cursor-sw-resize"
        onMouseDown={(event) => handleResizeMouseDown(event, "sw")}
      />
      <div
        className="absolute bottom-0 right-0 w-2 h-2 cursor-se-resize"
        onMouseDown={(event) => handleResizeMouseDown(event, "se")}
      />
      <div
        className="absolute top-0 left-2 right-2 h-2 cursor-n-resize"
        onMouseDown={(event) => handleResizeMouseDown(event, "n")}
      />
      <div
        className="absolute bottom-0 left-2 right-2 h-2 cursor-s-resize"
        onMouseDown={(event) => handleResizeMouseDown(event, "s")}
      />
      <div
        className="absolute top-2 bottom-2 left-0 w-2 cursor-w-resize"
        onMouseDown={(event) => handleResizeMouseDown(event, "w")}
      />
      <div
        className="absolute top-2 bottom-2 right-0 w-2 cursor-e-resize"
        onMouseDown={(event) => handleResizeMouseDown(event, "e")}
      />*/}
    </div>
  );
}
