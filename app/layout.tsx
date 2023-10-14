"use client";
import { StoreProvider } from "easy-peasy";
import "./globals.css";
import { useStore } from "./store";

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
        <StoreProvider store={store}>{children}</StoreProvider>
      </body>
    </html>
  );
}
