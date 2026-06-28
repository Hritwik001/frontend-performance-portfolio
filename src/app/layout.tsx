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
  title: "Hritwik Tiwary | React & Next.js Performance Engineer",
  description:
    "Frontend performance engineering for React and Next.js applications. Case studies in dashboard optimization, React Profiler analysis, Core Web Vitals, and measurable performance improvements.",
  openGraph: {
    title: "Hritwik Tiwary | React & Next.js Performance Engineer",
    description:
      "Documented React and Next.js performance case studies with measurable frontend optimization results.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hritwik Tiwary React and Next.js Performance Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hritwik Tiwary | React & Next.js Performance Engineer",
    description:
      "Frontend performance engineering for React and Next.js applications.",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
