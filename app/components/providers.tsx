"use client";
import { StoreProvider } from "easy-peasy";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { useStore } from "../store";
export function Providers({
  children,
  pageProps,
}: {
  children: ReactNode;
  pageProps: any;
}) {
  const store = useStore(pageProps?.ssrStoreState);
  return (
    <StoreProvider store={store}>
      <ThemeProvider attribute="class" defaultTheme="light">
        {children}
      </ThemeProvider>
    </StoreProvider>
  );
}
