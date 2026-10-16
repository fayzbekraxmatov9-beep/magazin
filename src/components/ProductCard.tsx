"use client";

import React from "react";
import Image from "next/image";
import { Star, ShoppingCart, Check, Heart } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { cart, favorites, addToCart, toggleFavorite } = useCart();
  const isFav = favorites.includes(product.id);
  const inCart = cart.find((item) => item.product.id === product.id);

  const formatPrice = (price: number) => {
    return price.toLocaleString("uz-UZ") + " so'm";
  };

  return (
    <div className="group relative bg-white rounded-2xl border border-slate-200 hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-50/50 transition-all duration-300 flex flex-col overflow-hidden">
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
          className={`absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm transition cursor-pointer ${
            isFav
              ? "text-rose-500 hover:text-rose-600"
              : "text-slate-400 hover:text-rose-500"
          }`}
          title={isFav ? "Saralanganlardan o'chirish" : "Saqlab qo'yish"}
        >
          <Heart className={`w-4 h-4 ${isFav ? "fill-current" : ""}`} />
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
            className={`p-2.5 rounded-xl font-medium transition flex items-center justify-center cursor-pointer ${
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
}
