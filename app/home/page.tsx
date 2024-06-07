"use client";
import Dock from "../components/dock";
import { MenuBar } from "../components/menu-bar";
export default function Page() {
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

      <div className="flex justify-center items-center my-auto select-none">
        <div className="flex flex-shrink-0 justify-center items-center w-[16.25rem] h-[14.5rem]">
          <div className="flex-shrink-0 w-[16.25rem] h-[14.5rem]">
            <div className="flex-shrink-0 relaztive w-[16.25rem] h-[14.5rem]">
              <div className="shadowZ absolute flex-shrink-0 w-[16.25rem] h-[14.5rem] rounded-[0.625rem] bg-white p-5"></div>
              <div className="absolute z-50 alert_backing flex-shrink-0 w-[16.25rem] h-[14.5rem] rounded-[0.625rem] bg-[#f6f6f6]/[.60] p-3">
                <div className="flex justify-center items-center space-y-5 flex-col mt-4">
                  <img
                    src="/static/images/no-app-icon.png"
                    className="w-16 h-16"
                  />
                  <p className="text-md font-semibold text-black mt-2">
                    Eh bien, c'est un peu vide ici...
                  </p>
                  <span className="text-xs text-center text-black mt-1">
                    Je dois te dire que la reproduction de MacOS Sonoma est très
                    loin d'être fini.
                  </span>
                </div>
              </div>
              <div className="inner_shadow flex-shrink-0 w-[16.25rem] h-[14.5rem] rounded-[0.625rem] bg-black/0" />
              <div className="flex flex-shrink-0 justify-center items-center w-5 h-5"></div>
            </div>
          </div>
        </div>
      </div>
      <Dock />
    </>
  );
}
