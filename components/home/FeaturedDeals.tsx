import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Sparkles,
  Star,
  ShoppingCart,
} from "lucide-react";

const products = [
  {
    id: 1,
    title: "Apple AirPods Pro",
    image:
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=1200&auto=format&fit=crop",
    price: "$199",
    oldPrice: "$249",
    rating: 5,
  },
  {
    id: 2,
    title: "Sony WH-1000XM5",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
    price: "$299",
    oldPrice: "$399",
    rating: 5,
  },
  {
    id: 3,
    title: "Apple Watch Series 9",
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1200&auto=format&fit=crop",
    price: "$349",
    oldPrice: "$429",
    rating: 4,
  },
  {
    id: 4,
    title: "MacBook Pro M3",
    image:
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$1499",
    oldPrice: "$1699",
    rating: 5,
  },
];

export default function FeaturedDeals() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-20">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-orange-100 blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-violet-100 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-600">
              <Sparkles className="w-4 h-4" />
              Trending Products
            </div>

            {/* Title */}
            <h2 className="mt-5 text-4xl md:text-5xl font-black tracking-tight text-gray-900">
              Featured Deals
            </h2>

            {/* Subtitle */}
            <p className="mt-4 max-w-2xl text-lg text-gray-500 leading-relaxed">
              Explore premium gadgets, software, and digital
              products at unbeatable prices.
            </p>
          </div>

          {/* View More */}
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 self-start md:self-auto rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:border-orange-300 hover:text-orange-500 hover:shadow-md"
          >
            View All Deals

            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group rounded-3xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gray-50">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                />

                <div className="absolute top-4 left-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">
                  SALE
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: product.rating }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-orange-400 text-orange-400"
                      />
                    )
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 line-clamp-2 min-h-[56px]">
                  {product.title}
                </h3>

                {/* Prices */}
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-2xl font-black text-orange-500">
                    {product.price}
                  </span>

                  <span className="text-sm text-gray-400 line-through">
                    {product.oldPrice}
                  </span>
                </div>

                {/* Button */}
                <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-orange-500">
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}