"use client";
import { FormEvent, useEffect, useState } from "react";
import { Icons } from "../components/icons";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [time, setTime] = useState(
    new Date()
      .toLocaleTimeString("fr-FR", {
        timeZone: "Europe/Paris",
        hour12: false,
      })
      .slice(0, -3)
  );
  // date in letter
  const [date, setDate] = useState(
    new Date().toLocaleDateString("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  );

  useEffect(() => {
    const dates = document.querySelectorAll(".date");
    const times = document.querySelectorAll(".time");
    dates.forEach((date) => {
      date.classList.add("transition-all", "duration-500");
    });
    times.forEach((time) => {
      time.classList.add("transition-all", "duration-500");
    });
    const interval = setInterval(() => {
      setTime(
        new Date()
          .toLocaleTimeString("fr-FR", {
            timeZone: "Europe/Paris",
            hour12: false,
          })
          .slice(0, -3)
      );
      setDate(
        new Date().toLocaleDateString("fr-FR", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  });

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const input = (e.target as HTMLFormElement).querySelector("input");
    if (input && input.value === "password") {
      router.push("/");
    } else if (input) {
      setInterval(() => {
        input.classList.remove("animate-shake", "animate-thrice");
      }, 1000);
      input.classList.add("animate-shake", "animate-thrice");
      input.value = "";
    }
  }
  return (
    <>
      <motion.div
        className="flex justify-end items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Icons name="battery" className="w-6 h-6 text-white mr-2" />
        <Icons name="wifi" className="w-6 h-6 text-white mr-2" />
      </motion.div>

      <motion.div
        className="flex flex-col justify-center items-center mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="date bg-clip-text text-transparent bg-gradient-to-r from-white/60 to-white/60 font-semibold text-xl select-none text-backdrop-blur">
          {date}
        </p>
        <p className="time bg-clip-text text-transparent bg-gradient-to-r from-white/60 to-white/60 font-bold text-8xl select-none text-backdrop-blur">
          {time}
        </p>
      </motion.div>
      <motion.div
        className="absolute bottom-0 left-0 right-0 flex flex-col justify-center items-center mb-10 space-y-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <img
          src="https://avatars.githubusercontent.com/u/38817327?v=4"
          className="w-10 h-10 rounded-full text-white mr-2"
        />
        <p className="text-white font-medium text-xs select-none">
          Amine OUHANI
        </p>
        <form onSubmit={onSubmit}>
          <input
            type="password"
            placeholder="Enter Password"
            className="input bg-white/30 outline-none border-none rounded-full backdrop-blur-md text-white placeholder-white/70 py-1 px-3 focus:ring-0 w-40 font-medium text-xs select-none"
          />
        </form>
      </motion.div>
    </>
  );
}
