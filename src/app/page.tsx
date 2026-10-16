"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Truck,
  ShieldCheck,
  RotateCcw,
  Headphones,
  ArrowRight,
  SlidersHorizontal,
  Sparkles,
  Star,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Barchasi");
  const [searchQuery, setSearchQuery] = useState("");
  const { addToCart } = useCart();

  // Filter products for homepage preview
  const filteredProducts = PRODUCTS.filter((item) => {
    const matchesCategory =
      selectedCategory === "Barchasi" || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      {/* 1. NAVBAR */}
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* 2. HERO BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white py-16 md:py-24">
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-pink-300 to-amber-200">
                  zamonaviy mahsulotlar
                </span>
              </h1>
              <p className="text-slate-300 text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Smartfonlar, noutbuklar, aqlli gadjetlar va zamonaviy aksessuarlar.
                1 yillik rasmiy kafolat va O'zbekiston bo'ylab 24 soat ichida yetkazib berish.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-2">
                <Link
                  href="/katalog"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 transition transform hover:-translate-y-0.5"
                >
                  Katalogga o'tish <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/afzalliklar"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 font-semibold border border-slate-700 text-center transition"
                >
                  Afzalliklarimiz
                </Link>
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
              <div className="relative mx-auto max-w-md rounded-3xl overflow-hidden bg-gradient-to-b from-indigo-500/10 to-purple-500/10 p-3 border border-indigo-400/20 backdrop-blur-xl shadow-2xl">
                <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80"
                    alt="iPhone 15 Pro Max"
                    fill
                    className="object-cover hover:scale-105 transition duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
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
                        className="bg-white text-slate-900 px-3.5 py-1.5 rounded-lg text-xs font-bold hover:bg-slate-100 transition cursor-pointer"
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

      {/* 3. VALUE PROPOSITIONS / FEATURES */}
      <section id="afzalliklar" className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/afzalliklar" className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-300 hover:shadow-md transition group">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm group-hover:text-indigo-600 transition">Tez yetkazib berish</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Respublika bo'ylab eng tezkor pochta va kuryerlik xizmati.
                </p>
              </div>
            </Link>

            <Link href="/afzalliklar" className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-300 hover:shadow-md transition group">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm group-hover:text-emerald-600 transition">Rasmiy kafolat</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Barcha tovarlar original va 12 oygacha rasmiy servis kafolatiga ega.
                </p>
              </div>
            </Link>

            <Link href="/afzalliklar" className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-amber-300 hover:shadow-md transition group">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <RotateCcw className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm group-hover:text-amber-600 transition">14 kun qaytarish</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Mahsulot ma'qul kelmasa, hech qanday qiyinchiliksiz almashtirib beramiz.
                </p>
              </div>
            </Link>

            <Link href="/afzalliklar" className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-purple-300 hover:shadow-md transition group">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Headphones className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm group-hover:text-purple-600 transition">24/7 Maslahat</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Operatorlarimiz istalgan savolingizga o'zbek tilida javob beradi.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT CATALOG PREVIEW */}
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

          <div className="flex items-center gap-3">
            <Link
              href="/katalog"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-indigo-100 transition"
            >
              To'liq katalogga o'tish <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Category filter pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.name
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-indigo-300 hover:text-indigo-600"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View all banner */}
        <div className="mt-12 text-center">
          <Link
            href="/katalog"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-bold text-sm transition transform hover:scale-105"
          >
            Barcha mahsulotlar sahifasiga o'tish ({PRODUCTS.length} ta mahsulot) <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 5. PROMO BANNER */}
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
                className="px-6 py-3 rounded-xl bg-white text-indigo-700 font-bold text-sm hover:bg-slate-100 transition shadow-lg shrink-0 cursor-pointer"
              >
                Promokodni olish
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CUSTOMER REVIEWS */}
      <section id="mijozlar" className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
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
            <Link
              href="/sharhlar"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-indigo-100 transition shrink-0"
            >
              Barcha sharhlarni ko'rish <ArrowRight className="w-4 h-4" />
            </Link>
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

      {/* 7. FOOTER */}
      <Footer />
    </div>
  );
}
