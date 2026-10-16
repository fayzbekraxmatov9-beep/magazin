"use client";

import React, { Suspense, useState, useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  SlidersHorizontal,
  Search,
  ArrowUpDown,
  Home as HomeIcon,
  ChevronRight,
  Sparkles,
  RotateCcw,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS, CATEGORIES } from "@/data/products";

function CatalogContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "Barchasi";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"default" | "price-asc" | "price-desc" | "rating">("default");
  const [priceRange, setPriceRange] = useState<number>(20000000);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory =
        selectedCategory === "Barchasi" || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrice = item.price <= priceRange;
      return matchesCategory && matchesSearch && matchesPrice;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });
  }, [selectedCategory, searchQuery, priceRange, sortBy]);

  const resetFilters = () => {
    setSelectedCategory("Barchasi");
    setSearchQuery("");
    setSortBy("default");
    setPriceRange(20000000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Breadcrumb & Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white py-10 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-3">
            <Link href="/" className="hover:text-white flex items-center gap-1 transition">
              <HomeIcon className="w-3.5 h-3.5" /> Bosh sahifa
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-indigo-300 font-medium">Mahsulotlar Katalogi</span>
            {selectedCategory !== "Barchasi" && (
              <>
                <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                <span className="text-white font-medium">{selectedCategory}</span>
              </>
            )}
          </nav>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-black tracking-tight text-white flex items-center gap-3">
                Mahsulotlar Katalogi
                <span className="text-xs bg-indigo-500/30 text-indigo-300 font-semibold px-3 py-1 rounded-full border border-indigo-500/30">
                  {filteredProducts.length} ta mahsulot
                </span>
              </h1>
              <p className="text-sm text-slate-300 mt-2 max-w-xl">
                ShopZone do'konidagi barcha original tovarlar, rasmiy kafolat va arzon narxlar kafolati bilan.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-amber-300 bg-amber-500/10 border border-amber-500/20 px-4 py-2.5 rounded-xl">
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>Barcha mahsulotlar uchun 1 yillik rasmiy servis kafolati mavjud!</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Catalog Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-6 sticky top-24">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <SlidersHorizontal className="w-4 h-4 text-indigo-600" />
                  Filtrlar
                </div>
                <button
                  onClick={resetFilters}
                  className="text-xs text-indigo-600 hover:text-indigo-800 font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" /> Tozalash
                </button>
              </div>

              {/* Category Filter */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Kategoriyalar
                </h3>
                <div className="space-y-1">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.name}
                      onClick={() => setSelectedCategory(cat.name)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition cursor-pointer ${
                        selectedCategory === cat.name
                          ? "bg-indigo-600 text-white shadow-xs"
                          : "text-slate-600 hover:bg-slate-50 hover:text-indigo-600"
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full ${
                          selectedCategory === cat.name
                            ? "bg-indigo-500 text-white"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {cat.name === "Barchasi" ? PRODUCTS.length : cat.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Maksimal Narx
                  </h3>
                  <span className="text-xs font-bold text-indigo-600">
                    {(priceRange / 1000000).toFixed(1)} mln so'm
                  </span>
                </div>
                <input
                  type="range"
                  min="1000000"
                  max="20000000"
                  step="500000"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full accent-indigo-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>1 mln</span>
                  <span>20 mln</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Catalog Products Area */}
          <section className="lg:col-span-3 space-y-6">
            {/* Top Toolbar: Sorting & Count */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="text-xs text-slate-500">
                Ko'rsatilmoqda:{" "}
                <span className="font-bold text-slate-900">
                  {filteredProducts.length}
                </span>{" "}
                ta mahsulot
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <ArrowUpDown className="w-4 h-4 text-slate-400" />
                  <span className="hidden sm:inline">Saralash:</span>
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium text-slate-700 focus:outline-hidden focus:border-indigo-600 cursor-pointer"
                >
                  <option value="default">Odatiy tartibda</option>
                  <option value="price-asc">Narxi: Arzondan qimmatga</option>
                  <option value="price-desc">Narxi: Qimmatdan arzonga</option>
                  <option value="rating">Reyting bo'yicha</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 p-8">
                <Search className="w-12 h-12 mx-auto text-slate-300 mb-3" />
                <h3 className="text-lg font-bold text-slate-800">
                  Mos mahsulot topilmadi
                </h3>
                <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                  Qidiruv so'zini o'zgartirib ko'ring yoki filtrlarni dastlabki holatga qaytaring.
                </p>
                <button
                  onClick={resetFilters}
                  className="mt-4 px-4 py-2 bg-indigo-600 text-white text-xs font-semibold rounded-xl hover:bg-indigo-700 transition cursor-pointer"
                >
                  Filtrlarni tozalash
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function CatalogPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-indigo-600" />
        </div>
      }
    >
      <CatalogContent />
    </Suspense>
  );
}
