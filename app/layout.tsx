import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Northcoast Dermatology | Independence, OH",
  description:
    "Expert medical, surgical, and cosmetic dermatology care for patients of all ages in Northeast Ohio. Board-certified dermatologists. Accepting new patients.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable}`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
