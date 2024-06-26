import { Dock } from "~/app/components/ui/dock";
import { MenuBar } from "~/app/components/ui/menu-bar";
import { Toast } from "~/app/components/ui/notifications/toast";
import { Calendar } from "~/app/components/widgets/calendar";
import { Weather } from "~/app/components/widgets/weather";

export function Home() {
  return (
    <>
      <MenuBar />
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
      <Dock />
    </>
  );
}
