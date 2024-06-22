import { IoIosBluetooth, IoIosWifi } from "react-icons/io";
import { Icons } from "~/app/components/ui/icons";

export const items = [
  {
    icon: <IoIosWifi className="text-white" />,
    label: "Wi-Fi",
    status: "Home",
  },
  {
    icon: <IoIosBluetooth className="text-white" />,
    label: "Bluetooth",
    status: "On",
  },
  {
    icon: <Icons name="bluetooth" className="w-4 h-4 text-white" />,
    label: "AirDrop",
    status: "Contacts Only",
  },
];
