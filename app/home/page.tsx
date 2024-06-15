import Dock from "../components/dock";
import { MenuBar } from "../components/menu-bar";
import { Toast } from "../components/ui/toast";
import { Calendar } from "../components/widgets/calendar";
import { Weather } from "../components/widgets/weather";
export default function Page() {
  return (
    <div className="background">
      <MenuBar />
      <div className="p-3">
        <div className="flex justify-end select-none space-x-2">
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center space-y-3 space-x-2">
              <br />
              <Weather />
              <Calendar />
            </div>
          </div>
        </div>
      </div>

      <Toast
        title={"Notification"}
        image="/static/images/no-app-icon.png"
        message={
          <>
            Je dois te dire que la reproduction de MacOS Sonoma est très loin
            d'être fini.
          </>
        }
        time="maintenant"
      />
      <Dock />
    </div>
  );
}
