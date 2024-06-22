"use client";
import { useRouter } from "next/navigation";
import { MdArrowForwardIos } from "react-icons/md";

export function Home({ openDropdown }: { openDropdown: string }) {
  const router = useRouter();
  return (
    openDropdown === "home" && (
      <div className="shadow absolute left-0 w-48 h-[260px] mt-0.5 ml-2 max-w-full top-10 sm:right-1.5 p-1.5 text-black bg-white/30 backdrop-blur-md rounded-md select-none z-50">
        <div className="flex flex-col group">
          <button className="group-hover:bg-blue-500/90 group-hover:text-white w-full h-full p-1 rounded-md transition">
            <p className="text-xs text-start font-medium">About this mac</p>
          </button>
        </div>
        <div className="w-full h-[0.1px] bg-neutral-500/20 mt-1 mb-1" />
        <div className="flex flex-col">
          <button className="hover:bg-blue-500/90 hover:text-white w-full h-full p-1 rounded-md transition">
            <p className="text-xs text-start font-medium">System Settings...</p>
          </button>
          <button className="hover:bg-blue-500/90 hover:text-white w-full h-full p-1 rounded-md transition">
            <p className="text-xs text-start font-medium">App Store</p>
          </button>
        </div>
        <div className="w-full h-[0.1px] bg-neutral-500/20 mt-1 mb-1" />
        <div className="flex flex-col group">
          <button className="group-hover:bg-blue-500/90 group-hover:text-white w-full h-full p-1 rounded-md transition">
            <div className="flex justify-between items-center">
              <p className="text-xs text-start font-medium">Recent Items</p>
              <MdArrowForwardIos className="w-3 h-3 text-black group-hover:text-white" />
            </div>
          </button>
        </div>
        <div className="w-full h-[0.1px] bg-neutral-500/20 mt-1 mb-1" />
        <div className="flex flex-col">
          <button className="hover:bg-blue-500/90 hover:text-white w-full h-full p-1 rounded-md transition">
            <p className="text-xs text-start font-medium">Sleep</p>
          </button>
          <button className="hover:bg-blue-500/90 hover:text-white w-full h-full p-1 rounded-md transition">
            <p className="text-xs text-start font-medium">Restart</p>
          </button>
          <button className="hover:bg-blue-500/90 hover:text-white w-full h-full p-1 rounded-md transition">
            <p className="text-xs text-start font-medium">Shut Down</p>
          </button>
        </div>
        <div className="w-full h-[0.1px] bg-neutral-500/20 mt-1 mb-1" />
        <div className="flex flex-col">
          <button className="hover:bg-blue-500/90 hover:text-white w-full h-full p-1 rounded-md transition">
            <p className="text-xs text-start font-medium">Lock Screen</p>
          </button>
          <button
            className="hover:bg-blue-500/90 hover:text-white w-full h-full p-1 rounded-md transition"
            onClick={() => {
              localStorage.clear();
              router.push("/");
            }}
          >
            <p className="text-xs text-start font-medium">Log Out Amine...</p>
          </button>
        </div>
      </div>
    )
  );
}
