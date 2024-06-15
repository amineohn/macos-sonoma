import React, { useEffect, useState } from "react";

interface ProgressBarProps {
  start: number;
  end: number;
}

export function ProgressBar({ start, end }: ProgressBarProps) {
  const [progress, setProgress] = useState(0);
  const duration = end - start;

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const elapsed = now - start;
      const percentage = Math.min((elapsed / duration) * 100, 100);
      setProgress(percentage);
    }, 1000);

    return () => clearInterval(interval);
  }, [start, duration]);

  return (
    <div className="w-[150px] h-2 bg-gray-50 rounded mt-3">
      <div
        className="h-full bg-black transition rounded"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
