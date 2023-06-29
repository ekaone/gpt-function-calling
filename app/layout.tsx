"use client";

import "./globals.css";
import { Inter } from "next/font/google";

// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GPT Function Calling",
  description: "GPT Function Calling by OpenAI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-dot flex flex-col items-center m-0">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
