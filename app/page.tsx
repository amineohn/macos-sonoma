"use client";
import { useRouter } from "next/navigation";
import Dock from "./components/dock";
import { MenuBar } from "./components/menu-bar";
import { useEffect } from "react";
import Cookies from "js-cookie";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const hasVisitedStartingPage = Cookies.get("hasVisitedStartingPage");

    if (!hasVisitedStartingPage) {
      Cookies.set("hasVisitedStartingPage", "true");
      router.push("/starting");
    }
  }, []);

  return (
    <>
      <MenuBar />
      <div className="p-3">
        <div className="flex justify-end select-none space-x-2">
          <div className="flex flex-col items-center">
            <div className="w-[310px] h-[150px] rounded-2xl bg-white shadow"></div>
            <div className="inline-flex items-center space-y-3 space-x-2">
              <br />
              <div className="w-[150px] h-[150px] rounded-2xl bg-white shadow">
                <div className="p-3">
                  <h3 className="text-rose-700 font-semibold text-sm">
                    Samedi
                  </h3>
                  <span className="text-xl font-bold">5</span>
                  <div className="space-y-2 overflow-auto">
                    <div>
                      <div className="bg-rose-700/50 w-2 h-[36px] rounded-md absolute"></div>
                      <div className="bg-rose-700/10 ml-3 rounded-md py-0.5">
                        <div className="flex flex-col ml-1">
                          <span className="text-xs text-rose-700 font-semibold">
                            Setup things
                          </span>
                          <span className="text-xs text-rose-700 font-semibold">
                            12:00
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="bg-blue-700/50 w-2 h-[36px] rounded-md absolute"></div>
                      <div className="bg-blue-700/10 ml-3 rounded-md py-0.5">
                        <div className="flex flex-col ml-1">
                          <span className="text-xs text-blue-700 font-semibold">
                            Setup things
                          </span>
                          <span className="text-xs text-blue-700 font-semibold">
                            12:00
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[150px] h-[150px] rounded-2xl bg-white shadow">
                <div className="bg-yellow-500 w-[150px] h-[38px] rounded-t-2xl absolute"></div>
                <div className="py-10 px-3">
                  <div className="flex justify-between flex-col">
                    <div>
                      <h2 className="text-lg font-bold">test</h2>
                    </div>
                    <div>
                      <p className="text-sm">ok ok</p>
                    </div>
                    <div>
                      <time className="text-xs">12:00</time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dock />
    </>
  );
}
