"use client";
import { StoreProvider } from "easy-peasy";
import "./globals.css";
import { Inter } from "next/font/google";
import { useStore } from "./store";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <StoreProvider store={store}>{children}</StoreProvider>
      </body>
    </html>
  );
}
