import { IoIosBluetooth, IoIosWifi } from "react-icons/io";
import { Icons } from "~/app/components/ui/icons";

export const items = [
  {
    icon: <IoIosWifi />,
    label: "Wi-Fi",
    status: "Home",
  },
  {
    icon: <IoIosBluetooth />,
    label: "Bluetooth",
    status: "On",
  },
  {
    icon: <Icons name="bluetooth" />,
    label: "AirDrop",
    status: "Contacts Only",
  },
];
