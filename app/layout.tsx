import type { Metadata } from "next";
import "./globals.css";
import {
  ClerkProvider
} from '@clerk/nextjs'

import { Analytics } from "@vercel/analytics/react"

let title = "ShadCn Component Generator";
let description = "Generate React Components with AI";
let url = "https://instantcode.vercel.app/";
let ogimage = "https://instantcode.vercel.app/og-image.png";
let sitename = "InstantCode";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    url: url,
    siteName: sitename,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [ogimage],
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <Analytics />
    <html lang="en" className="h-full">
      <head></head>
      <body className="">
          {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
