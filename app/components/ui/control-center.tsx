import { Icons } from "~/app/components/ui/icons";

interface ControlCenterProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function ControlCenter({ isOpen, setIsOpen }: ControlCenterProps) {
  const toggleControlCenter = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0 bg-gray-700/50 transition-opacity"
              onClick={toggleControlCenter}
            ></div>
            <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex">
              <div className="relative w-screen max-w-md">
                <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                  <div className="px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <h2 className="text-lg font-medium text-gray-900">
                        Control Center
                      </h2>
                      <div className="ml-3 h-7 flex items-center">
                        <button
                          className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
                          onClick={toggleControlCenter}
                        >
                          <span className="sr-only">Close panel</span>
                          <Icons name="close" className="w-6 h-6" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 relative flex-1 px-4 sm:px-6">
                    <div className="absolute inset-0 px-4 sm:px-6">
                      <div
                        className="h-full border-2 border-dashed border-gray-200"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div className="relative h-full">
                      <div className="space-y-6">
                        <div className="space-y-1">
                          <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                            System Preferences
                          </h3>
                          <ul className="space-y-2">
                            <li>
                              <a
                                href="#"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                              >
                                Sound
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                              >
                                Network
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                              >
                                Battery
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                            Shortcuts
                          </h3>
                          <ul className="space-y-2">
                            <li>
                              <a
                                href="#"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                              >
                                Safari
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                              >
                                Mail
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                              >
                                Messages
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                            Widgets
                          </h3>
                          <ul className="space-y-2">
                            <li>
                              <a
                                href="#"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                              >
                                Weather
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                              >
                                News
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
}
