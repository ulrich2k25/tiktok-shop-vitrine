"use client";

import React, { useState, useEffect } from "react";
import translations from "./locales/translations.json";
import { supabase } from "../lib/supabase";

// Pagination
const ITEMS_PER_PAGE = 20;

type Category =
  | "tous_produits"
  | "sport"
  | "homme_mode"
  | "femme_mode"
  | "outils"
  | "bijoux"
  | "beaute";

type Product = {
  id: number;
  category: string;
  name: string;
  image: string | null;
  price: number;
  description: string | null;
  tiktok_link: string | null;
};

export default function Home() {
  const [selectedCategory, setSelectedCategory] =
    useState<Category>("tous_produits");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [locale, setLocale] = useState<"fr" | "en" | "de">("fr");
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const lang = navigator.language.slice(0, 2);
    if (lang === "de" || lang === "en" || lang === "fr") {
      setLocale(lang as "fr" | "en" | "de");
    } else {
      setLocale("en");
    }

    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get("category") as Category;
    const pageParam = parseInt(urlParams.get("page") || "1", 10);

    if (
      categoryParam &&
      [
        "tous_produits",
        "sport",
        "homme_mode",
        "femme_mode",
        "outils",
        "bijoux",
        "beaute",
      ].includes(categoryParam)
    ) {
      setSelectedCategory(categoryParam);
    }

    setCurrentPage(pageParam >= 1 ? pageParam : 1);

    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        console.error("Erreur Supabase:", error);
        return;
      }

      setProducts(data || []);
    };

    fetchProducts();
  }, []);

  const t = (key: string) =>
    (translations[locale] as Record<string, string>)[key] || key;

  const allProducts =
    selectedCategory === "tous_produits"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const filteredProducts = allProducts.filter(
    (product) =>
      product.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const goToPage = (page: number) => {
    const params = new URLSearchParams(window.location.search);
    params.set("category", selectedCategory);
    params.set("page", page.toString());
    window.location.search = params.toString();
  };

  return (
    <>
      <main className="p-4 sm:p-6 md:p-8">
        {/* Barre de recherche */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder={t("rechercher")}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-4 py-3 border-2 border-blue-500 rounded-full text-black bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Catégories */}
        <nav className="flex flex-wrap justify-center gap-3 mb-8">
          {(
            [
              "tous_produits",
              "sport",
              "homme_mode",
              "femme_mode",
              "outils",
              "bijoux",
              "beaute",
            ] as Category[]
          ).map((cat: Category) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentPage(1);
                const params = new URLSearchParams(window.location.search);
                params.set("category", cat);
                params.set("page", "1");
                window.history.replaceState(
                  {},
                  "",
                  `${window.location.pathname}?${params.toString()}`,
                );
              }}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                selectedCategory === cat
                  ? "bg-white text-black shadow-md"
                  : "bg-blue-700 text-white hover:bg-white hover:text-black"
              }`}
            >
              {t(cat)}
            </button>
          ))}
        </nav>

        {/* Grille produits */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden text-black transition duration-300 hover:scale-[1.02] hover:shadow-2xl"
            >
              <div className="w-full h-52 bg-gray-100 overflow-hidden">
                <img
                  src={product.image ?? ""}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4">
                <h3 className="font-bold text-base min-h-[48px]">
                  {product.name}
                </h3>

                <p className="text-sm mt-2 text-gray-700 min-h-[48px] line-clamp-2">
                  {product.description}
                </p>

                <p className="mt-3 font-extrabold text-blue-900 text-lg">
                  {product.price}€
                </p>

                <a
                  href={product.tiktok_link ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block bg-gradient-to-r from-pink-500 to-red-500 text-white text-center text-sm py-3 rounded-xl shadow-md hover:opacity-90"
                >
                  {t("acheter")}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-10 space-x-2">
            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1;
              return (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`px-4 py-2 rounded-full border text-sm font-semibold transition ${
                    currentPage === page
                      ? "bg-yellow-400 text-black"
                      : "bg-white text-black hover:bg-yellow-200"
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
