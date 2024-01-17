import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Toaster } from "./components/ui/Toaster";

const poppin = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Science Fiction/Fantasy",
  description: "For the people who love fantasy",
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

        <Toaster />
      </body>
    </html>
  );
}
