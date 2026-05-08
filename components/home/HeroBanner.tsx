"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  BadgePercent,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import { formatPrice } from "@/lib/utils";

const featuredProducts = [
  {
    id: 1,
    title: "Apple AirPods Pro",
    image:
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=1200&auto=format&fit=crop",
    price: 199,
    originalPrice: 249,
  },
  {
    id: 2,
    title: "Sony WH-1000XM5 Headphones",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
    price: 299,
    originalPrice: 399,
  },
];

export default function HeroBanner() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (!email.includes("@")) return;

    setSubscribed(true);
    setEmail("");

    setTimeout(() => {
      setSubscribed(false);
    }, 3000);
  };

  const badges = [
    {
      label: "New Deal",
      color: "bg-orange-500",
    },
    {
      label: "Best Seller",
      color: "bg-emerald-500",
    },
    {
      label: "Ending Soon",
      color: "bg-violet-500",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0B1020]">
      {/* Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[300px] bg-orange-500/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-violet-500/20 blur-[120px]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* LEFT */}
          <div>
            {/* Small badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-white mb-6 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-orange-400" />
              Trusted by 10,000+ shoppers
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl font-black leading-tight text-white">
              Discover the
              <span className="block text-orange-400">
                Best Tech Deals
              </span>
              Every Day
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-xl">
              Save big on premium gadgets, software, accessories,
              and exclusive digital products with daily updated offers.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2 text-sm text-gray-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Verified Deals
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-200">
                <BadgePercent className="w-4 h-4 text-orange-400" />
                Up to 70% OFF
              </div>
            </div>

            {/* Subscribe */}
            <div className="mt-10 flex flex-col sm:flex-row gap-3 max-w-xl">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" && handleSubscribe()
                }
                className="flex-1 h-14 rounded-xl bg-white/10 border border-white/10 px-5 text-white placeholder:text-gray-400 outline-none focus:border-orange-400 backdrop-blur-md"
              />

              <button
                onClick={handleSubscribe}
                className="h-14 px-7 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-all active:scale-95"
              >
                {subscribed ? "Subscribed ✓" : "Subscribe"}
              </button>
            </div>

            {subscribed && (
              <p className="mt-3 text-sm text-emerald-400">
                🎉 You’re subscribed successfully!
              </p>
            )}

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mt-10">
              <button
                onClick={() => router.push("/products")}
                className="inline-flex items-center gap-2 bg-white text-black hover:bg-gray-100 px-6 h-12 rounded-xl font-semibold transition"
              >
                Browse Deals
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => router.push("/products")}
                className="inline-flex items-center gap-2 border border-white/15 bg-white/5 hover:bg-white/10 text-white px-6 h-12 rounded-xl font-medium transition"
              >
                <Search className="w-4 h-4" />
                Search Products
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featuredProducts.map((product, i) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md hover:-translate-y-2 transition-all duration-300"
              >
                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span
                    className={`${badges[i].color} px-3 py-1 rounded-full text-xs font-bold text-white`}
                  >
                    {badges[i].label}
                  </span>
                </div>

                {/* Image */}
                <div className="relative h-64 w-full bg-gradient-to-b from-white/5 to-transparent">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-white font-semibold leading-snug line-clamp-2 min-h-[24px]">
                    {product.title}
                  </h3>

                  <div className="mt-4 flex items-center gap-2">
                    <span className="text-2xl font-black text-orange-400">
                      {formatPrice(product.price)}
                    </span>

                    <span className="text-sm text-gray-400 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  </div>

                  <div className="mt-4 inline-flex items-center gap-2 text-sm text-white/80 group-hover:text-orange-300 transition-colors">
                    View Deal
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}