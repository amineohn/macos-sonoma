import Dock from "./components/dock";
import { Icons } from "./components/icons";
import { MenuBar } from "./components/menu-bar";

export default function Home() {
  return (
    <>
      <MenuBar />
      <Dock />
    </>
  );
}
