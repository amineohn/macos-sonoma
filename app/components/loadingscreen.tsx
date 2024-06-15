"use client";

import { useEffect, useState } from "react";
import { Icons } from "~/app/components/icons";
import { motion } from "framer-motion";
import { set, get } from "js-cookie";
import { MainContent } from "~/app/components/main-content";

export function LoadingScreen() {
  const [showLoading, setShowLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const show = get("show");
    if (!show) {
      set("show", "true");
      setShowLoading(true);
    }
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        setShowLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [progress]);

  useEffect(() => {
    if (showLoading) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => Math.min(prevProgress + 10, 100));
      }, 700);

      return () => clearInterval(interval);
    }
  }, [showLoading]);

  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return showLoading ? (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      className="flex flex-col space-y-10 justify-center items-center h-screen bg-black transition-all ease-in-out"
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Icons name="apple" className="w-36 h-36 text-white opacity-100" />
      <div className="w-64 h-1.5 bg-white/50 rounded-full overflow-hidden">
        <div
          className="h-full bg-white rounded-full"
          style={{ width: `${progress}%`, transition: "width 1s ease-in-out" }}
        ></div>
      </div>
    </motion.div>
  ) : (
    <MainContent />
  );
}
