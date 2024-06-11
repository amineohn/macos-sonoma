"use client";

import { useLanyard } from "react-use-lanyard";

export function DiscordUser() {
  const { loading, status /*, websocket */ } = useLanyard({
    userId: "762055588762877973",
    socket: true,
  });
  return (
    <div className="bg-gray-50/30 ring-2 hover:ring transition hover:ring-offset-2 ring-neutral-300/20 w-64 h-56 rounded-xl">
      {status?.discord_status}
    </div>
  );
}
