"use client";
import Dock from "../components/dock";
import { MenuBar } from "../components/menu-bar";

export default function Page() {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        className="absolute z-[-1] w-full h-full object-cover"
      >
        <source
          src="http://sylvan.apple.com/itunes-assets/Aerials126/v4/ec/eb/c8/ecebc8d2-5486-c2b2-52ae-6f0ab2d6b65f/W010_C003_F01_third_sdr_4k_qp24_15Mbps_240p_t2160_tsa.mov"
          type="video/mp4"
        />
      </video>
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
