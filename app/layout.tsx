import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import dynamic from "next/dynamic";
import React from "react";

import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const StarsCanvas = dynamic(
  () => import("@/components/main/StarBackground"),
  { ssr: false }
);

const inter = Inter({ subsets: ["latin"] });

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Elvis Kanyi | Full-Stack Developer Portfolio",
    template: "%s | Elvis Kanyi",
  },
  description:
    "Portfolio of Elvis Kanyi Wokabi — Full-Stack Engineer specializing in React, Next.js, Node.js, and scalable web applications.",
  keywords: [
    "Elvis Kanyi",
    "Full Stack Developer Kenya",
    "Next.js Developer",
    "React Developer",
    "Software Engineer Portfolio",
    "Web Developer Kenya",
  ],
  authors: [{ name: "Elvis Kanyi Wokabi" }],
  creator: "Elvis Kanyi Wokabi",

  metadataBase: new URL("https://elviskanyi.vercel.app"),

  openGraph: {
    title: "Elvis Kanyi | Full-Stack Developer Portfolio",
    description:
      "Full-Stack Engineer building modern web applications with React, Next.js, and scalable backend systems.",
    url: "https://elviskanyi.vercel.app",
    siteName: "Elvis Kanyi Portfolio",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Elvis Kanyi Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Elvis Kanyi | Full-Stack Developer",
    description:
      "Full-Stack Engineer specializing in modern web applications.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.className} ${headingFont.className}`}
    >
      <head>
        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://elviskanyi.vercel.app"
        />

        {/* Theme color */}
        <meta name="theme-color" content="#030014" />

        {/* Google verification */}
        <meta
          name="google-site-verification"
          content="F-H7qWt8QRPtrifGFm-zYLhD0agIRF2lPqEO9yipZxs"
        />

        {/* JSON-LD Structured Data (Person Schema) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Elvis Kanyi Wokabi",
              url: "https://elviskanyi.vercel.app",
              image: "https://elviskanyi.vercel.app/og-image.png",
              sameAs: [
                "https://www.linkedin.com/in/elvis-kanyi/",
                "https://www.facebook.com/kanyiwawokabi",
                "https://www.instagram.com/elviskanyi",
                "https://discord.gg/u599xnXpQ",
              ],
              jobTitle: "Full-Stack Engineer",
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Meru National Polytechnic",
              },
              email: "mailto:elviskanyi8@gmail.com",
            }),
          }}
        />
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
