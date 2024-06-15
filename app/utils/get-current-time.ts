export function getCurrentTime() {
  return new Date()
    .toLocaleTimeString("fr-FR", {
      timeZone: "Europe/Paris",
      hour12: false,
    })
    .slice(0, -3);
}
