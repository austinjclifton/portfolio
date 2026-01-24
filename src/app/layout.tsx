import "../app/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Austin Clifton's Portfolio",
  description: "Portfolio",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Austin Clifton's Portfolio",
    description: "Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts: Merriweather for headers, Public Sans for body */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Public+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/a.png" type="image/png" />
      </head>
      <body className="min-h-dvh antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
