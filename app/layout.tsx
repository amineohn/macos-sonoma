import "./globals.css";
import Providers from "./components/providers";
export const metadata = {
  title: "MacOS Sonoma",
  description: "Reproduction of MacOS Sonoma",
  metadataBase: new URL("https://macos.amineohn.me"),
};

export default function RootLayout({
  children,
  pageProps,
}: {
  children: React.ReactNode;
  pageProps: any;
}) {
  return (
    <html lang="en">
      <body>
        <Providers children={children} pageProps={pageProps} />
      </body>
    </html>
  );
}
