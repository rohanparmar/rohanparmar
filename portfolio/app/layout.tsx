import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import CyberspaceCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-cyber" });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Rohan Parmar's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${orbitron.variable} bg-black overflow-y-scroll overflow-x-hidden`}>
        <CyberspaceCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
