import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';


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
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-black to-blue-950 text-white`}>
        <Header />
        {children}
        <footer className="text-center text-xs text-gray-300 py-6">
          © 2025 TikTok Shop Vitrine - Tous droits réservés
        </footer>
      </body>
    </html>
  );
}

// Séparer le header dans un composant interne propre
function Header() {
  const categories = ["sport", "homme", "femme", "outils", "bijoux"];

  return (
    <header className="flex flex-col items-center py-6 bg-black">
      <img
        src="/logo.png"
        alt="Ghis TikTok Shop Trendz"
        className="w-48 sm:w-60 md:w-72 mb-4"
      />
      <nav className="flex flex-wrap justify-center gap-4">
        {categories.map((cat) => (
          <Link
            key={cat}
            href={`/?category=${cat}`}
            className="px-4 py-2 rounded-full border-2 border-white text-white hover:bg-white hover:text-black transition font-semibold"
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </Link>
        ))}
      </nav>
    </header>
  );
}
