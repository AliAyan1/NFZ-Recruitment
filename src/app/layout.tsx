import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { EmploymentAgencyJsonLd } from "@/components/seo/JsonLd";
import { defaultMetadata } from "@/lib/metadata";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${jakarta.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col pb-[4.5rem] md:pb-0">
        <EmploymentAgencyJsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <MobileStickyBar />
      </body>
    </html>
  );
}
