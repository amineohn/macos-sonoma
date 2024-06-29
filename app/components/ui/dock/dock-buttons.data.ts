export const dock_buttons: DockButton[] = [
  { title: "Finder", logo: "/static/images/finder-logo.png" },
  {
    title: "Launchpad",
    logo: "/static/images/launchpad-logo.png",
    action: (setOpenLaunchpad, openLaunchPad) => {
      setOpenLaunchpad(!openLaunchPad);
    },
  },
  { title: "Safari", logo: "/static/images/safari-logo.png" },
  { title: "Music", logo: "/static/images/music-logo.png" },
  { title: "Mail", logo: "/static/images/mail-logo.png" },
  { title: "Photos", logo: "/static/images/photos-logo.png" },
  { title: "Contacts", logo: "/static/images/contacts-logo.png" },
  { title: "Calendar", logo: "/static/images/calendar-logo.png" },
  { title: "Stocks", logo: "/static/images/stocks-logo.png" },
  { title: "Maps", logo: "/static/images/maps-logo.png" },
  { title: "Note", logo: "/static/images/note-logo.png" },
  { title: "Settings", logo: "/static/images/settings-logo.png" },
  { title: "Reminders", logo: "/static/images/reminders-logo.png" },
  { title: "News", logo: "/static/images/news-logo.png" },
];
