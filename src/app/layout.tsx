import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "William Blair - Global Logistics • Cybersecurity",
  description: "I secure supply chains and the digital systems that run them. Proven results in cybersecurity, automation, and logistics technology.",
  keywords: ["cybersecurity", "global logistics", "supply chain security", "automation", "william blair", "portfolio"],
  authors: [{ name: "William Blair" }],
  creator: "William Blair",
  metadataBase: new URL("https://williamblair.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://williamblair.dev",
    title: "William Blair - Global Logistics • Cybersecurity", 
    description: "I secure supply chains and the digital systems that run them. Proven results in cybersecurity, automation, and logistics technology.",
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
    description: "I secure supply chains and the digital systems that run them.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
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
