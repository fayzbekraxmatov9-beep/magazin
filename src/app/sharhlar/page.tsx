"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Star,
  CheckCircle2,
  ThumbsUp,
  MessageSquare,
  Home as HomeIcon,
  ChevronRight,
  Sparkles,
  Send,
  Filter,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Review {
  id: number;
  name: string;
  role: string;
  city: string;
  product: string;
  rating: number;
  date: string;
  comment: string;
  likes: number;
  verified: boolean;
}

const INITIAL_REVIEWS: Review[] = [
  {
    id: 1,
    name: "Anvar Karimov",
    role: "Dasturchi",
    city: "Toshkent sh.",
    product: "MacBook Air 15\" M3",
    rating: 5,
    date: "14 Oktabr, 2026",
    comment:
      "MacBook Air buyurtma qilgandim, 3 soat ichida Toshkent bo'ylab bepul olib kelib berishdi. Hammasi plombali, original, kafolat qog'ozi bilan keldi. Ishlashiga gap yo'q, xizmat ko'rsatish darajasi 10/10!",
    likes: 24,
    verified: true,
  },
  {
    id: 2,
    name: "Dilnoza Rahimova",
    role: "Grafik Dizayner",
    city: "Samarqand sh.",
    product: "Apple iPhone 15 Pro Max 256GB",
    rating: 5,
    date: "10 Oktabr, 2026",
    comment:
      "iPhone 15 Pro Max xarid qildim. Narxlari boshqa do'konlarga qaraganda ancha arzonroq ekan, qulay to'lov usullari ham bor. Samarqandga 24 soat ichida yetib keldi. Rahmat katta!",
    likes: 18,
    verified: true,
  },
  {
    id: 3,
    name: "Sardor Aliyev",
    role: "Tadbirkor",
    city: "Toshkent sh.",
    product: "Sony WH-1000XM5 Simsiz Quloqchin",
    rating: 5,
    date: "08 Oktabr, 2026",
    comment:
      "Sony WH-1000XM5 quloqchini ovoz sifati ajoyib. Shovqinni bekor qilishi (ANC) samolyotda va shovqin joylarda juda foydali. Saytda savatchaga qo'shish va buyurtma berish jarayoni juda oson va tezkor ishlangan.",
    likes: 15,
    verified: true,
  },
  {
    id: 4,
    name: "Malika Yusupova",
    role: "Marketing Mutaxassisi",
    city: "Buxoro sh.",
    product: "Apple Watch Ultra 2 Titanium",
    rating: 5,
    date: "05 Oktabr, 2026",
    comment:
      "Aqlli soat juda baquvvat va chiroyli ekan. Batareyasi 3 kunga bemalol yetadi. Qadoqlash juda puxta qilingan, kuryerlar ham xushmuomala. Keyingi xaridlarni ham albatta shu yerdan qilaman.",
    likes: 11,
    verified: true,
  },
  {
    id: 5,
    name: "Javohir Toshpulatov",
    role: "Kontent Meyker",
    city: "Farg'ona sh.",
    product: "DJI Mini 4 Pro Fly More Combo",
    rating: 5,
    date: "02 Oktabr, 2026",
    comment:
      "Dron sifati yuqori darajada, videolarni 4K formatda juda tiniq oladi. Narxi boshqa joylarga qaraganda ancha hamyonbop. Keshbek ballari ham hisobimga tushdi.",
    likes: 9,
    verified: true,
  },
  {
    id: 6,
    name: "Bekzod Umarov",
    role: "Geymer / Muhandis",
    city: "Toshkent sh.",
    product: "PlayStation 5 Slim 1TB",
    rating: 4,
    date: "28 Sentyabr, 2026",
    comment:
      "Konsol ajoyib ishlayapti, bolalar bilan miriqib o'ynayapmiz. Faqat kuryer tirbandlik sababli 1 soat kechikib keldi, lekin operatorlar xushmuomalalik bilan ogohlantirib turishdi. Umuman olganda tavsiya qilaman!",
    likes: 7,
    verified: true,
  },
];

