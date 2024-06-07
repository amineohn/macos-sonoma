"use client";
import { useEffect, useState } from "react";
import { Icons } from "./components/icons";
import { motion } from "framer-motion";
import { set, get } from "js-cookie";
import { LockScreen } from "./components/lockscreen";
import { Toast } from "./components/ui/toast";

export default function Page() {
  const [showLoading, setShowLoading] = useState(false);
  useEffect(() => {
    const show = get("show");

    if (!show) {
      set("show", "true");
      setShowLoading(true);
    }
  }, []);

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

          <Toast
            title={"Notification"}
            image="/static/images/no-app-icon.png"
            message={
              <>
                Si vous voulez accéder à ce Mac, veuillez saisir le mot de passe
                suivant : password
              </>
            }
            time="maintenant"
          />

          <LockScreen />
        </>
      )}
    </>
  );
}
