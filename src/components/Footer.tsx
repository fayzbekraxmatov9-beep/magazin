import React from "react";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export default function Footer() {
  return (
    <footer id="aloqa" className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-white">
              <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <span className="text-xl font-black">
                Shop<span className="text-indigo-400">Zone</span>
              </span>
            </Link>
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
              <li>
                <Link href="/katalog?category=Smartfonlar" className="hover:text-white transition">
                  Smartfonlar
                </Link>
              </li>
              <li>
                <Link href="/katalog?category=Noutbuklar" className="hover:text-white transition">
                  Noutbuklar va PC
                </Link>
              </li>
              <li>
                <Link href="/katalog?category=Aqlli+Soatlar" className="hover:text-white transition">
                  Aqlli Gadjetlar
                </Link>
              </li>
              <li>
                <Link href="/katalog?category=Quloqchinlar" className="hover:text-white transition">
                  Quloqchinlar & Aksessuarlar
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4">Mijozlarga</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/afzalliklar" className="hover:text-white transition">
                  Bizning afzalliklarimiz
                </Link>
              </li>
              <li>
                <Link href="/afzalliklar" className="hover:text-white transition">
                  Yetkazib berish va to'lov
                </Link>
              </li>
              <li>
                <Link href="/afzalliklar" className="hover:text-white transition">
                  Kafolat shartlari
                </Link>
              </li>
              <li>
                <Link href="/afzalliklar" className="hover:text-white transition">
                  Tovarni qaytarish
                </Link>
              </li>
              <li>
                <Link href="/boglanish" className="hover:text-white transition">
                  Ko'p beriladigan savollar (FAQ) & Aloqa
                </Link>
              </li>
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
                type="button"
                className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold transition cursor-pointer"
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
  );
}
