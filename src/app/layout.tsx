import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hritwik-frontend-portfolio.vercel.app"),
  title: "My Tango Events | Find your next dance",
  description:
    "Discover Argentine tango events worldwide. Find milongas, festivals, and workshops, or share your own event with a global dance community.",
  openGraph: {
    title: "My Tango Events | Find your next dance",
    description:
      "Discover Argentine tango events worldwide.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "My Tango Events",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Tango Events | Find your next dance",
    description:
      "Discover Argentine tango events worldwide.",
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
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
