"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
        <div 
          className="pointer-events-none fixed inset-0 z-30 transition duration-300 spotlight lg:block hidden"
          style={{
            "--x": `${mousePos.x}px`,
            "--y": `${mousePos.y}px`,
          } as React.CSSProperties}
        />
        <div className="mx-auto min-h-screen max-w-screen-xl lg:flex lg:justify-between lg:gap-4">
          <Sidebar />
          <main className="lg:ml-[280px] flex-1 px-6 py-12 lg:py-24">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
