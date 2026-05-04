// app/layout.tsx
import "./globals.css";
import ClientLayout from "./ClientLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Remove className={inter.className} */}
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}