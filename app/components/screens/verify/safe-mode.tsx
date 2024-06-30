"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import { IoRefresh } from "react-icons/io5";
import { getCurrentTime } from "~/app/utils/get-current-time";
import { getCurrentDate } from "~/app/utils/get-current-date";
import { Icons } from "~/app/components/ui/icons";
import axios from "axios";

export function SafeMode() {
  const router = useRouter();
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [code, setCode] = useState("");
  const [messageAttempt, setMessageAttempt] = useState("");
  const [time, setTime] = useState(getCurrentTime());
  const [date, setDate] = useState(getCurrentDate());

  const [message, setMessage] = useState("");
  const handleVerify = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const input = (e.target as HTMLFormElement).querySelector("input");

      const response = await axios.post("/api/auth/code/verify", { code });

      if (input) {
        if (response.data.message === "Code verified") {
          localStorage.setItem("code", code);
          router.push("/secret");
          setMessage("Code verified");
        } else {
          handleFailedAttempt(input);
        }
      }
    } catch (error) {
      setMessage("Invalid code");
    }
  };
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
          element.classList.add("border", "border-red-500/70");
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
      <div className="flex justify-end items-center">
        <p className="text-xs font-semibold select-none text-red-500 mr-5">
          Safe Mode
        </p>
        <Icons
          name="battery"
          className="w-6 h-6 text-white hover:cursor-clicking mr-2"
        />
        <Icons
          name="wifi"
          className="w-6 h-6 text-white hover:cursor-clicking mr-2"
        />
      </div>
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
        <Image
          alt={"Administrator"}
          className="w-10 h-10 rounded-full text-white mr-2"
          src="https://avatars.githubusercontent.com/u/38817327?v=4"
          width={500}
          height={500}
        />

        <p className="text-white font-medium text-xs select-none">
          Administrator
        </p>
        <form onSubmit={handleVerify}>
          <div className="inline-flex items-center space-x-2">
            <input
              type="password"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter Password"
              className="input password-failed bg-white/30 outline-none border-none rounded-full backdrop-blur-md text-white placeholder-white/60 py-1 px-3 focus:ring-0 w-40 font-medium text-xs select-none"
              disabled={failedAttempts === 3}
            />
            {failedAttempts === 3 && (
              <IoRefresh
                onClick={() => {
                  setFailedAttempts(0);
                  setMessageAttempt("");
                }}
                className="text-white hover:animate-spinOnce cursor-pointer"
              />
            )}
          </div>
          {message && (
            <p className="animation text-white/90 text-xs text-center mt-2">
              {message}
            </p>
          )}
          {failedAttempts === 3 && !message && (
            <p className="animation text-white/90 text-xs text-center mt-2">
              {messageAttempt}
            </p>
          )}
        </form>
      </motion.div>
    </>
  );
}
