import { CodeProvider } from "~/app/components/providers/code-provider";

export const metadata = {
  title: "House",
  description: "R",
  metadataBase: new URL("https://house.amineohn.me"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <CodeProvider>
        <body>{children}</body>
      </CodeProvider>
    </html>
  );
}
