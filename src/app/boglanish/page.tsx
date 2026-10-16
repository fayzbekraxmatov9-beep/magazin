"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Home as HomeIcon,
  ChevronRight,
  Sparkles,
  MessageCircle,
  HelpCircle,
  Building,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BoglanishPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) return;

    setIsSent(true);
    setName("");
    setPhone("");
    setSubject("");
    setMessage("");
    setTimeout(() => setIsSent(false), 5000);
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
            <span className="text-indigo-300 font-medium">Bog'lanish</span>
          </nav>

          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-400/30 px-3 py-1 rounded-full text-indigo-300 text-xs font-medium mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Biz bilan aloqada bo'ling
            </div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white">
              Biz bilan bog'lanish
            </h1>
            <p className="text-sm md:text-base text-slate-300 mt-2">
              Savollaringiz yoki takliflaringiz bormi? Operatorlarimiz sizga yordam berishdan mamnun bo'lishadi!
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 w-full">
        {/* Contact info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 hover:border-indigo-300 transition shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Telefon raqam</h3>
            <p className="text-xs text-slate-500 mt-1">Har kuni 09:00 dan 21:00 gacha</p>
            <a
              href="tel:+998972988788"
              className="inline-block mt-3 text-sm font-extrabold text-indigo-600 hover:text-indigo-700"
            >
              +998 (97) 298-87-88
            </a>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 hover:border-emerald-300 transition shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Telegram Bot / Kanal</h3>
            <p className="text-xs text-slate-500 mt-1">Tezkor onlayn maslahat</p>
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-sm font-extrabold text-emerald-600 hover:text-emerald-700"
            >
              @ShopZone_Support
            </a>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 hover:border-purple-300 transition shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Elektron pochta</h3>
            <p className="text-xs text-slate-500 mt-1">Hamkorlik va takliflar uchun</p>
            <a
              href="mailto:info@shopzone.uz"
              className="inline-block mt-3 text-sm font-extrabold text-purple-600 hover:text-purple-700"
            >
              info@shopzone.uz
            </a>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 hover:border-amber-300 transition shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Bosh ofis va Shourum</h3>
            <p className="text-xs text-slate-500 mt-1">Toshkent sh., Chilonzor tumani</p>
            <span className="inline-block mt-3 text-xs font-semibold text-amber-700">
              Bunyodkor shoh ko'chasi, 42-uy
            </span>
          </div>
        </div>

        {/* Contact Form & Office / FAQ Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-200 shadow-xs">
            <div className="mb-6">
              <h2 className="text-2xl font-black text-slate-900">
                Xabar yoki buyurtma bo'yicha savol yo'llang
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Quyidagi formani to'ldiring, 15 daqiqa ichida mutaxassisimiz siz bilan bog'lanadi.
              </p>
            </div>

            {isSent && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <div>
                  <h4 className="font-bold">Xabaringiz muvaffaqiyatli qabul qilindi!</h4>
                  <p className="text-xs text-emerald-700 mt-0.5">
                    Operatorimiz tez orada siz bilan telefon orqali bog'lanadi.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Ismingiz *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Masalan: Sardor"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-xs sm:text-sm focus:bg-white focus:outline-hidden focus:border-indigo-600 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Telefon raqamingiz *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+998 (90) 123-45-67"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-xs sm:text-sm focus:bg-white focus:outline-hidden focus:border-indigo-600 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Mavzu
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-xs sm:text-sm focus:bg-white focus:outline-hidden focus:border-indigo-600 transition cursor-pointer"
                >
                  <option value="">Mavzuni tanlang (ixtiyoriy)</option>
                  <option value="buyurtma">Buyurtma holatini bilish</option>
                  <option value="yetkazish">Yetkazib berish xizmati haqida</option>
                  <option value="kafolat">Kafolat va servis xizmati</option>
                  <option value="hamkorlik">Hamkorlik va takliflar</option>
                  <option value="boshqa">Boshqa masala</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Xabaringiz matni *
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Savolingiz yoki taklifingizni batafsil yozib qoldiring..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-xs sm:text-sm focus:bg-white focus:outline-hidden focus:border-indigo-600 transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-100 transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" /> Xabarni yuborish
              </button>
            </form>
          </div>

          {/* FAQ & Work hours (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Work hours card */}
            <div className="bg-slate-900 text-white p-8 rounded-3xl space-y-4">
              <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-wider">
                <Clock className="w-4 h-4" /> Ish vaqti
              </div>
              <h3 className="text-xl font-bold">Har kuni xizmatingizdamiz</h3>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 pt-2 border-t border-slate-800">
                <div className="flex justify-between">
                  <span>Dushanba - Juma:</span>
                  <span className="font-bold text-white">09:00 - 21:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Shanba - Yakshanba:</span>
                  <span className="font-bold text-white">10:00 - 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Onlayn buyurtmalar:</span>
                  <span className="font-bold text-emerald-400">24/7 uzluksiz</span>
                </div>
              </div>
            </div>

            {/* Quick FAQ preview */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                <HelpCircle className="w-4 h-4 text-indigo-600" />
                Tez-tez beriladigan savollar
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <h4 className="font-bold text-slate-800 mb-1">
                    Yetkazib berish qancha vaqt oladi?
                  </h4>
                  <p className="text-slate-500 leading-relaxed">
                    Toshkent shahri ichida buyurtma berilgan kunda (3-5 soatda), viloyatlarga esa 24-48 soat ichida yetkaziladi.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <h4 className="font-bold text-slate-800 mb-1">
                    To'lovni mahsulotni ko'rgach qilsa bo'ladimi?
                  </h4>
                  <p className="text-slate-500 leading-relaxed">
                    Ha, tovar qo'lingizga yetib borgandan keyin naqd yoki Uzum/Click/Payme orqali to'lashingiz mumkin.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <h4 className="font-bold text-slate-800 mb-1">
                    Kafolat bormi?
                  </h4>
                  <p className="text-slate-500 leading-relaxed">
                    Barcha gadjet va maishiy texnikalarga 12 oygacha rasmiy servis kafolati beriladi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
