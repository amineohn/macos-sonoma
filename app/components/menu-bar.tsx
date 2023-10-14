import { Icons } from "./icons";

export function MenuBar() {
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
    const capitalizedDate =
      formattedDate?.charAt(0).toUpperCase() + formattedDate?.slice(1);
    return capitalizedDate?.replace(".,", " ")?.replace(".", "");
  }
  return (
    <div className="relative w-full h-9 select-none">
      <div className="absolute inset-0">
        <div className="w-full h-full bg-white opacity-50 text-black flex items-center justify-center z-1"></div>
        <div className="absolute top-0 w-full z-50">
          <div className="flex items-center w-full justify-between h-9 px-1">
            <div className="inline-flex items-center space-x-1.5">
              <div className="hover:bg-white/10 px-1.5 py-1.5 rounded-md transition">
                <Icons
                  name="apple"
                  className="w-6 h-6 text-white opacity-100"
                />
              </div>
              <button className="hover:bg-white/10 px-1.5 py-1.5 rounded-md transition ml-10">
                <p className="text-xs font-medium text-white mix-blend-hard-light">
                  Finder
                </p>
              </button>
              <button className="hover:bg-white/10 px-1.5 py-1.5 rounded-md transition ml-10">
                <p className="text-xs text-white mix-blend-hard-light">File</p>
              </button>
              <button className="hover:bg-white/10 px-1.5 py-1.5 rounded-md transition ml-10">
                <p className="text-xs font-medium text-white mix-blend-hard-light">
                  Edit
                </p>
              </button>
              <button className="hover:bg-white/10 px-1.5 py-1.5 rounded-md transition ml-10">
                <p className="text-xs font-medium text-white mix-blend-hard-light">
                  View
                </p>
              </button>
              <button className="hover:bg-white/10 px-1.5 py-1.5 rounded-md transition ml-10">
                <p className="text-xs font-medium text-white mix-blend-hard-light">
                  Go
                </p>
              </button>
              <button className="hover:bg-white/10 px-1.5 py-1.5 rounded-md transition ml-10">
                <p className="text-xs font-medium text-white mix-blend-hard-light">
                  Window
                </p>
              </button>
              <button className="hover:bg-white/10 px-1.5 py-1.5 rounded-md transition ml-10">
                <p className="text-xs font-medium text-white mix-blend-hard-light">
                  Help
                </p>
              </button>
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
                  <span className="text-white px-2 mt-1 text-xs font-medium opacity-100">
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
  );
}
