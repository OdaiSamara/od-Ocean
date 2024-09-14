import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import { Navbar } from "./Component/Navbar";
import Footer from "./Component/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Ocean",
  description: "best modern crn dashboard for engineering teams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-900 text-slate-400 text-lg min-h-screen overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
