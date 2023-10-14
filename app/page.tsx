"use client";
import { useRouter } from "next/navigation";
import Dock from "./components/dock";
import { MenuBar } from "./components/menu-bar";
import { useEffect } from "react";
import Cookies from "js-cookie";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const hasVisitedStartingPage = Cookies.get("hasVisitedStartingPage");

    if (!hasVisitedStartingPage) {
      Cookies.set("hasVisitedStartingPage", "true");
      router.push("/starting");
    }
  }, []);

  return (
    <>
      <MenuBar />
      <Dock />
    </>
  );
}
