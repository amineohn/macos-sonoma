import "./globals.css";
import { Providers } from "./components/providers";
export const metadata = {
  title: "MacOS Sonoma",
  description: "Reproduction of MacOS Sonoma",
  metadataBase: new URL("https://macos.amineohn.me"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
