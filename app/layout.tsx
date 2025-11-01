import { LanguageProvider } from "@/context/language-provider";
import { ThemeProvider } from "@/context/theme-provider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "../common/ui/Footer";
import NavBar from "../common/ui/NavBar";
import favIcon from "../public/favicon.ico";
import "./globals.css";
export const metadata: Metadata = {
  title: "Glados Zone | Professional Computer Repair Services",
  metadataBase: new URL("https://fix-it-pi.vercel.app/"),
  description: `Glados Zone - Professional computer repair and trusted IT support services. 
Fast and affordable IT support for students and everyday users at Ammar Telidji University, Laghouat.`,
  keywords: [
    "Glados Zone",
    "computer repair",
    "IT support",
    "computer troubleshooting",
    "Ammar Telidji University",
    "Laghouat",
    "Algeria",
    "OS installation",
    "virus removal",
    "PC optimization",
    "technical support",
    "PC repair",
    "computer maintenance",
    "student IT services",
  ],
  openGraph: {
    title: "Glados Zone | Your Tech Problems, Our Solutions",
    description:
      "Professional computer repair and trusted IT support services. Fast and affordable IT support in Laghouat, Algeria.",
    url: "https://fix-it-pi.vercel.app/",
    siteName: "Glados Zone",
    images: [],
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
    title: "Glados Zone | Professional Computer Repair Services",
    description:
      "Fast and affordable IT support for students and everyday users. Troubleshooting, OS installation, virus removal and more in Laghouat, Algeria.",
    images: [],
  },
  icons: {
    shortcut: favIcon.src,
  },

  other: {
    "geo.region": "DZ-03",
    "geo.placename": "Laghouat, Algeria",
    "geo.position": "33.8;2.86667",
    ICBM: "33.8, 2.86667",
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
        className={` ${discord_font.className}  antialiased selection:bg-[var(--foreground)] selection:text-[var(--background)]  `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <NavBar />

            {children}
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
