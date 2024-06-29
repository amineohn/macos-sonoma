import "./globals.css";

export const metadata = {
  title: "MacOS Sonoma",
  description: "Re Production of MacOS Sonoma",
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
