import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ghis TikTok Shop Trendz",
  description: "Découvrez les meilleurs produits TikTok sur notre vitrine tendance.",
  openGraph: {
    title: "Ghis TikTok Shop Trendz",
    description: "Découvrez les meilleurs produits TikTok sur notre vitrine tendance.",
    url: "https://www.tiktokshoptrendz.com/",
    siteName: "Ghis TikTok Shop Trendz",
    images: [
      {
        url: "https://i.ibb.co/mCc3h46w/logo.png",
        width: 1200,
        height: 630,
        alt: "Ghis TikTok Shop Trendz",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghis TikTok Shop Trendz",
    description: "Découvrez les meilleurs produits TikTok sur notre vitrine tendance.",
    images: ["https://i.ibb.co/mCc3h46w/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-col items-center bg-black text-white py-4">
          <div className="relative">
            <Image
              src="/logo.png"
              alt="Ghis TikTok Shop Trendz"
              width={300}
              height={300}
              className="object-contain rounded-lg shadow-lg"
              style={{
                boxShadow: "0 0 40px 15px rgba(255, 0, 153, 0.6)"
              }}
            />
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
