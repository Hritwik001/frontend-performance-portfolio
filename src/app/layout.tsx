import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { CursorSpotlight } from "@/components/motion/CursorSpotlight";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { MotionConfig } from "framer-motion";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Hritwik Tiwary | Frontend Engineer (React & Next.js)",
  description:
    "Frontend engineer working across React and Next.js — product interfaces, dashboards, and design systems, with a specialty in measurable performance optimization.",
  openGraph: {
    title: "Hritwik Tiwary | Frontend Engineer (React & Next.js)",
    description:
      "Frontend engineering portfolio: product builds and documented React/Next.js performance case studies.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hritwik Tiwary Frontend Engineering Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hritwik Tiwary | Frontend Engineer (React & Next.js)",
    description:
      "Frontend engineer working across React and Next.js, with a specialty in performance.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <MotionConfig reducedMotion="user">
          <ScrollProgress />
          <CursorSpotlight />
          {children}
        </MotionConfig>
      </body>
    </html>
  );
}
