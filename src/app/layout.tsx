import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Serif_Display } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "William Blair - Global Logistics • Cybersecurity",
  description: "Proven results in cybersecurity, automation, and logistics technology.",
  keywords: ["cybersecurity", "global logistics", "supply chain security", "automation", "william blair", "portfolio"],
  authors: [{ name: "William Blair" }],
  creator: "William Blair",
  metadataBase: new URL("https://williamblair.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://williamblair.dev",
    title: "William Blair - Global Logistics • Cybersecurity",
    description: "Proven results in cybersecurity, automation, and logistics technology.",
    siteName: "William Blair Portfolio",
    images: [
      {
        url: "/fixedprofile.png",
        width: 192,
        height: 192,
        alt: "William Blair",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "William Blair - Global Logistics • Cybersecurity",
    description: "Proven results in cybersecurity, automation, and logistics technology.",
    creator: "@williamblair",
    images: ["/fixedprofile.png"],
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
  icons: {
    icon: "/fixedprofile.png",
    shortcut: "/fixedprofile.png",
    apple: "/fixedprofile.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
          html, body {
            overflow-y: auto !important;
          }
          /* Force display of scrollbars */
          html::-webkit-scrollbar, body::-webkit-scrollbar, ::-webkit-scrollbar {
            display: block !important;
            width: 20px !important;
            height: 20px !important;
          }
          /* Force track styling */
          html::-webkit-scrollbar-track, body::-webkit-scrollbar-track, ::-webkit-scrollbar-track {
            background: var(--background) !important;
            border-left: 3px solid var(--neo-border-color) !important;
          }
          /* Force thumb styling */
          html::-webkit-scrollbar-thumb, body::-webkit-scrollbar-thumb, ::-webkit-scrollbar-thumb {
            background: var(--neo-border-color) !important;
            border: 2px solid var(--background) !important;
            border-radius: 0 !important;
          }
          html::-webkit-scrollbar-corner, body::-webkit-scrollbar-corner, ::-webkit-scrollbar-corner {
            background: var(--background) !important;
          }
        `}} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dmSerifDisplay.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
