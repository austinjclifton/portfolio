// src/app/layout.tsx

import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Merriweather, Public_Sans } from "next/font/google";

const headline = Merriweather({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-headline",
  display: "swap",
  adjustFontFallback: true,
});

const body = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
  display: "swap",
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: {
    default: "Austin Clifton | Software Developer",
    template: "%s | Austin Clifton",
  },
  description:
    "Software developer portfolio for Austin Clifton, featuring full-stack, mobile, IoT, and real-time application work.",
  applicationName: "Austin Clifton Portfolio",
  authors: [{ name: "Austin Clifton" }],
  creator: "Austin Clifton",
  openGraph: {
    title: "Austin Clifton | Software Developer",
    description:
      "Full-stack and mobile software portfolio featuring production-minded projects across web, iOS, IoT, and real-time systems.",
    siteName: "Austin Clifton Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Austin Clifton | Software Developer",
    description:
      "Portfolio featuring full-stack, mobile, IoT, and real-time application work.",
  },
  icons: {
    icon: [{ url: "/a.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`js ${headline.variable} ${body.variable}`}>
      <body className="min-h-dvh antialiased bg-bg text-text font-sans">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
