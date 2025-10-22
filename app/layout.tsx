import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "@/components/navbar";
import PageTransition from "@/components/page-transition";
import { Suspense } from "react";
import { Orbitron } from "next/font/google"; 

// Orbitron for Headings
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "DevSource Members",
  description: "Meet the talented members of the DevSource community.",
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} dark`}>
      <body>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <PageTransition>
            <main className="min-h-screen pt-16">{children}</main>
          </PageTransition>
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
