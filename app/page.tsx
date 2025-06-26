'use client';


import { useEffect, useState } from 'react';
import { products, Product } from './data/products';
import translations from './locales/translations';



// Pagination
const ITEMS_PER_PAGE = 20;

type Category = 'tous' | 'sport' | 'homme_mode' | 'femme_mode' | 'outils' | 'bijoux' | 'beaute';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('tous');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [locale, setLocale] = useState<'fr' | 'en' | 'de'>('fr');
  const [searchTerm, setSearchTerm] = useState('');

  // Détection de la langue + catégorie initiale depuis URL
  useEffect(() => {
    const lang = navigator.language.slice(0, 2);
    if (['fr', 'en', 'de'].includes(lang)) {
      setLocale(lang as 'fr' | 'en' | 'de');
    }

    const params = new URLSearchParams(window.location.search);
    const cat = params.get('category') as Category;
    const page = parseInt(params.get('page') || '1', 10);

    const validCategories: Category[] = ['tous', 'sport', 'homme_mode', 'femme_mode', 'outils', 'bijoux', 'beaute'];
    if (cat && validCategories.includes(cat)) setSelectedCategory(cat);
    if (page >= 1) setCurrentPage(page);
  }, []);

  const t = (key: string) => (translations[locale] as Record<string, string>)[key] || key;

  // Obtenir les produits de la catégorie
  const allProducts = selectedCategory === 'tous'
    ? [
        ...products.sport,
        ...products.homme_mode,
        ...products.femme_mode,
        ...products.outils,
        ...products.bijoux,
        ...products.beaute,
      ]
    : products[selectedCategory] || [];

  // Filtrage par mot clé
  const filteredProducts = allProducts.filter(
    (product) =>
      product.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Navigation pagination
  const goToPage = (page: number) => {
    const params = new URLSearchParams(window.location.search);
    params.set('category', selectedCategory);
    params.set('page', page.toString());
    window.location.search = params.toString();
  };

  const updateCategory = (cat: Category) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
    const params = new URLSearchParams(window.location.search);
    params.set('category', cat);
    params.set('page', '1');
    window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
  };

  return (
    <>
      <main className="p-4 sm:p-6 md:p-8">
        {/* Barre de recherche */}
        <div className="flex justify-center mb-4">
          <input
            type="text"
            placeholder={t('rechercher') || 'Rechercher un produit...'}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-4 py-2 border-2 border-blue-500 rounded-full text-black bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Boutons Catégories */}
        <nav className="flex flex-wrap justify-center gap-3 my-6">
          {(['tous', 'sport', 'homme_mode', 'femme_mode', 'outils', 'bijoux', 'beaute'] as Category[]).map((cat) => (
            <button
              key={cat}
              onClick={() => updateCategory(cat)}
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

        {/* Grille Produits */}
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
                {t('acheter') || 'Acheter'}
              </a>
            </div>
          ))}
        </div>

        {/* Pagination */}
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

      <footer className="text-center text-xs text-gray-300 py-6">
        © 2025 TikTok Shop Vitrine - Tous droits réservés
      </footer>
    </>
  );
}
