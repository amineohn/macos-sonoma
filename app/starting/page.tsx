"use client";
import { Icons } from "../components/icons";
import { useState, useEffect } from "react";
import { variants } from "../constants/variants-animations";
import { motion } from "framer-motion";

export default function Page() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        window.location.replace("/");
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
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      className="flex flex-col space-y-10 justify-center items-center h-screen bg-black"
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
  );
}
