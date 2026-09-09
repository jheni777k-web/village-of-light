import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Village of Light",
    template: "%s | Village of Light",
  },
  description:
    "Village of Light shares stories of community impact, education, health, and social support in Ethiopia.",
  openGraph: {
    title: "Village of Light",
    description:
      "Stories of hope, empowerment, and sustainable community development from Village of Light.",
    type: "website",
    locale: "en_US",
    siteName: "Village of Light",
  },
  twitter: {
    card: "summary_large_image",
    title: "Village of Light",
    description:
      "Stories of hope, empowerment, and sustainable community development from Village of Light .",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}