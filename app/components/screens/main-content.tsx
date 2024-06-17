"use client";

import { motion } from "framer-motion";
import { Icons } from "~/app/components/ui/icons";
import { LockScreen } from "~/app/components/screens/lock";
import { Toast } from "~/app/components/ui/toast";

export function MainContent() {
  return (
    <>
      <motion.div
        className="flex justify-end items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Icons
          name="battery"
          className="w-6 h-6 text-black hover:cursor-clicking mr-2"
        />
        <Icons
          name="wifi"
          className="w-6 h-6 text-black hover:cursor-clicking mr-2"
        />
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
  );
}
