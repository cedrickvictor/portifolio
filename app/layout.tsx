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
    default: "Q.C — Full Stack Developer",
    template: "%s · Q.C",
  },
  description:
    "Full Stack Developer building scalable, secure, user-focused products. Case studies, selected work, and ways to get in touch.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "Q.C — Full Stack Developer",
    description:
      "A premium developer portfolio with case studies, selected work, and contact.",
    siteName: "Q.C Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Q.C — Full Stack Developer",
    description:
      "A premium developer portfolio with case studies, selected work, and contact.",
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
      <body className="min-h-full flex flex-col bg-[--bg] text-[--fg] selection:bg-white/10 selection:text-white">
        <ThemeProvider>
          <a
            href="#home"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-black"
          >
            Skip to content
          </a>
          <div className="flex min-h-full flex-col">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
