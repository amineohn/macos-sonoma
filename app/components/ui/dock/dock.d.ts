interface DockButton {
  title: string;
  logo: string;
  action?: (
    setOpenLaunchpad: (state: boolean) => void,
    openLaunchPad: boolean
  ) => void;
}
