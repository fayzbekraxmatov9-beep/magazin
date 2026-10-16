"use client";

import React from "react";
import Link from "next/link";
import {
  Truck,
  ShieldCheck,
  RotateCcw,
  Headphones,
  CheckCircle2,
  Clock,
  CreditCard,
  Award,
  Sparkles,
  ChevronRight,
  Home as HomeIcon,
  ArrowRight,
  Zap,
  Lock,
  ThumbsUp,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ADVANTAGES = [
  {
    icon: Truck,
    iconColor: "text-indigo-600 bg-indigo-50 border-indigo-100",
    title: "Tez va Bepul Yetkazib Berish",
    short: "Toshkent shahri bo'ylab bir kunda, viloyatlarga 24-48 soatda",
    description:
      "Bizning shaxsiy kuryerlik tarmog'imiz va yetakchi logistika hamkorlarimiz tufayli buyurtmangiz eshigingizgacha xavfsiz va tez yetkazib beriladi. 500 000 so'mdan yuqori har qanday xarid uchun Toshkent shahrida yetkazish mutlaqo bepul!",
    highlights: [
      "Toshkent shahri bo'yicha ekspress yetkazish (3-5 soat)",
      "O'zbekistonning barcha 12 viloyatiga ishonchli pochta",
      "Kuryer yetib kelganda tovar holatini tekshirish imkoniyati",
      "Buyurtma qayerdaligini SMS orqali kuzatish",
    ],
  },
  {
    icon: ShieldCheck,
    iconColor: "text-emerald-600 bg-emerald-50 border-emerald-100",
    title: "100% Original va Rasmiy Kafolat",
    short: "12 oydan 24 oygacha rasmiy xizmat ko'rsatish kafolati",
    description:
      "ShopZone do'konidagi har bir mahsulot ishlab chiqaruvchilar va rasmiy distribyutorlardan to'g'ridan-to'g'ri olib kelinadi. Har bir qurilmaga rasmiy kafolat taloni taqdim etiladi.",
    highlights: [
      "Faqat original, sertifikatlangan tovarlar",
      "O'zbekiston bo'ylab akkreditatsiyadan o'tgan servis markazlari",
      "IMEI ro'yxatidan o'tgan va bojxona to'lovlari to'liq to'langan smartfonlar",
      "Zavod nuqsonlari aniqlanganda darhol yangisiga almashtirish",
    ],
  },
  {
    icon: RotateCcw,
    iconColor: "text-amber-600 bg-amber-50 border-amber-100",
    title: "14 Kun Ichida Oson Qaytarish",
    short: "Mahsulot yoqmasa yoki mos kelmasa, hech qanday muammosiz almashtirish",
    description:
      "Xaridingizdan to'liq qoniqishingiz biz uchun muhim. Agar mahsulot siz kutganingizdek bo'lmasa, uni 14 kun ichida boshqa modelga almashtirishingiz yoki pulingizni to'liq qaytarib olishingiz mumkin.",
    highlights: [
      "Murakkab byurokratiyasiz oson jarayon",
      "3 ish kuni ichida pulni kartaga qaytarish",
      "Boshqa model yoki rangga bepul almashtirish",
      "Kuryerimiz o'zi kelib qaytariladigan tovarni olib ketadi",
    ],
  },
  {
    icon: Headphones,
    iconColor: "text-purple-600 bg-purple-50 border-purple-100",
    title: "24/7 Professional Qo'llab-quvvatlash",
    short: "Har qanday savol va muammolar bo'yicha mutaxassislar konsultatsiyasi",
    description:
      "Bizning texnik yordam va konsultatsiya markazimiz dam olish kunlarisiz, 24 soat xizmatingizda. Mahsulot tanlash, to'lov yoki sozlash bo'yicha bepul yordam beramiz.",
    highlights: [
      "O'zbek va rus tillarida ravon muloqot",
      "Telegram bot va telefon qo'ng'iroqlari orqali tezkor javob",
      "Qurilmalarni dastlabki sozlash va ma'lumotlarni ko'chirish bo'yicha yo'riqnoma",
      "Har bir mijozga individual yondashuv",
    ],
  },
  {
    icon: CreditCard,
    iconColor: "text-sky-600 bg-sky-50 border-sky-100",
    title: "Xavfsiz va Qulay To'lov Usullari",
    short: "Uzum, Payme, Click, naqd pul yoki muddatli to'lov (nasiya)",
    description:
      "O'zingizga qulay to'lov turidan foydalaning. Tovarni qabul qilib olgach naqd yoki karta orqali to'lash imkoni mavjud. Shuningdek, boshlang'ich to'lovsiz 3 oydan 24 oygacha bo'lib to'lash xizmati mavjud.",
    highlights: [
      "Payme, Click, Uzum orqali 0% komissiya",
      "Tovar qo'lingizga yetib borgandan keyin to'lash (COD)",
      "Ortiqcha hujjatlarsiz tezkor muddatli to'lov (nasiya)",
      "Barcha to'lovlar xavfsiz shifrlangan tizimda amalga oshiriladi",
    ],
  },
  {
    icon: Award,
    iconColor: "text-rose-600 bg-rose-50 border-rose-100",
    title: "Eng Arzon Narx Kafolati & Keshbek",
    short: "Bozordagi eng raqobatbardosh narxlar va har bir xarid uchun bonuslar",
    description:
      "Biz mahsulotlarni to'g'ridan-to'g'ri ishlab chiqaruvchilardan keltirganimiz sababli ortiqcha ustamalarsiz, eng adolatli narxlarni taklif qilamiz. Doimiy mijozlarimiz uchun keshbek va sovg'alar dasturi ishlaydi.",
    highlights: [
      "Har bir xariddan 3% gacha shaxsiy keshbek",
      "Aksiyalar va doimiy chegirmalar tizimi",
      "Haftalik maxsus arzon narxdagi takliflar",
      "Katta bayramlar arafasida qimmatbaho sovg'alar o'yini",
    ],
  },
];

export default function AfzalliklarPage() {
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
            <span className="text-indigo-300 font-medium">Bizning Afzalliklarimiz</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-400/30 px-3 py-1 rounded-full text-indigo-300 text-xs font-medium mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Nega aynan ShopZone?
            </div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Biz bilan xarid qilish nima uchun qulay va ishonchli?
            </h1>
            <p className="text-sm md:text-base text-slate-300 mt-3 leading-relaxed">
              Mijozlarimizga nafaqat yuqori sifatli zamonaviy texnika va mahsulotlarni, balki O'zbekistondagi eng qulay servis va xizmat ko'rsatish darajasini taqdim etamiz.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Counter Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-3xl md:text-4xl font-black text-indigo-600">50,000+</div>
              <div className="text-xs text-slate-500 mt-1 font-medium">Muvaffaqiyatli buyurtmalar</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-3xl md:text-4xl font-black text-emerald-600">100%</div>
              <div className="text-xs text-slate-500 mt-1 font-medium">Asl va Kafolatli tovarlar</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-3xl md:text-4xl font-black text-amber-600">14 kun</div>
              <div className="text-xs text-slate-500 mt-1 font-medium">Bexavotir qaytarish kafolati</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-3xl md:text-4xl font-black text-purple-600">24/7</div>
              <div className="text-xs text-slate-500 mt-1 font-medium">Mijozlarga xizmat ko'rsatish</div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Advantages Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 flex-1 w-full">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-indigo-600 font-bold text-xs tracking-wider uppercase">
            Xizmat Standartlari
          </span>
          <h2 className="text-3xl font-black text-slate-900 mt-1">
            Har bir mijozimiz uchun kafolatlangan imtiyozlar
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Har bir bosqichda sizning qulayligingiz va xavfsizligingizni birinchi o'ringa qo'yamiz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ADVANTAGES.map((adv, index) => {
            const IconComponent = adv.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-50/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center border mb-6 ${adv.iconColor}`}
                  >
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{adv.title}</h3>
                  <p className="text-xs font-semibold text-indigo-600 mb-3">{adv.short}</p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {adv.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    {adv.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* How it works section */}
        <div className="mt-16 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xs">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-indigo-600 font-bold text-xs tracking-wider uppercase">
              Jarayon
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              Qanday qilib buyurtma berish mumkin?
            </h3>
            <p className="text-xs text-slate-500 mt-2">
              Atigi 4 ta oddiy qadam bilan orzuingizdagi tovar egasiga aylaning.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
              {
                step: "01",
                title: "Tovarni tanlang",
                desc: "Katalogdan kerakli gadjet yoki mahsulotni savatga qo'shing.",
              },
              {
                step: "02",
                title: "Buyurtma bering",
                desc: "Manzil va telefon raqamingizni kiritib tasdiqlang.",
              },
              {
                step: "03",
                title: "Tezkor yetkazish",
                desc: "Kuryerimiz qisqa vaqt ichida eshigingizgacha olib boradi.",
              },
              {
                step: "04",
                title: "Qabul qilib to'lang",
                desc: "Tovarni tekshirib, keyin to'lovni amalga oshiring.",
              },
            ].map((s, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-100 relative group hover:bg-indigo-50/50 hover:border-indigo-200 transition"
              >
                <div className="text-3xl font-black text-indigo-600/30 group-hover:text-indigo-600 transition mb-3">
                  {s.step}
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-1">{s.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-12 rounded-3xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-black">
              O'zingizga yoqqan tovarlarni tanlashga tayyormisiz?
            </h3>
            <p className="text-sm text-indigo-100 max-w-xl">
              Katalogimizda 100 dan ortiq eng so'nggi zamonaviy gadjet va mahsulotlar kutmoqda.
            </p>
          </div>
          <Link
            href="/katalog"
            className="px-8 py-3.5 bg-white text-indigo-600 hover:bg-slate-100 font-bold rounded-xl shadow-lg transition flex items-center gap-2 shrink-0 cursor-pointer text-sm"
          >
            Katalogga o'tish <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
