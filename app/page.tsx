import Dock from "./components/dock";
import { Icons } from "./components/icons";

export default function Home() {
  function showDate() {
    const date = new Date();
    const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    const formattedDate = new Intl.DateTimeFormat(
      "fr-FR",
      options as any
    ).format(date);
    return formattedDate;
  }

  return (
    <>
      <div className="relative w-full h-9">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-white opacity-50 text-black flex items-center justify-center z-1"></div>
          <div className="absolute top-0 w-full z-50">
            <div className="flex items-center w-full justify-between h-9">
              <div>
                <div className="hover:bg-white/10 px-1 py-0.5 rounded-md transition">
                  <Icons
                    name="apple"
                    className="w-6 h-6 text-white opacity-100"
                  />
                </div>
              </div>
              <div>
                <div className="inline-flex items-center justify-center py-2">
                  <div className="hover:bg-white/10 px-1 py-0.5 rounded-md transition">
                    <Icons
                      name="battery"
                      className="w-7 h-6 ml-0.5 text-white opacity-100"
                    />
                  </div>
                  <div className="hover:bg-white/10 px-1 py-0.5 rounded-md transition">
                    <Icons
                      name="wifi"
                      className="w-6 h-6 text-white opacity-100"
                    />
                  </div>
                  <div className="hover:bg-white/10 px-1 py-0.5 rounded-md transition">
                    <Icons
                      name="search"
                      className="w-7 h-6 text-white opacity-100"
                    />
                  </div>
                  <div className="hover:bg-white/10 px-1 py-0.5 rounded-md transition">
                    <Icons
                      name="control"
                      className="w-7 h-6 text-white opacity-100"
                    />
                  </div>
                  <div className="hover:bg-white/10 px-1 py-0.5 rounded-md transition">
                    <span className="text-white ml-2 text-sm opacity-100">
                      {showDate()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gray-700/50 flex px-2 justify-between items-center mix-blend-color-burn backdrop-filter backdrop-blur-[51.8036px] z-0"></div>
      </div>
      <Dock />
    </>
  );
}
