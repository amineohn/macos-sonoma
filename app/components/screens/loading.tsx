"use client";

import classNames from "classnames";
import { useEffect, useState } from "react";
import { Icons } from "~/app/components/ui/icons";
import { motion } from "framer-motion";
import { set, get } from "js-cookie";
import { Toast } from "~/app/components/ui/notifications/toast";
import { LockScreen } from "~/app/components/screens/lock";

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
      }, 500);

      return () => clearInterval(interval);
    }
  }, [showLoading]);

  const loadingClasses = classNames("", {
    "flex flex-col space-y-10 justify-center items-center h-screen bg-black transition-all ease-in-out overflow-hidden z-50 removable":
      showLoading,
    hidden: !showLoading,
  });

  return (
    <>
      <motion.div
        className={loadingClasses}
        initial={{ opacity: 0 }}
        animate={{ opacity: showLoading ? 1 : 0 }}
        transition={{ duration: 0.5 }}
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
      {!showLoading && (
        <>
          <div className="flex justify-end items-center">
            <Icons
              name="battery"
              className="w-6 h-6 text-black hover:cursor-clicking mr-2"
            />
            <Icons
              name="wifi"
              className="w-6 h-6 text-black hover:cursor-clicking mr-2"
            />
          </div>

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
