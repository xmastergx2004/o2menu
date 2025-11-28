import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import RedirectHandler from "@/components/RedirectHandler";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "O2 Menü",
  description: "Lezzetin Doğal Hali",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${outfit.variable} antialiased font-sans bg-[#f8f9fa]`}>
        <RedirectHandler />
        {children}
      </body>
    </html>
  );
}
