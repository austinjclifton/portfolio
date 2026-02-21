// src/app/layout.tsx

import "@/styles/globals.css";
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
  title: "Austin Clifton's Portfolio",
  description: "Portfolio",
  openGraph: {
    title: "Austin Clifton's Portfolio",
    description: "Portfolio",
    type: "website",
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
      </body>
    </html>
  );
}