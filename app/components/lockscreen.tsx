"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
export function LockScreen() {
  const router = useRouter();
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [messageAttempt, setMessageAttempt] = useState("");
  const [time, setTime] = useState(
    new Date()
      .toLocaleTimeString("fr-FR", {
        timeZone: "Europe/Paris",
        hour12: false,
      })
      .slice(0, -3)
  );
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
      router.push("/home");
    } else if (input) {
      setFailedAttempts((prev) => {
        const newAttempts = prev + 1;
        if (newAttempts >= 3) {
          setMessageAttempt("Oops, 3 attempts failed.");
          const animationElements =
            document.getElementsByClassName("animation");
          for (let i = 0; i < animationElements.length; i++) {
            animationElements[i].classList.add("animate__fadeIn");
          }
        } else {
          setTimeout(() => {
            input.classList.remove("animate-shake", "animate-thrice");
          }, 1000);
          input.classList.add("animate-shake", "animate-thrice");
        }
        return newAttempts;
      });
      input.value = "";
    }
  }
  return (
    <>
      <motion.div
        className="transition-all ease-in-out flex flex-col justify-center items-center mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        key={time}
      >
        <p className="date bg-clip-text text-transparent bg-gradient-to-r from-white/60 to-white/60 font-semibold text-lg select-none">
          {date}
        </p>
        <p className="time bg-clip-text text-transparent bg-gradient-to-r from-white/60 to-white/60 font-bold text-6xl select-none">
          {time}
        </p>
      </motion.div>
      <motion.div
        className="absolute bottom-0 left-0 right-0 flex flex-col justify-center items-center mb-14 space-y-2"
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
            className="input bg-white/30 outline-none border-none rounded-full backdrop-blur-md text-white placeholder-white/60 py-1 px-3 focus:ring-0 w-40 font-medium text-xs select-none"
          />
          {messageAttempt && (
            <p className="animation text-white/90 text-xs text-center mt-2">
              {messageAttempt}
            </p>
          )}
        </form>
      </motion.div>
    </>
  );
}
