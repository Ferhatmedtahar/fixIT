import { ThemeProvider } from "@/context/theme-provider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "../common/ui/Footer";
import NavBar from "../common/ui/NavBar";
import favIcon from "../public/favicon.ico";
import "./globals.css";

export const metadata: Metadata = {
  title: "FixIT | Ammar Telidji University",
  metadataBase: new URL("https://unibyte-site.vercel.app/"),
  description: `UniByte is a student-led tech club at Ammar Telidji University. 
Whether you're passionate about coding, design, photography, or any tech frontier, 
UniByte is your launchpad for personal growth, meaningful collaboration, and real-world impact.`,
  keywords: [
    "UniByte",
    "tech club",
    "Ammar Telidji University",
    "computer science",
    "programming",
    "web development",
    "UI/UX",
    "data structures",
    "student tech community",
    "hackathons",
    "photography",
    "workshops",
  ],
  openGraph: {
    title: "UniByte | Where the Power of 0s and 1s Unite!",
    description:
      "Join UniByte — the student-led tech community at Ammar Telidji University. Explore coding, design, workshops, and more.",
    url: "https://unibyte-site.vercel.app/",
    siteName: "UniByte",
    images: [
      //todo
      // {
      //   url: ogImage.src,
      //   width: ogImage.width,
      //   height: ogImage.height,
      //   alt: "UniByte - Student Tech Club",
      // },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "UniByte | Ammar Telidji Tech Club",
    description:
      "A student-led tech club focused on innovation, learning, and real-world tech experiences at Ammar Telidji University.",
    images: [
      //todo
      // {
      //   url: ogImage.src,
      //   width: ogImage.width,
      //   height: ogImage.height,
      //   alt: "UniByte - Student Tech Club",
      // },
    ],
  },
  icons: {
    shortcut: favIcon.src,
  },
};

const discord_font = localFont({
  src: [
    {
      path: "../fonts/Discord/6284e0f599173e62453ac15f_Ginto Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Discord/628637495e0b73615e1e27b6_Ginto Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Discord/6286374983556efc2e78b45c_Ginto Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Discord/625933f807781e4a4303f1cb_Ginto Nord Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-discord",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` ${discord_font.className}  antialiased selection:bg-primary selection:text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />

          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
