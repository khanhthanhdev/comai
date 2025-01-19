import type { Metadata } from "next";
import "./globals.css";
import {
  ClerkProvider
} from '@clerk/nextjs'

let title = "ShadCn Component Generator";
let description = "Generate React Components with AI";
let url = "https://reactai.vasarai.net/";
let ogimage = "https://reactai.vasarai.net/og-image.png";
let sitename = "ReactAI";

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
    <html lang="en" className="h-full">
      <head></head>
      <body className="">
          {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
