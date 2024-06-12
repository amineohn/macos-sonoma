"use client";

import { AiOutlineLoading } from "react-icons/ai";
import { RiDiscordFill } from "react-icons/ri";
import { useLanyard } from "react-use-lanyard";

export function DiscordUser() {
  const { loading, status } = useLanyard({
    userId: "762055588762877973",
    socket: true,
  });
  return (
    <div className="p-3">
      <div className="flex items-center space-x-2">
        <RiDiscordFill />
        <p className="text-xs font-semibold">Discord Status</p>
      </div>
      <div className="flex justify-center items-center mt-6">
        {loading ? (
          <AiOutlineLoading className="animate-spin w-7 h-7" />
        ) : (
          <>
            {status?.discord_status === "dnd" && (
              <div className="flex items-center">
                <div className="relative h-fill w-4">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <div className="w-2 h-2 rounded-full inset-0 bg-red-400 absolute animate-ping"></div>
                </div>
                <p>Invisible</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
