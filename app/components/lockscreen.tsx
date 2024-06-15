"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { IoRefresh } from "react-icons/io5";
import { getCurrentTime } from "~/app/utils/get-current-time";
import { getCurrentDate } from "~/app/utils/get-current-date";
export function LockScreen() {
  const router = useRouter();
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [messageAttempt, setMessageAttempt] = useState("");
  const [time, setTime] = useState(getCurrentTime());
  const [date, setDate] = useState(getCurrentDate());

  useEffect(() => {
    const alreadyLogged = localStorage.getItem("already-logged");
    if (alreadyLogged) {
      router.push("/home");
    }
  }, [router]);

  useEffect(() => {
    const updateDateTime = () => {
      setTime(getCurrentTime());
      setDate(getCurrentDate());
    };

    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".date, .time");
    elements.forEach((el) => {
      el.classList.add("transition-all", "duration-500");
    });
  }, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = (e.target as HTMLFormElement).querySelector("input");

    if (input) {
      if (input.value === "password") {
        router.push("/home");
        localStorage.setItem("already-logged", "true");
      } else {
        handleFailedAttempt(input);
      }
      input.value = "";
    }
  };

  const handleFailedAttempt = (input: HTMLInputElement) => {
    setFailedAttempts((prev) => {
      const newAttempts = prev + 1;
      const animationElements = document.getElementsByClassName("animation");
      const passwordFailedElements =
        document.getElementsByClassName("password-failed");

      if (newAttempts >= 3) {
        setMessageAttempt("Oops, 3 attempts failed.");
        Array.from(animationElements).forEach((element) => {
          element.classList.add("animate__fadeIn");
        });
        Array.from(passwordFailedElements).forEach((element) => {
          element.classList.add("disabled:bg-gray-200");
        });
      } else {
        input.classList.add("animate-shake", "animate-thrice");
        setTimeout(() => {
          input.classList.remove("animate-shake", "animate-thrice");
        }, 1000);
      }

      return newAttempts;
    });
  };

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
          <div className="inline-flex items-center space-x-2">
            <input
              type="password"
              placeholder="Enter Password"
              className="input password-failed bg-white/30 outline-none border-none rounded-full backdrop-blur-md text-white placeholder-white/60 py-1 px-3 focus:ring-0 w-40 font-medium text-xs select-none"
              disabled={failedAttempts === 3}
            />
            {failedAttempts === 3 && (
              <IoRefresh
                onClick={() => {
                  setFailedAttempts(0);
                }}
                className="text-white hover:animate-spinOnce cursor-pointer"
              />
            )}
          </div>
          {failedAttempts === 3 && (
            <p className="animation text-white/90 text-xs text-center mt-2">
              {messageAttempt}
            </p>
          )}
        </form>
      </motion.div>
    </>
  );
}
