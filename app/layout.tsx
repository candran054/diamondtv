import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const poppin = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DiamondTV",
  description: "All about your favorites movies & tv shows",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppin.className}>
      <body className="flex flex-col h-screen antialiased">
        <Navbar />

        {children}
      </body>
    </html>
  );
}
