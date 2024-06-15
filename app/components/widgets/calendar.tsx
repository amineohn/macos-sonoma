"use client";
import React from "react";

function generateDatesForCurrentMonth() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const today = now.getDate();

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const lastDateOfMonth = new Date(year, month + 1, 0).getDate();

  const dates = [];
  let week = new Array(7).fill(null);

  for (let i = 0; i < firstDayOfMonth; i++) {
    week[i] = null;
  }

  for (let date = 1; date <= lastDateOfMonth; date++) {
    week[firstDayOfMonth + date - 1] = date;
    if ((firstDayOfMonth + date) % 7 === 0 || date === lastDateOfMonth) {
      dates.push(week);
      week = new Array(7).fill(null);
    }
  }

  return { dates, today };
}

export function Calendar() {
  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];
  const { dates, today } = generateDatesForCurrentMonth();
  const now = new Date();
  const month = now.toLocaleString("default", { month: "long" }).toUpperCase();

  return (
    <div className="w-[150px] h-[150px] rounded-2xl bg-white p-2">
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
