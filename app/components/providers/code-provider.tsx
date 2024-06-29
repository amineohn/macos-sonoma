"use client";

import { createContext, useState, useEffect, ReactNode } from "react";

export const CodeContext = createContext<{
  code: string;
  setCode: (code: string) => void;
}>({
  code: "",
  setCode: () => {},
});

export function CodeProvider({ children }: { children: ReactNode }) {
  const [code, setCode] = useState("");

  useEffect(() => {
    const item = localStorage.getItem("code");
    if (item) {
      setCode(item);
    }
  }, []);

  return (
    <CodeContext.Provider value={{ code, setCode }}>
      {children}
    </CodeContext.Provider>
  );
}
