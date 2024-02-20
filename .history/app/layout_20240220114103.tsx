export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  <meta />
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
