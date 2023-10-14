"use client";
import { StoreProvider } from "easy-peasy";
import "./globals.css";
import { useStore } from "./store";
import { ThemeProvider } from "next-themes";

export default function RootLayout({
  children,
  pageProps,
}: {
  children: React.ReactNode;
  pageProps: any;
}) {
  const store = useStore(pageProps?.ssrStoreState);

  return (
    <html lang="en">
      <body>
        <StoreProvider store={store}>
          <ThemeProvider attribute="class" defaultTheme="light">
            {children}
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
