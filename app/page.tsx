"use client";
import { FormEvent, useEffect, useState } from "react";
import { Icons } from "./components/icons";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function Page() {
  const router = useRouter();
  const [showLoading, setShowLoading] = useState(false);
  useEffect(() => {
    const show = Cookies.get("show");

    if (!show) {
      Cookies.set("show", "true");
      setShowLoading(true);
    }
  }, []);
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
      setInterval(() => {
        input.classList.remove("animate-shake", "animate-thrice");
      }, 1000);
      input.classList.add("animate-shake", "animate-thrice");
      input.value = "";
    }
  }
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setShowLoading(false);
      }, 1000);
    }
  }, [progress]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        } else {
          return prevProgress + 10;
        }
      });
    }, 700);

    return () => clearInterval(interval);
  }, []);
  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <>
      {showLoading && (
        <motion.div
          initial="initial"
          animate={showLoading ? "animate" : "initial"}
          exit="exit"
          variants={variants}
          className="flex flex-col space-y-10 justify-center items-center h-screen bg-black transition-all ease-in-out"
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          <Icons name="apple" className="w-36 h-36 text-white opacity-100" />
          <div className="w-64 h-1.5 bg-white/50 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full"
              style={{
                width: `${progress}%`,
                transition: "width 1s ease-in-out",
              }}
            ></div>
          </div>
        </motion.div>
      )}
      {!showLoading && (
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

          <div className="flex justify-end w-full px-3 py-3 select-none">
            <div className="shadowZ absolute flex-shrink-0 w-[346px] h-[75px] rounded-[0.625rem] bg-white p-5"></div>
            <div className="absolute z-50 alert_backing flex-shrink-0 rounded-[0.625rem] w-[346px] h-[75px]  bg-[#f6f6f6]/[.50] p-3">
              <div className="flex justify-end items-center absolute right-0 pr-2">
                <span className="text-xs font-light text-neutral-950">
                  maintenant
                </span>
              </div>
              <div className="inline-flex space-x-2 items-center ">
                <img
                  src="/static/images/no-app-icon.png"
                  className="w-10 h-10"
                />
                <div className="flex flex-col">
                  <p className="text-sm font-semibold text-black/80">
                    Notification
                  </p>
                  <span className="text-xs font-normal text-black/60">
                    Si vous voulez accéder à ce Mac, veuillez saisir le mot de
                    passe suivant : password
                  </span>
                </div>
              </div>
            </div>
            <div className="inner_shadow flex-shrink-0 rounded-[0.625rem] bg-black/0" />
            <div className="flex flex-shrink-0 justify-center items-center w-5 h-5"></div>
          </div>
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
      )}
    </>
  );
}
