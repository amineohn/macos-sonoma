import { capitalize } from "~/app/components/ui/menu-bar/capitalize";

export function showDate() {
  const currentDate = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  const formattedDate = new Intl.DateTimeFormat("fr-FR", options).format(
    currentDate
  );
  const capitalizedDate = capitalize(formattedDate);

  return capitalizedDate.replace(".,", " ").replace(".", "");
}
