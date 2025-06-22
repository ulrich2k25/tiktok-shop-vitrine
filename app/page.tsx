'use client';

import React, { useState, useEffect } from 'react';
import translations from './locales/translations.json';


// Définition des types
type Product = {
  id: number;
  name?: string;
  title?: string;
  description: string;
  price: string;
  image: string;
  tiktokLink?: string;
  link?: string;
};

type Category = 'sport' | 'homme' | 'femme' | 'outils' | 'bijoux';

const products: Record<Category, Product[]> = {
  sport: [
     {
    id: 1,
    name: "Basketball Painting Wall Art",
    image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/b27a5fd6703749f68ae2bbdff3c04f55~tplv-o3syd03w52-resize-webp:260:260.webp",
    price: "29.99€",
    description: "Poster décoratif pour chambre ou salon sur le thème du basketball.",
    tiktokLink: "https://www.tiktok.com/view/product/1729481815282915439",
  },
  {
    id: 2,
    name: "Basketballkorb NEON Hoop",
    image: "https://p16-oec-eu-common-useast2a.ibyteimg.com/tos-useast2a-i-tulkllf4y5-euttp/4e4795ebdbd0404694a7f5fc42c4e8dc~tplv-tulkllf4y5-resize-webp:260:260.webp",
    price: "49.99€",
    description: "Panier de basketball design NEON pour l’intérieur et l’extérieur.",
    tiktokLink: "https://www.tiktok.com/view/product/1729481553638103831",
  },
  {
    id: 3,
    name: "Men's Basketball Training Set",
    image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/e373c7d449694533b1d8fd2ede1203c9~tplv-o3syd03w52-resize-webp:260:260.webp",
    price: "34.99€",
    description: "Ensemble t-shirt et short de basketball respirant pour l'été.",
    tiktokLink: "https://www.tiktok.com/view/product/1729481586467314124",
  },
  {
    id: 4,
    name: "Basketball Taille 7 + Pompe",
    image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/3166569145fa4e3da1cce2adbf2d3652~tplv-o3syd03w52-resize-webp:260:260.webp",
    price: "24.99€",
    description: "Ballon de basketball extérieur antidérapant avec pompe.",
    tiktokLink: "https://www.tiktok.com/view/product/1729489617001027913",
  },
  {
    id: 5,
    name: "Basketball Kids Two-piece Set",
    image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/b5ebe78bbe1d4b5ab9541d3e0a8cb0fb~tplv-o3syd03w52-resize-webp:260:260.webp",
    price: "27.99€",
    description: "Set respirant pour enfants, parfait pour les matchs de basketball.",
    tiktokLink: "https://www.tiktok.com/view/product/1729484114341567051",
  },
  {
    id: 6,
    name: "Men's Colorblock Basketball Sneakers",
    image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/f583504032f54427a0f888904b012528~tplv-o3syd03w52-resize-webp:260:260.webp",
    price: "59.99€",
    description: "Baskets légères et confortables pour le sport et la ville.",
    tiktokLink: "https://www.tiktok.com/view/product/1729480302220187827",
  },
  {
    id: 7,
    name: "Unisex Colorblock Basketball Shoes",
    image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/8013842615eb4d69950c47dbb4746ec2~tplv-o3syd03w52-resize-webp:260:260.webp",
    price: "54.99€",
    description: "Chaussures de basketball antidérapantes et respirantes.",
    tiktokLink: "https://www.tiktok.com/view/product/1729480988273842980",
  },
  {
    id: 8,
    name: "High Top Colorful Basketball Shoes",
    image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/cfd5ec271590455db70d06febaf1f19b~tplv-o3syd03w52-resize-webp:260:260.webp",
    price: "64.99€",
    description: "Sneakers montantes colorées antidérapantes pour le quotidien.",
    tiktokLink: "https://www.tiktok.com/view/product/1729480606759688654",
  },
  {
    id: 9,
    name: "Unisex Basketball Shoes Non-slip",
    image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/3701fe51d2974ce5bffd6c3d2ba9f433~tplv-o3syd03w52-resize-webp:260:260.webp",
    price: "49.99€",
    description: "Chaussures sportives confortables pour homme et femme.",
    tiktokLink: "https://www.tiktok.com/view/product/1729480586420590963",
  },
  {
    id: 10,
    name: "Women's Lace Up Platform Sneakers",
    image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/e6d6781b461c48e29b6acac6cc3bd232~tplv-o3syd03w52-resize-webp:260:260.webp",
    price: "44.99€",
    description: "Baskets compensées confortables et respirantes pour femme.",
    tiktokLink: "https://www.tiktok.com/view/product/1729480014334892240",
  },
  
  {
    id: 11,
    name: "Colorblock Lace Up Sneakers",
    image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/8757f8a963204f8f8b920b2ce212bdba~tplv-o3syd03w52-resize-webp:260:260.webp",
    price: "39.99€",
    description: "Chaussures de sport confortables et respirantes pour un usage quotidien.",
    tiktokLink: "https://www.tiktok.com/view/product/1729480664506866126",
  },
  
  {
  id: 12,
  name: "Two-Piece Boy's Basketball Set",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/f49f7bc2339b45ebbe07fa0f447adb63~tplv-o3syd03w52-resize-webp:260:260.webp",
  price: "29.99€",
  description: "Ensemble 2 pièces garçon avec sweat-shirt et short à motif basketball.",
  tiktokLink: "https://www.tiktok.com/view/product/1729481635933297138",
},

{
  id: 13,
  name: "POSTURE Haltungstrainer",
  image: "https://p16-oec-eu-common-no.tiktokcdn-eu.com/tos-no1a-i-t5fjg24jzw-no/c6a62bae21dc4dabbe8c18626626bd6e~tplv-t5fjg24jzw-resize-webp:260:260.webp",
  price: "29.99€",
  description: "Haltungstrainer für verbesserte Körperhaltung und muskuläre Stärkung.",
  tiktokLink: "https://www.tiktok.com/view/product/1729489255039408667"
},
{
  id: 18,
  name: "Fußballschuhe für Jungen und Mädchen",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/a119d41ef16047f29317cd561b666836~tplv-o3syd03w52-resize-webp:260:260.webp",
  price: "34.99€",
  description: "Professionelle Trainings- und Wettkampfschuhe mit langen Spikes, Unisex für Teenager.",
  tiktokLink: "https://www.tiktok.com/view/product/1729540863620978785"
},

  ],
  homme: [
    {
  id: 14,
  name: "Men's Letter Print Round Neck Tee",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/c58276a2749444bb864f9ad5b723bd4e~tplv-o3syd03w52-resize-webp:260:260.webp",
  price: "19.99€",
  description: "Regular Fit Casual Short Sleeve Crew Neck T-Shirt for Summer.",
  tiktokLink: "https://www.tiktok.com/view/product/1729490583109605513"
},
{
  id: 15,
  name: "Men's Letter & Number Print Round Neck Tee",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/d65a69ddf7e040ecae58bca81231543c~tplv-o3syd03w52-resize-webp:260:260.webp",
  price: "19.99€",
  description: "Casual Short Sleeve Crew Neck T-Shirt for Summer, Tropical Style.",
  tiktokLink: "https://www.tiktok.com/view/product/1729490563639188462"
},
{
  id: 16,
  name: "Men's Basketball Print Shorts",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/855088104a5249a88d80b7409b5c91a7~tplv-o3syd03w52-resize-webp:260:260.webp",
  price: "24.99€",
  description: "Loose Casual Relaxed Fit Breathable Comfortable Shorts for Summer Gym & Basketball.",
  tiktokLink: "https://www.tiktok.com/view/product/1729482769530591485"
}

  ],
  femme: [
    {
      id: 6,
      title: "Women's Lace Up Platform Sneakers",
      description: "Baskets compensées confortables et respirantes pour femme.",
      price: "44.99€",
      image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/e6d6781b461c48e29b6acac6cc3bd232~tplv-o3syd03w52-resize-webp:260:260.webp",
      link: "https://www.tiktok.com/view/product/xxx4"
    },
  ],
  outils: [
{
  id: 17,
  name: "Stanley Quencher H2.0 Becher 2025",
  image: "https://p16-oec-eu-common-no.tiktokcdn-eu.com/tos-no1a-i-t5fjg24jzw-no/35a3196e17b64f7dacf76deb82779c1e~tplv-t5fjg24jzw-resize-webp:260:260.webp",
  price: "39.99€",
  description: "850ml Edelstahl-Isolierbecher mit Griff & Strohhalm, Flowstate Deckel, BPA-frei, ideal für Reisen.",
  tiktokLink: "https://www.tiktok.com/view/product/1729523138086738199"
}

  ],
    bijoux: [
    {
      id: 100,
      name: "Luxury Diamond Bracelet",
      image: "https://example.com/your-image.jpg",
      price: "99.99€",
      description: "Bracelet en diamant luxueux pour toutes occasions.",
      tiktokLink: "https://www.tiktok.com/view/product/xxx"
    },
  ]
};

