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
        {/* Preconnect to Google Fonts for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        {/* Preload critical LCP images */}
        <link rel="preload" as="image" href="/fixedprofile.png" fetchPriority="high" />
        <link rel="preload" as="image" href="/beachsmilecloudyWillBlair(1).jpg" />
        {/* Blocking script to prevent theme flash - runs before any content renders */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  // Match ThemeProvider: defaultTheme='light', enableSystem=true
                  // Only go dark if explicitly 'dark' or 'system' with dark preference
                  var isDark = theme === 'dark' || (theme === 'system' && systemDark);
                  if (isDark) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        {/* Critical CSS inlined to eliminate render-blocking */}
        <style dangerouslySetInnerHTML={{
          __html: `
          /* Critical CSS Variables - Light Theme (default) */
          :root {
            --radius: 0;
            --background: #C9B896;
            --foreground: #1C1917;
            --card: #E0D8CC;
            --card-foreground: #1C1917;
            --popover: #E0D8CC;
            --popover-foreground: #1C1917;
            --primary: #1C1917;
            --primary-foreground: #E8DCC8;
            --secondary: #C9B896;
            --secondary-foreground: #1C1917;
            --muted: #C9B896;
            --muted-foreground: #5C564E;
            --accent: #00A86B;
            --accent-foreground: #FFFFFF;
            --destructive: #E34234;
            --border: #1C1917;
            --input: #1C1917;
            --ring: #00A86B;
            --neo-border-color: #1C1917;
            --neo-shadow-color: #1C1917;
            --earth-green: #00A86B;
            --earth-clay: #E34234;
            --earth-brown: #6B4423;
          }
          /* Critical CSS Variables - Dark Theme */
          .dark {
            --background: #0c0a09;
            --foreground: #fafaf9;
            --card: #1c1917;
            --card-foreground: #fafaf9;
            --popover: #1c1917;
            --popover-foreground: #fafaf9;
            --primary: #fafaf9;
            --primary-foreground: #0c0a09;
            --secondary: #292524;
            --secondary-foreground: #fafaf9;
            --muted: #292524;
            --muted-foreground: #a8a29e;
            --accent: #10b981;
            --accent-foreground: #0c0a09;
            --destructive: #ef4444;
            --border: #44403c;
            --input: #44403c;
            --ring: #10b981;
            --neo-border-color: #57534e;
            --neo-shadow-color: #000000;
            --earth-green: #10b981;
            --earth-clay: #f87171;
            --earth-brown: #292524;
          }
          /* Critical base styles for immediate render */
          html, body {
            background-color: var(--background);
            color: var(--foreground);
            overflow-y: auto !important;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          /* Prevent FOUC by hiding until fonts load */
          .antialiased { -webkit-font-smoothing: antialiased; }
          /* Critical scrollbar styles */
          html::-webkit-scrollbar, body::-webkit-scrollbar, ::-webkit-scrollbar {
            display: block !important;
            width: 20px !important;
            height: 20px !important;
          }
          html::-webkit-scrollbar-track, body::-webkit-scrollbar-track, ::-webkit-scrollbar-track {
            background: var(--background) !important;
            border-left: 3px solid var(--neo-border-color) !important;
          }
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