export default function SharhlarPage() {
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [filterRating, setFilterRating] = useState<number | "all">("all");
  const [likedReviews, setLikedReviews] = useState<number[]>([]);

  // New review form states
  const [newName, setNewName] = useState("");
  const [newCity, setNewCity] = useState("");
  const [newProduct, setNewProduct] = useState("");
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const filteredReviews = reviews.filter((item) => {
    if (filterRating === "all") return true;
    return item.rating === filterRating;
  });

  const handleLike = (id: number) => {
    if (likedReviews.includes(id)) {
      setReviews((prev) =>
        prev.map((r) => (r.id === id ? { ...r, likes: r.likes - 1 } : r))
      );
      setLikedReviews((prev) => prev.filter((item) => item !== id));
    } else {
      setReviews((prev) =>
        prev.map((r) => (r.id === id ? { ...r, likes: r.likes + 1 } : r))
      );
      setLikedReviews((prev) => [...prev, id]);
    }
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newComment.trim()) return;

    const newRev: Review = {
      id: Date.now(),
      name: newName,
      role: "Xaridor",
      city: newCity || "O'zbekiston",
      product: newProduct || "Umumiy xarid",
      rating: newRating,
      date: "Hozirgina",
      comment: newComment,
      likes: 0,
      verified: true,
    };

    setReviews([newRev, ...reviews]);
    setFormSubmitted(true);
    setNewName("");
    setNewCity("");
    setNewProduct("");
    setNewComment("");
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <Navbar />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-3">
            <Link href="/" className="hover:text-white flex items-center gap-1 transition">
              <HomeIcon className="w-3.5 h-3.5" /> Bosh sahifa
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-indigo-300 font-medium">Mijozlar Sharhlari</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-400/30 px-3 py-1 rounded-full text-indigo-300 text-xs font-medium mb-3">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                Haqiqiy xaridorlar fikrlari
              </div>
              <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                Mijozlarimiz nima deydi?
              </h1>
              <p className="text-sm md:text-base text-slate-300 mt-2 max-w-xl">
                ShopZone xizmatlaridan foydalangan xaridorlarning samimiy fikr-mulohazalari va baholari.
              </p>
            </div>

            {/* Overall Rating Card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-3xl flex items-center gap-5 text-white">
              <div className="text-center">
                <div className="text-4xl font-black text-amber-300">4.9</div>
                <div className="flex text-amber-300 gap-0.5 justify-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <div className="text-[10px] text-slate-300 mt-1">5 balldan</div>
              </div>
              <div className="h-12 w-px bg-white/20" />
              <div className="text-xs space-y-1">
                <div className="font-bold text-white">99% mamnun mijozlar</div>
                <div className="text-slate-300">12,000+ dan ortiq tasdiqlangan sharhlar</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Reviews List (Left 8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Filter Pills */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 flex flex-wrap items-center justify-between gap-3 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <Filter className="w-4 h-4 text-indigo-600" />
                <span>Reyting bo'yicha filter:</span>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setFilterRating("all")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer ${
                    filterRating === "all"
                      ? "bg-indigo-600 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  Hammasi ({reviews.length})
                </button>
                <button
                  onClick={() => setFilterRating(5)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition flex items-center gap-1 cursor-pointer ${
                    filterRating === 5
                      ? "bg-amber-500 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  <Star className="w-3 h-3 fill-current" /> 5 yulduz
                </button>
                <button
                  onClick={() => setFilterRating(4)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition flex items-center gap-1 cursor-pointer ${
                    filterRating === 4
                      ? "bg-amber-500 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  <Star className="w-3 h-3 fill-current" /> 4 yulduz
                </button>
              </div>
            </div>

            {/* Review Cards */}
            <div className="space-y-4">
              {filteredReviews.map((rev) => {
                const isLiked = likedReviews.includes(rev.id);
                return (
                  <div
                    key={rev.id}
                    className="bg-white p-6 rounded-3xl border border-slate-200 hover:border-indigo-300 transition-all shadow-xs"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-indigo-600 text-white font-bold flex items-center justify-center text-base shadow-sm">
                          {rev.name.charAt(0)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-slate-900 text-sm">
                              {rev.name}
                            </h4>
                            {rev.verified && (
                              <span className="inline-flex items-center gap-1 text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full font-semibold">
                                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                                Xarid tasdiqlangan
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] text-slate-400">
                            {rev.role} • {rev.city}
                          </div>
                        </div>
                      </div>

                      {/* Stars & Date */}
                      <div className="flex sm:flex-col items-end gap-1">
                        <div className="flex text-amber-400 gap-0.5">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-current" />
                          ))}
                        </div>
                        <span className="text-[10px] text-slate-400">{rev.date}</span>
                      </div>
                    </div>

                    {/* Product purchased tag */}
                    <div className="inline-block bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-lg text-[11px] text-indigo-600 font-semibold mb-3">
                      🛍️ Tovar: {rev.product}
                    </div>

                    {/* Review text */}
                    <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-4">
                      "{rev.comment}"
                    </p>

                    {/* Like button */}
                    <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs text-slate-500">
                      <span>Bu sharh sizga foydali bo'ldimi?</span>
                      <button
                        onClick={() => handleLike(rev.id)}
                        className={`flex items-center gap-1.5 px-3 py-1 rounded-lg transition cursor-pointer ${
                          isLiked
                            ? "bg-indigo-50 text-indigo-600 font-bold"
                            : "hover:bg-slate-50 text-slate-500"
                        }`}
                      >
                        <ThumbsUp className={`w-3.5 h-3.5 ${isLiked ? "fill-current" : ""}`} />
                        <span>Foydali ({rev.likes})</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Leave a Review Form (Right 4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs sticky top-24">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-base mb-1">
                <MessageSquare className="w-5 h-5 text-indigo-600" />
                O'z fikringizni qoldiring
              </div>
              <p className="text-xs text-slate-500 mb-5">
                Xaridingiz haqida yozib qoldiring va boshqalarga to'g'ri tanlov qilishda yordam bering!
              </p>

              {formSubmitted && (
                <div className="mb-4 p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Sharhingiz qabul qilindi va ro'yxatga qo'shildi!</span>
                </div>
              )}

              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Ism va familiyangiz *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Masalan: Azizbek Aliyev"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs focus:bg-white focus:outline-hidden focus:border-indigo-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Shahringiz
                  </label>
                  <input
                    type="text"
                    placeholder="Masalan: Toshkent"
                    value={newCity}
                    onChange={(e) => setNewCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs focus:bg-white focus:outline-hidden focus:border-indigo-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Sotib olingan tovar
                  </label>
                  <input
                    type="text"
                    placeholder="Masalan: iPhone 15 Pro yoki Sony WH-1000XM5"
                    value={newProduct}
                    onChange={(e) => setNewProduct(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs focus:bg-white focus:outline-hidden focus:border-indigo-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Bahoyingiz
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewRating(star)}
                        className="p-1 cursor-pointer focus:outline-hidden"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= newRating
                              ? "text-amber-400 fill-current"
                              : "text-slate-300"
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs font-bold text-slate-600 ml-2">
                      {newRating} / 5
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Sharhingiz matni *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Yetkazib berish, tovar sifati va xizmat haqida o'z taassurotlaringizni yozing..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs focus:bg-white focus:outline-hidden focus:border-indigo-600 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-100 transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" /> Sharhni yuborish
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
