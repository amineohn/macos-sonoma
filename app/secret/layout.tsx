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
      <body>{children}</body>
    </html>
  );
}
