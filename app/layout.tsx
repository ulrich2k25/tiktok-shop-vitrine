import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Link from "next/link";

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
  description: "Achetez les meilleurs produits viraux TikTok : sport, mode, gadgets et maison. Livraison rapide, qualité garantie.",
  keywords: [
    "TikTok Shop",
    "Produits tendance TikTok",
    "Vitrine TikTok",
    "Ghis TikTok Shop Trendz",
    "Basketball",
    "Mode TikTok",
    "Gadgets viraux",
    "Accessoires TikTok",
    "Shopping tendance 2025",
  ],
  authors: [{ name: "Ghis TikTok Shop" }],
  openGraph: {
    title: "Ghis TikTok Shop Trendz",
    description: "Découvrez notre sélection de produits viraux TikTok pour le sport, la mode et la maison.",
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
    description: "Produits TikTok tendance en vente : sport, mode, gadgets, accessoires, maison.",
    images: ["https://i.ibb.co/mCc3h46w/logo.png"],
  },
  metadataBase: new URL("https://www.tiktokshoptrendz.com/"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-purple-900 via-purple-950 to-black`}>
        <div className="flex flex-col items-center justify-center px-6 py-4 shadow-lg">
          <img
            src="/logo.png"
            alt="Ghis TikTok Shop Trendz"
            width={250}
            height={250}
            className="object-contain max-w-[70%] sm:max-w-[50%] md:max-w-[20%] drop-shadow-[0_0_20px_#ff00ff]"
          />
          <nav className="flex space-x-4 text-sm sm:text-md mt-4">
            <Link href="/?category=sport" className="text-white hover:text-yellow-400 font-semibold">Sport</Link>
            <Link href="/?category=homme" className="text-white hover:text-yellow-400 font-semibold">Homme</Link>
            <Link href="/?category=femme" className="text-white hover:text-yellow-400 font-semibold">Femme</Link>
            <Link href="/?category=outils" className="text-white hover:text-yellow-400 font-semibold">Outils</Link>
          </nav>
        </div>
        {children}
        <Script id="structured-data" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Ghis TikTok Shop Trendz",
            "url": "https://www.tiktokshoptrendz.com/",
            "description": "Découvrez les meilleurs produits TikTok tendance : sport, mode, gadgets, maison.",
            "publisher": {
              "@type": "Organization",
              "name": "Ghis TikTok Shop",
              "logo": {
                "@type": "ImageObject",
                "url": "https://i.ibb.co/mCc3h46w/logo.png"
              }
            }
          })}
        </Script>
      </body>
    </html>
  );
}
