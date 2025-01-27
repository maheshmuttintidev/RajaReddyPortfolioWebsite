import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raja Reddy Nagendla",
  description: "Raja Reddy Nagendla's Portfolio Website. He is an DevOps Engineer - Fresher Level", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <Button
          asChild
          variant="default"
          className="w-full md:w-auto group cursor-pointer absolute inset-0 z-50"
        >
          <a
            href="/resume.pdf"
            download
            className="cursor-pointer md:text-2xl text-xl py-3"
          >
            <Download className="mr-2 h-4 w-4 md:h-12 md:w-12 group-hover:animate-bounce" />
            Download Resume
          </a>
        </Button>
        {children}
      </body>
    </html>
  );
}
