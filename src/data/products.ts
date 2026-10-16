export interface Product {
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

export const PRODUCTS: Product[] = [
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

export const CATEGORIES = [
  { name: "Barchasi", count: 8 },
  { name: "Smartfonlar", count: 2 },
  { name: "Quloqchinlar", count: 1 },
  { name: "Aqlli Soatlar", count: 1 },
  { name: "Noutbuklar", count: 1 },
  { name: "Kiyim & Poyabzal", count: 1 },
  { name: "O'yinlar", count: 1 },
  { name: "Kameralar", count: 1 },
];