// Pagination
const ITEMS_PER_PAGE = 20;

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('sport');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [locale, setLocale] = useState<'fr' | 'en' | 'de'>('fr');

  useEffect(() => {
    const lang = navigator.language.slice(0, 2);
    if (lang === 'de' || lang === 'en' || lang === 'fr') {
      setLocale(lang as 'fr' | 'en' | 'de');
    } else {
      setLocale('en');
    }

    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category') as Category;
    const pageParam = parseInt(urlParams.get('page') || '1', 10);

    if (categoryParam && ['sport', 'homme', 'femme', 'outils', 'bijoux'].includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    }
    setCurrentPage(pageParam >= 1 ? pageParam : 1);
  }, []);

  const t = (key: string) => (translations[locale] as Record<string, string>)[key] || key;
  const allProducts = products[selectedCategory];
  const totalPages = Math.ceil(allProducts.length / ITEMS_PER_PAGE);
  const displayedProducts = allProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const goToPage = (page: number) => {
    const params = new URLSearchParams(window.location.search);
    params.set('category', selectedCategory);
    params.set('page', page.toString());
    window.location.search = params.toString();
  };

  return (
    <main className="p-4 sm:p-6 md:p-8">

      {/* Navigation des catégories */}
      <nav className="flex flex-wrap justify-center gap-3 my-6">
        {(['sport', 'homme', 'femme', 'outils', 'bijoux'] as Category[]).map((cat: Category) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setCurrentPage(1); // Reset page 1 si on change de catégorie
              const params = new URLSearchParams(window.location.search);
              params.set('category', cat);
              params.set('page', '1');
              window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
            }}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
              selectedCategory === cat
                ? 'bg-white text-black shadow-md'
                : 'bg-blue-700 text-white hover:bg-white hover:text-black'
            }`}
          >
            {t(cat)}
          </button>
        ))}
      </nav>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {displayedProducts.map((product: Product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-lg p-3 text-black transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={product.image}
              alt={product.title ?? product.name}
              className="w-full h-40 sm:h-44 md:h-48 object-contain rounded"
            />
            <h3 className="mt-2 font-bold text-sm sm:text-base">
              {product.title ?? product.name}
            </h3>
            <p className="text-xs sm:text-sm mt-1">{product.description}</p>
            <p className="mt-2 font-extrabold text-blue-900 text-sm">{product.price}</p>
            <a
              href={product.link ?? product.tiktokLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block bg-gradient-to-r from-pink-500 to-red-500 text-white text-center text-sm py-2 rounded-lg shadow-md hover:opacity-90"
            >
              {t('acheter')}
            </a>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-8 space-x-2">
          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            return (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`px-4 py-2 rounded-full border text-sm font-semibold transition ${
                  currentPage === page ? 'bg-yellow-400 text-black' : 'bg-white text-black hover:bg-yellow-200'
                }`}
              >
                {page}
              </button>
            );
          })}
        </div>
      )}
    </main>
  );
}