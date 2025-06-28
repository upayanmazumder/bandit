import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header/Header";

export const metadata: Metadata = {
  title: "Bandit",
  description:
    "Ever wanted to form a music band but found it too hard to find fellow band members? Bandit is here to help!",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
    shortcut: "/icon.svg",
  },
  openGraph: {
    title: "Bandit",
    description:
      "Ever wanted to form a music band but found it too hard to find fellow band members? Bandit is here to help!",
    url: "https://bandit.upayan.dev",
    siteName: "Bandit",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bandit Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bandit",
    description:
      "Ever wanted to form a music band but found it too hard to find fellow band members? Bandit is here to help!",
    images: ["/og-image.png"],
    creator: "@upayanmazumder",
  },
  themeColor: "#e35a33",
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  appleWebApp: {
    capable: true,
    title: "Bandit",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  metadataBase: new URL("https://bandit.upayan.dev"),
  alternates: {
    canonical: "https://bandit.upayan.dev",
    types: {
      "application/rss+xml": "/feed.xml",
      "application/atom+xml": "/feed.atom",
    },
    languages: {
      "en-US": "/",
      "en-GB": "/gb",
      "fr-FR": "/fr",
      "es-ES": "/es",
      "de-DE": "/de",
    },
  },
  keywords: [
    "bandit",
    "music",
    "band",
    "find band members",
    "musicians",
    "collaboration",
    "music community",
    "join band",
    "musical collaboration",
  ],
  authors: [
    {
      name: "Upayan Mazumder",
      url: "https://upayan.dev",
    },
  ],
  creator: "Upayan Mazumder",
  applicationName: "Bandit",
  publisher: "Upayan Mazumder",
  category: "Music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
