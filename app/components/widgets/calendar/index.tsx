"use client";
import React from "react";
import { generateDatesForCurrentMonth } from "~/app/components/widgets/calendar/generate-dates-for-current-month";

export function Calendar() {
  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];
  const { dates, today } = generateDatesForCurrentMonth();
  const now = new Date();
  const month = now.toLocaleString("default", { month: "long" }).toUpperCase();

  return (
    <div className="w-[150px] h-[150px] rounded-2xl bg-white p-2 hidden">
      <div className="text-start text-red-500 font-bold mb-1 text-xs">
        {month}
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-gray-500 text-[10px] leading-tight">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="font-semibold">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-[10px] leading-tight">
        {dates.flat().map((date, index) => (
          <div
            key={index}
            className={`text-xs font-bold ${
              date === today
                ? "bg-red-500 text-white rounded-full"
                : "text-gray-700"
            }`}
          >
            {date || ""}
          </div>
        ))}
      </div>
    </div>
  );
}
