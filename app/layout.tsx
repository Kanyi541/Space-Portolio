import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";
const inter = Inter({ subsets: ["latin"] });
const headingFont = Space_Grotesk({ subsets: ["latin"], weight: "400", style: "normal", display: "swap" });
import "./globals.css";
import dynamic from "next/dynamic";
const StarsCanvas = dynamic(() => import("@/components/main/StarBackground"), { ssr: false });
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import React from "react";

export const metadata: Metadata = {
  title: "Space Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} ${headingFont.className}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Elvis Kanyi Wokabi",
  "url": "https://your-portfolio-domain.com",
  "sameAs": [
    "https://www.linkedin.com/in/elvis-kanyi/",
    "https://www.facebook.com/kanyiwawokabi",
    "https://www.instagram.com/elviskanyi",
    "https://discord.gg/u599xnXpQ"
  ],
  "jobTitle": "Full‑Stack Engineer",
  "alumniOf": "Meru National Polytechnic",
  "telephone": "+254 111-428",
  "email": "elviskanyi8@gmail.com"
}) }}></script>
        <meta name="theme-color" content="#030014" />
      </head>
      <body className="bg-[#01030c] text-gray-200 min-h-screen flex flex-col">
        <StarsCanvas />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
