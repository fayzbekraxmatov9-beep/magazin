"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ShoppingBag,
  ShoppingCart,
  Heart,
  Search,
  Truck,
  ShieldCheck,
  RotateCcw,
  Headphones,
  Star,
  ChevronRight,
  ArrowRight,
  Check,
  X,
  Plus,
  Minus,
  Sparkles,
  Menu,
  SlidersHorizontal,
} from "lucide-react";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  badge?: string;
  badgeColor?: string;
  description: string;
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Apple iPhone 15 Pro Max 256GB",
    category: "Smartfonlar",
    price: 14200000,
    oldPrice: 15500000,
    rating: 4.9,
    reviewsCount: 142,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=700&q=80",
    badge: "Top Sotuv",
    badgeColor: "bg-amber-500",
    description: "Titan korpus, A17 Pro chip va professional darajadagi 48MP kamera.",
  },
  {
    id: 2,
    name: "Sony WH-1000XM5 Simsiz Quloqchin",
    category: "Quloqchinlar",
    price: 4350000,
    oldPrice: 4900000,
    rating: 4.8,
    reviewsCount: 89,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80",
    badge: "-12% Chegirma",
    badgeColor: "bg-rose-500",
    description: "Sanoatdagi yetakchi faol shovqinni bekor qilish (ANC) va yuqori tiniqlikdagi audio.",
  },
  {
    id: 3,
    name: "Apple Watch Ultra 2 Titanium",
    category: "Aqlli Soatlar",
    price: 9900000,
    rating: 4.9,
    reviewsCount: 65,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80",
    badge: "Yangi",
    badgeColor: "bg-emerald-500",
    description: "Ekstremal sharoitlar uchun yaratilgan, batareyasi 72 soatgacha xizmat qiladi.",
  },
  {
    id: 4,
    name: "MacBook Air 15\" M3 512GB",
    category: "Noutbuklar",
    price: 17800000,
    oldPrice: 19200000,
    rating: 5.0,
    reviewsCount: 112,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=700&q=80",
    badge: "Tavsiya",
    badgeColor: "bg-indigo-600",
    description: "G'oyat yupqa dizayn, M3 kuchli protsessori va kun bo'yi yetuvchi batareya.",
  },
  {
    id: 5,
    name: "Nike Air Max Pulse Premium",
    category: "Kiyim & Poyabzal",
    price: 1850000,
    oldPrice: 2200000,
    rating: 4.7,
    reviewsCount: 94,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
    badge: "-16%",
    badgeColor: "bg-rose-500",
    description: "Har kungi yurish va sport mashg'ulotlari uchun qulay amortizatsiyali krossovka.",
  },
  {
    id: 6,
    name: "PlayStation 5 Slim 1TB",
    category: "O'yinlar",
    price: 6800000,
    rating: 4.9,
    reviewsCount: 230,
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=700&q=80",
    badge: "Ommabop",
    badgeColor: "bg-blue-600",
    description: "4K-grafika, ultra-tezkor SSD va immersiv DualSense haptik boshqaruv tizimi.",
  },
  {
    id: 7,
    name: "DJI Mini 4 Pro Fly More Combo",
    category: "Kameralar",
    price: 12900000,
    oldPrice: 13800000,
    rating: 4.8,
    reviewsCount: 45,
    image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=700&q=80",
    badge: "Top",
    badgeColor: "bg-purple-600",
    description: "249 gramm vazn, 4K/60fps HDR video va to'siqlarni har tomondan sezish sensori.",
  },
  {
    id: 8,
    name: "Samsung Galaxy S24 Ultra 512GB",
    category: "Smartfonlar",
    price: 13900000,
    oldPrice: 14800000,
    rating: 4.9,
    reviewsCount: 178,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=700&q=80",
    badge: "Galaxy AI",
    badgeColor: "bg-sky-600",
    description: "Titan rom, 200MP kamera va o'rnatilgan sun'iy intellekt xususiyatlari.",
  },
];

