"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ShoppingBag,
  ShoppingCart,
  Heart,
  Search,
  Menu,
  X,
  Phone,
  Sparkles,
  ChevronRight,
  Plus,
  Minus,
  Check,
} from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery?: string;
  setSearchQuery?: (q: string) => void;
}) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {
    cart,
    favorites,
    isCartOpen,
    setIsCartOpen,
    updateCartQuantity,
    cartTotal,
    cartCount,
    orderSuccess,
    handleCheckout,
  } = useCart();

  const formatPrice = (price: number) => {
    return price.toLocaleString("uz-UZ") + " so'm";
  };

  return (
    <>
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-linear-to-r from-indigo-700 via-indigo-600 to-purple-600 text-white text-xs md:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
            <span>Katta bahorgi aksiya: barcha tovarlarga 30% gacha chegirmalar!</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-xs text-indigo-100">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" /> +998 (97) 298-87-88
            </span>
            <span>📍 Toshkent shahri bo'ylab bepul yetkazish</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER & NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
                aria-label="Menyu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
              <Link href="/" className="flex items-center gap-2.5 group">
                <div className="w-11 h-11 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-200 group-hover:scale-105 transition-transform">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-2xl font-black tracking-tight text-slate-900">
                    Shop<span className="text-indigo-600">Zone</span>
                  </span>
                  <span className="hidden sm:block text-[10px] tracking-widest uppercase font-semibold text-slate-600">
                    Premium Onlayn Do'kon
                  </span>
                </div>
              </Link>
            </div>

            {/* Search Bar (if search is supported or redirect to katalog) */}
            <div className="flex-1 max-w-xl mx-2 hidden md:block">
              {setSearchQuery ? (
                <div className="relative">
                  <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Mahsulotlar yoki brendlarni qidiring (masalan, iPhone, Sony)..."
                    value={searchQuery || ""}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 text-sm transition"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                    >
                      Tozalash
                    </button>
                  )}
                </div>
              ) : (
                <Link href="/katalog" className="block relative">
                  <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <div className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-400 text-sm hover:border-indigo-300 transition cursor-text">
                    Mahsulotlar yoki brendlarni qidirish uchun bosing...
                  </div>
                </Link>
              )}
            </div>

            {/* Navigation links & Actions */}
            <div className="flex items-center gap-3 sm:gap-4">
              <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
                <Link
                  href="/"
                  className={`transition ${
                    pathname === "/" ? "text-indigo-600 font-semibold" : "hover:text-indigo-600"
                  }`}
                >
                  Bosh sahifa
                </Link>
                <Link
                  href="/katalog"
                  className={`transition flex items-center gap-1.5 ${
                    pathname === "/katalog"
                      ? "text-indigo-600 font-bold"
                      : "text-indigo-600 hover:text-indigo-700 bg-indigo-50 px-3 py-1.5 rounded-lg font-semibold"
                  }`}
                >
                  Katalog
                  <span className="w-2 h-2 rounded-full bg-indigo-600 animate-ping inline-block" />
                </Link>
                <Link
                  href="/afzalliklar"
                  className={`transition ${
                    pathname === "/afzalliklar"
                      ? "text-indigo-600 font-semibold"
                      : "hover:text-indigo-600"
                  }`}
                >
                  Afzalliklar
                </Link>
                <Link
                  href="/sharhlar"
                  className={`transition ${
                    pathname === "/sharhlar"
                      ? "text-indigo-600 font-semibold"
                      : "hover:text-indigo-600"
                  }`}
                >
                  Sharhlar
                </Link>
                <Link
                  href="/boglanish"
                  className={`transition ${
                    pathname === "/boglanish"
                      ? "text-indigo-600 font-semibold"
                      : "hover:text-indigo-600"
                  }`}
                >
                  Bog'lanish
                </Link>
              </nav>

              <div className="h-6 w-px bg-slate-200 hidden lg:block" />

              {/* Favorites button */}
              <button
                onClick={() => {
                  alert(
                    `Saralanganlar soni: ${favorites.length} ta mahsulot saqlangan.`
                  );
                }}
                className="relative p-2.5 rounded-xl text-slate-600 hover:bg-slate-100 hover:text-indigo-600 transition"
                title="Saralanganlar"
              >
                <Heart className="w-5 h-5" />
                {favorites.length > 0 && (
                  <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-rose-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                    {favorites.length}
                  </span>
                )}
              </button>

              {/* Cart button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="flex items-center gap-2.5 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-xl shadow-md shadow-indigo-200 transition active:scale-95"
              >
                <div className="relative">
                  <ShoppingCart className="w-5 h-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-amber-400 text-slate-900 font-extrabold text-[10px] w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-indigo-600">
                      {cartCount}
                    </span>
                  )}
                </div>
                <span className="hidden sm:inline font-semibold text-sm">
                  {cartTotal > 0 ? formatPrice(cartTotal) : "Savatcha"}
                </span>
              </button>
            </div>
          </div>

          {/* Mobile search input */}
          <div className="pb-3 md:hidden">
            {setSearchQuery ? (
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Mahsulotlarni qidiring..."
                  value={searchQuery || ""}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:border-indigo-600"
                />
              </div>
            ) : (
              <Link
                href="/katalog"
                className="flex items-center gap-2 pl-3 pr-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-400"
              >
                <Search className="w-4 h-4 text-slate-400" />
                <span>Katalogdan qidirish...</span>
              </Link>
            )}
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm font-semibold text-slate-700 py-2 hover:text-indigo-600"
            >
              Bosh sahifa
            </Link>
            <Link
              href="/katalog"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm font-bold text-indigo-600 bg-indigo-50 px-3 py-2 rounded-lg"
            >
              🛍️ Barcha Mahsulotlar (Katalog)
            </Link>
            <Link
              href="/afzalliklar"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block text-sm py-2 ${
                pathname === "/afzalliklar"
                  ? "font-bold text-indigo-600"
                  : "font-semibold text-slate-700 hover:text-indigo-600"
              }`}
            >
              ⭐ Afzalliklarimiz
            </Link>
            <Link
              href="/sharhlar"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block text-sm py-2 ${
                pathname === "/sharhlar"
                  ? "font-bold text-indigo-600"
                  : "font-semibold text-slate-700 hover:text-indigo-600"
              }`}
            >
              💬 Mijozlar Sharhlari
            </Link>
            <Link
              href="/boglanish"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block text-sm py-2 ${
                pathname === "/boglanish"
                  ? "font-bold text-indigo-600"
                  : "font-semibold text-slate-700 hover:text-indigo-600"
              }`}
            >
              📞 Bog'lanish
            </Link>
          </div>
        )}
      </header>

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsCartOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
              {/* Drawer header */}
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-indigo-600" />
                  <h3 className="text-lg font-bold text-slate-900">Savatcha</h3>
                  <span className="text-xs bg-indigo-50 text-indigo-600 font-semibold px-2 py-0.5 rounded-full">
                    {cartCount} ta
                  </span>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {orderSuccess && (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl flex items-center gap-3">
                    <Check className="w-6 h-6 text-emerald-600 shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm">Buyurtmangiz qabul qilindi!</h4>
                      <p className="text-xs text-emerald-700 mt-0.5">
                        Tez orada operatorimiz siz bilan bog'lanadi.
                      </p>
                    </div>
                  </div>
                )}

                {cart.length === 0 && !orderSuccess ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-slate-800">Savatchangiz bo'sh</h4>
                    <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                      Katalogdan o'zingiz yoqtirgan mahsulotlarni tanlab, savatga qo'shishingiz mumkin.
                    </p>
                    <Link
                      href="/katalog"
                      onClick={() => setIsCartOpen(false)}
                      className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-semibold hover:bg-indigo-700"
                    >
                      Katalogni ko'rish
                    </Link>
                  </div>
                ) : (
                  cart.map(({ product, quantity }) => (
                    <div
                      key={product.id}
                      className="flex items-center gap-4 p-3 rounded-2xl border border-slate-100 bg-slate-50/50"
                    >
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-white shrink-0 border border-slate-200">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-slate-800 truncate">
                          {product.name}
                        </h4>
                        <div className="text-xs text-indigo-600 font-extrabold mt-0.5">
                          {formatPrice(product.price)}
                        </div>
                        <div className="flex items-center gap-3 mt-2">
                          <div className="flex items-center border border-slate-200 rounded-lg bg-white">
                            <button
                              onClick={() => updateCartQuantity(product.id, -1)}
                              className="p-1 hover:bg-slate-50 text-slate-600 rounded-l-lg"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="px-2 text-xs font-bold text-slate-800">
                              {quantity}
                            </span>
                            <button
                              onClick={() => updateCartQuantity(product.id, 1)}
                              className="p-1 hover:bg-slate-50 text-slate-600 rounded-r-lg"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <span className="text-xs text-slate-400">
                            jami: {formatPrice(product.price * quantity)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Drawer footer */}
              {cart.length > 0 && (
                <div className="p-6 border-t border-slate-100 bg-slate-50 space-y-4">
                  <div className="space-y-1.5 text-xs text-slate-600">
                    <div className="flex justify-between">
                      <span>Tovarlar qiymati:</span>
                      <span className="font-semibold text-slate-800">{formatPrice(cartTotal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Yetkazib berish:</span>
                      <span className="font-semibold text-emerald-600">Bepul (Aksiya)</span>
                    </div>
                    <div className="border-t border-slate-200 pt-2 flex justify-between text-sm font-extrabold text-slate-900">
                      <span>Jami to'lov:</span>
                      <span className="text-indigo-600 text-base">{formatPrice(cartTotal)}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleCheckout}
                    className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg shadow-indigo-200 transition active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Rasmiylashtirish <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
