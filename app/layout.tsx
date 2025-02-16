import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/navbar";

const rubik = Rubik({ subsets: ["latin", "arabic"], display: "swap" });

export const metadata: Metadata = {
  title: "Rekaz | Mini Website Builder",
  description: "Mini website builder for non-technical users",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.className} antialiased min-h-screen max-h-screen overflow-hidden flex flex-col`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
