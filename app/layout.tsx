import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { getSiteUrl } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "GriLab · Niyonkuru Cedric Victor — Web, Mobile & Software Engineering",
    template: "%s · GriLab",
  },
  description:
    "GriLab: expert web, mobile, and software engineering in Rwanda—custom builds, machine learning, Microsoft-aligned training, and supervised projects.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "GriLab · Expert Web, Mobile & Software Engineering",
    description:
      "Full-service technology partner: web design, mobile apps, software engineering, ML, training, and project supervision.",
    siteName: "GriLab Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "GriLab · Expert Web, Mobile & Software Engineering",
    description:
      "Full-service technology partner: web design, mobile apps, software engineering, ML, training, and project supervision.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[--bg] text-slate-900 dark:text-slate-100 selection:bg-slate-200/90 selection:text-slate-900 dark:selection:bg-slate-700 dark:selection:text-slate-100">
        <ThemeProvider>
          <a
            href="#home"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-slate-900 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-slate-50 dark:focus:bg-white dark:focus:text-slate-900"
          >
            Skip to content
          </a>
          <div className="flex min-h-full flex-col">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
