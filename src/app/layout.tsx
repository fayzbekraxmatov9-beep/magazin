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
  title: "ShopZone - Zamonaviy Onlayn Do'kon",
  description: "Eng so'nggi gadjetlar, kiyimlar va aksessuarlar eng qulay narxlarda. Tez yetkazib berish va sifat kafolati!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-slate-50 text-slate-800 selection:bg-indigo-500 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
