import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    default: "Yebirhan Lijoch Media",
    template: "%s | Yebirhan Lijoch Media",
  },
  description:
    "Yebirhan Lijoch Media shares stories of community impact, education, health, and social support in Ethiopia.",
  openGraph: {
    title: "Yebirhan Lijoch Media",
    description:
      "Stories of hope, empowerment, and sustainable community development from Yebirhan Lijoch Media.",
    type: "website",
    locale: "en_US",
    siteName: "Yebirhan Lijoch Media",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yebirhan Lijoch Media",
    description:
      "Stories of hope, empowerment, and sustainable community development from Yebirhan Lijoch Media.",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
