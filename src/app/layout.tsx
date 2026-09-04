import type { Metadata } from "next";
import { Manrope, Unbounded } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const display = Unbounded({
  variable: "--font-display",
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["500", "600", "700"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nomore Real Estate · Burgas",
    template: "%s · Nomore Real Estate",
  },
  description:
    "Homes by the sea. No more hassle. Buy, sell, and rent in Burgas region & Sunny Beach.",
  openGraph: {
    type: "website",
    siteName: "Nomore Real Estate",
    title: "Nomore Real Estate · Homes by the sea",
    description: "Buy, sell, and rent across Burgas region and Sunny Beach.",
    images: [{ url: "/brand/og-default.png", width: 1536, height: 1024 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nomore Real Estate",
    description: "Homes by the sea. No more hassle.",
    images: ["/brand/og-default.png"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/brand/mark.svg" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bg" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
