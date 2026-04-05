import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Rhodawk AI - The Future of Intelligent Systems",
  description:
    "Rhodawk AI is building next-generation AI infrastructure. Apply for early access to be among the first to experience the future.",
  openGraph: {
    title: "Rhodawk AI - The Future of Intelligent Systems",
    description:
      "Apply for early access to next-generation AI infrastructure.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rhodawk AI",
    description:
      "Apply for early access to next-generation AI infrastructure.",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
