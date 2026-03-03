import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Literata } from "next/font/google";
import "./globals.css";

const literata = Literata({
  subsets: ["latin"],
  variable: "--font-literata",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.recruitpalz.com'),
  title: "RecruitPalz - The #1 Automated Recruiting Tool",
  description: "AI-Powered Recruiting Platform Built by Recruiting Professionals. Automate job creation, candidate screening, interviews, background checks, and more. Try 14 days free.",
  keywords: ["recruitment automation", "AI recruiting", "automated hiring", "candidate screening", "recruiting software", "HR automation"],
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title: "RecruitPalz - The #1 Automated Recruiting Tool",
    description: "AI-Powered Recruiting Platform Built by Recruiting Professionals. Automate your entire recruitment process.",
    type: "website",
    images: [
      {
        url: "/meta/og.jpg",
        width: 1200,
        height: 630,
        alt: "RecruitPalz - The #1 Automated Recruiting Tool",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://unisco.sfo3.digitaloceanspaces.com" />
        <link rel="dns-prefetch" href="https://unisco.sfo3.digitaloceanspaces.com" />
        {/* Preload critical hero image */}
        <link rel="preload" as="image" href="/images/hero-bg-lg.webp" />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} ${literata.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
