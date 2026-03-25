import Footer from "@/components/sections/Layout/Footer";
import MNavbar from "@/components/sections/Layout/MNavbar"; // Ensure the path is correct
import "./globals.css";

export const metadata = {
  title: "LocusHQ | Engineering Growth",
  description: "A technical marketing studio specializing in AI lead journeys.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white flex flex-col min-h-screen">
        {/* Called here: Visible on mobile only due to internal md:hidden class */}
        <MNavbar />
        
        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}