const CATEGORIES = [
  { name: "Barchasi", count: 8 },
  { name: "Smartfonlar", count: 2 },
  { name: "Quloqchinlar", count: 1 },
  { name: "Aqlli Soatlar", count: 1 },
  { name: "Noutbuklar", count: 1 },
  { name: "Kiyim & Poyabzal", count: 1 },
  { name: "O'yinlar", count: 1 },
  { name: "Kameralar", count: 1 },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Barchasi");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<{ product: Product; quantity: number }[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  // Filter products
  const filteredProducts = PRODUCTS.filter((item) => {
    const matchesCategory =
      selectedCategory === "Barchasi" || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateCartQuantity = (productId: number, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as { product: Product; quantity: number }[]
    );
  };

  const toggleFavorite = (productId: number) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setOrderSuccess(true);
    setCart([]);
    setTimeout(() => {
      setOrderSuccess(false);
      setIsCartOpen(false);
    }, 3500);
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString("uz-UZ") + " so'm";
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-linear-to-r from-indigo-700 via-indigo-600 to-purple-600 text-white text-xs md:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
            <span>Katta bahorgi aksiya: barcha tovarlarga 30% gacha chegirmalar!</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-xs text-indigo-100">
            <span>📞 +998 (71) 200-00-00</span>
            <span>📍 Toshkent shahri bo'ylab bepul yetkazish</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER & NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
              >
                <Menu className="w-6 h-6" />
              </button>
              <a href="#" className="flex items-center gap-2.5 group">
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
              </a>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-xl mx-2 hidden md:block">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Mahsulotlar yoki brendlarni qidiring (masalan, iPhone, Sony)..."
                  value={searchQuery}
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
            </div>

            {/* Navigation links & Actions */}
            <div className="flex items-center gap-3 sm:gap-4">
              <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
                <a href="#katalog" className="hover:text-indigo-600 transition">
                  Katalog
                </a>
                <a href="#afzalliklar" className="hover:text-indigo-600 transition">
                  Afzalliklar
                </a>
                <a href="#mijozlar" className="hover:text-indigo-600 transition">
                  Sharhlar
                </a>
                <a href="#aloqa" className="hover:text-indigo-600 transition">
                  Bog'lanish
                </a>
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
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Mahsulotlarni qidiring..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:border-indigo-600"
              />
            </div>
          </div>
        </div>
      </header>

      {/* 3. HERO BANNER */}
      <section className="relative overflow-hidden bg-linear-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white py-16 md:py-24">
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 -mb-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-400/30 px-3.5 py-1.5 rounded-full text-indigo-300 text-xs md:text-sm font-medium">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Yangi mavsum kolleksiyasi allaqachon sotuvda</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                Hayotingizni qulay qiluvchi{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-300 via-pink-300 to-amber-200">
                  zamonaviy mahsulotlar
                </span>
              </h1>
              <p className="text-slate-300 text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Smartfonlar, noutbuklar, aqlli gadjetlar va zamonaviy aksessuarlar.
                1 yillik rasmiy kafolat va O'zbekiston bo'ylab 24 soat ichida yetkazib berish.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-2">
                <a
                  href="#katalog"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 transition transform hover:-translate-y-0.5"
                >
                  Xaridni boshlash <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#afzalliklar"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 font-semibold border border-slate-700 text-center transition"
                >
                  Biz haqimizda
                </a>
              </div>

              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-800/80 max-w-lg mx-auto lg:mx-0">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">50k+</div>
                  <div className="text-xs text-slate-400">Mamnun mijozlar</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">100%</div>
                  <div className="text-xs text-slate-400">Asl mahsulotlar</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">24/7</div>
                  <div className="text-xs text-slate-400">Mijozlarni qo'llab-quvvatlash</div>
                </div>
              </div>
            </div>

            {/* Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md rounded-3xl overflow-hidden bg-linear-to-b from-indigo-500/10 to-purple-500/10 p-3 border border-indigo-400/20 backdrop-blur-xl shadow-2xl">
                <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80"
                    alt="iPhone 15 Pro Max"
                    fill
                    className="object-cover hover:scale-105 transition duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="px-2.5 py-1 rounded-md bg-indigo-600 text-xs font-semibold uppercase tracking-wider">
                      Hafta mahsuloti
                    </span>
                    <h3 className="text-xl font-bold mt-2">Apple iPhone 15 Pro Max</h3>
                    <p className="text-sm text-slate-300">Maxsus taklif narxi bilan</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-lg font-black text-amber-300">
                        14 200 000 so'm
                      </span>
                      <button
                        onClick={() => addToCart(PRODUCTS[0])}
                        className="bg-white text-slate-900 px-3.5 py-1.5 rounded-lg text-xs font-bold hover:bg-slate-100 transition"
                      >
                        Savatchaga
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VALUE PROPOSITIONS / FEATURES */}
      <section id="afzalliklar" className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Tez yetkazib berish</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Respublika bo'ylab eng tezkor pochta va kuryerlik xizmati.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Rasmiy kafolat</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Barcha tovarlar original va 12 oygacha rasmiy servis kafolatiga ega.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <RotateCcw className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">14 kun qaytarish</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Mahsulot ma'qul kelmasa, hech qanday qiyinchiliksiz almashtirib beramiz.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                <Headphones className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">24/7 Maslahat</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Operatorlarimiz istalgan savolingizga o'zbek tilida javob beradi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRODUCT CATALOG */}
      <section id="katalog" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-indigo-600 font-semibold text-xs tracking-wider uppercase mb-1">
              <SlidersHorizontal className="w-4 h-4" /> Tanlangan Mahsulotlar
            </div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Ommabop Tovarlar Katalogi
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              O'zingizga mos eng yaxshi gadjet va aksessuarlarni toping.
            </p>
          </div>

          {/* Category filter pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.name
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-indigo-300 hover:text-indigo-600"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 p-8">
            <Search className="w-12 h-12 mx-auto text-slate-300 mb-3" />
            <h3 className="text-lg font-bold text-slate-800">
              Hech qanday mahsulot topilmadi
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Boshqa so'z bilan qidirib ko'ring yoki toifalarni tozalang.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("Barchasi");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 bg-indigo-600 text-white text-xs font-semibold rounded-lg"
            >
              Hammasini ko'rsatish
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const isFav = favorites.includes(product.id);
              const inCart = cart.find((item) => item.product.id === product.id);

              return (
                <div
                  key={product.id}
                  className="group relative bg-white rounded-2xl border border-slate-200 hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-50/50 transition-all duration-300 flex flex-col overflow-hidden"
                >
                  {/* Badge & Favorite */}
                  <div className="relative w-full h-56 bg-slate-100 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    {product.badge && (
                      <span
                        className={`absolute top-3 left-3 text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-sm ${
                          product.badgeColor || "bg-indigo-600"
                        }`}
                      >
                        {product.badge}
                      </span>
                    )}
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className={`absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm transition ${
                        isFav
                          ? "text-rose-500 hover:text-rose-600"
                          : "text-slate-400 hover:text-rose-500"
                      }`}
                      title={isFav ? "Saralanganlardan o'chirish" : "Saqlab qo'yish"}
                    >
                      <Heart
                        className={`w-4 h-4 ${isFav ? "fill-current" : ""}`}
                      />
                    </button>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-indigo-600 mb-1">
                        {product.category}
                      </div>
                      <h3 className="font-bold text-slate-900 group-hover:text-indigo-600 transition line-clamp-1 text-base">
                        {product.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                        {product.description}
                      </p>

                      {/* Ratings */}
                      <div className="flex items-center gap-1.5 mt-3">
                        <div className="flex items-center text-amber-400">
                          <Star className="w-4 h-4 fill-current" />
                        </div>
                        <span className="text-xs font-bold text-slate-800">
                          {product.rating}
                        </span>
                        <span className="text-[11px] text-slate-400">
                          ({product.reviewsCount} sharh)
                        </span>
                      </div>
                    </div>

                    {/* Price and Cart button */}
                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        {product.oldPrice && (
                          <div className="text-xs text-slate-400 line-through">
                            {formatPrice(product.oldPrice)}
                          </div>
                        )}
                        <div className="text-base font-extrabold text-slate-900">
                          {formatPrice(product.price)}
                        </div>
                      </div>

                      <button
                        onClick={() => addToCart(product)}
                        className={`p-2.5 rounded-xl font-medium transition flex items-center justify-center ${
                          inCart
                            ? "bg-emerald-600 text-white hover:bg-emerald-700"
                            : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-100"
                        }`}
                        title="Savatchaga qo'shish"
                      >
                        {inCart ? (
                          <Check className="w-5 h-5" />
                        ) : (
                          <ShoppingCart className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* 6. PROMO BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-600 p-8 sm:p-12 text-white shadow-2xl">
          <div className="relative z-10 max-w-xl space-y-4">
            <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-white">
              Eksklyuziv Taklif
            </span>
            <h2 className="text-3xl sm:text-4xl font-black">
              Birinchi buyurtmangiz uchun 100 000 so'm promokod!
            </h2>
            <p className="text-slate-100 text-sm sm:text-base">
              Saytimizda ro'yxatdan o'ting yoki xarid paytida{" "}
              <span className="font-bold underline text-amber-300">SHOP2026</span>{" "}
              kodidan foydalaning.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Elektron pochtangizni kiriting..."
                className="px-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white placeholder:text-white/70 text-sm focus:outline-none focus:bg-white/20"
              />
              <button
                onClick={() => alert("Rahmat! Promokod sizning pochtangizga yuborildi.")}
                className="px-6 py-3 rounded-xl bg-white text-indigo-700 font-bold text-sm hover:bg-slate-100 transition shadow-lg shrink-0"
              >
                Promokodni olish
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CUSTOMER REVIEWS */}
      <section id="mijozlar" className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-indigo-600 font-semibold text-xs tracking-wider uppercase">
              Sharhlar
            </span>
            <h2 className="text-3xl font-black text-slate-900 mt-1">
              Mijozlarimiz nima deydi?
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Har kuni yuzlab xaridorlar o'zlarining ijobiy taassurotlari bilan bo'lishadilar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Anvar Karimov",
                role: "Dasturchi",
                text: "MacBook Air buyurtma qilgandim, 3 soat ichida Toshkent bo'ylab bepul olib kelib berishdi. Hammasi original, kafolat qog'ozi bilan. Xizmat 10/10!",
                rating: 5,
              },
              {
                name: "Dilnoza Rahimova",
                role: "Dizayner",
                text: "iPhone 15 Pro Max xarid qildim. Narxlari boshqa do'konlarga qaraganda arzonroq ekan, qulay to'lov usullari ham bor. Rahmat katta!",
                rating: 5,
              },
              {
                name: "Sardor Aliyev",
                role: "Tadbirkor",
                text: "Sony WH-1000XM5 quloqchini ovoz sifati ajoyib. Savatchaga qo'shish va buyurtma berish jarayoni juda oson va tezkor ishlangan.",
                rating: 5,
              },
            ].map((review, i) => (
              <div
                key={i}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition"
              >
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(review.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed italic mb-4">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">{review.name}</h5>
                    <p className="text-xs text-slate-500">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer id="aloqa" className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-white">
                <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <span className="text-xl font-black">
                  Shop<span className="text-indigo-400">Zone</span>
                </span>
              </div>
              <p className="text-xs leading-relaxed">
                Zamonaviy elektronika, gadjetlar va maishiy texnikalarning ishonchli onlayn do'koni.
              </p>
              <div className="text-xs text-slate-300 space-y-1">
                <div>Manzil: Toshkent sh., Chilonzor tumani</div>
                <div>Telefon: +998 (97) 298-87-88</div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm mb-4">Katalog</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#katalog" className="hover:text-white transition">Smartfonlar</a></li>
                <li><a href="#katalog" className="hover:text-white transition">Noutbuklar va PC</a></li>
                <li><a href="#katalog" className="hover:text-white transition">Aqlli Gadjetlar</a></li>
                <li><a href="#katalog" className="hover:text-white transition">Aksessuarlar</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm mb-4">Mijozlarga</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#afzalliklar" className="hover:text-white transition">Yetkazib berish va to'lov</a></li>
                <li><a href="#afzalliklar" className="hover:text-white transition">Kafolat shartlari</a></li>
                <li><a href="#afzalliklar" className="hover:text-white transition">Tovarni qaytarish</a></li>
                <li><a href="#aloqa" className="hover:text-white transition">Ko'p beriladigan savollar (FAQ)</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm mb-4">Yangiliklarga a'zo bo'ling</h4>
              <p className="text-xs mb-3">
                Eng yangi chegirma va aksiyalardan birinchilardan bo'lib xabardor bo'ling.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email..."
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-indigo-500"
                />
                <button
                  onClick={() => alert("A'zo bo'lganingiz uchun rahmat!")}
                  className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold transition"
                >
                  OK
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
            <p>© {new Date().getFullYear()} ShopZone. Barcha huquqlar himoyalangan.</p>
            <p className="mt-2 sm:mt-0">Next.js & Tailwind CSS asosida yaratilgan.</p>
          </div>
        </div>
      </footer>

      {/* 9. CART SLIDE-OVER DRAWER */}
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
                  <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl flex items-center gap-3 animate-fade-in">
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
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-semibold hover:bg-indigo-700"
                    >
                      Xaridni davom ettirish
                    </button>
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
                    className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg shadow-indigo-200 transition active:scale-95 flex items-center justify-center gap-2"
                  >
                    Rasmiylashtirish <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
