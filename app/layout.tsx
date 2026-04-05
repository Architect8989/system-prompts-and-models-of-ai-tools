import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rhodawk AI | Early Access",
  description:
    "Join the future of AI. Apply for early access to Rhodawk AI - building the next generation of intelligent systems.",
  openGraph: {
    title: "Rhodawk AI | Early Access",
    description:
      "Join the future of AI. Apply for early access to Rhodawk AI.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rhodawk AI | Early Access",
    description:
      "Join the future of AI. Apply for early access to Rhodawk AI.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
