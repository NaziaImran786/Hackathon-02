import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { josefinSans, lato } from "@/font";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={josefinSans.className}>
      <body
        className={`${geistSans.variable} ${geistMono.variable}  ${josefinSans.className} ${lato.className} antialiased`}
      >
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
