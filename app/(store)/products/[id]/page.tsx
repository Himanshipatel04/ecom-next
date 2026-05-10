export const runtime = "nodejs";
export const dynamic = "force-dynamic";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Star, Shield, RefreshCw, Award, ShoppingCart, Zap } from "lucide-react";
import { getAllProductIds, getProductById } from "@/lib/fakestoreapi";
import { formatPrice, getDiscountPercent } from "@/lib/utils";
import AddToCartButton from "./AddToCartButton";
import { Badge } from "@/components/ui/Badge";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

// export async function generateStaticParams() {
//   const ids = await getAllProductIds();
//   return ids;
// }

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  try {
    const product = await getProductById(id);
    return {
      title: `${product.title} | Lifetime Access`,
      description: product.description.slice(0, 160),
      openGraph: {
        images: [product.image],
      },
    };
  } catch {
    return { title: "Product Not Found" };
  }
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { id } = await params;

  let product;
  try {
    product = await getProductById(id);
  } catch {
    notFound();
  }

  const originalPrice = parseFloat((product.price * 1.6).toFixed(2));
  const discount = getDiscountPercent(originalPrice, product.price);

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <a href="/" className="hover:text-brand-500 transition-colors">Home</a>
          <span>/</span>
          <a href="/products" className="hover:text-brand-500 transition-colors">Products</a>
          <span>/</span>
          <span className="text-gray-700 capitalize">{product.category}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 flex items-center justify-center aspect-square sticky top-24">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain p-10"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Discount badge */}
              <div className="absolute top-4 right-4 bg-brand-500 text-white text-sm font-bold rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
                -{discount}%
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="animate-fade-in">
            {/* Badge */}
            <div className="flex gap-2 mb-4">
              <Badge variant="new">New Deal</Badge>
              <Badge variant="bestseller">{product.category}</Badge>
            </div>

            <h1 className="font-display text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-snug">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.round(product.rating.rate)
                        ? "text-amber-400 fill-amber-400"
                        : "text-gray-200 fill-gray-200"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">
                {product.rating.rate} ({product.rating.count} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="bg-gradient-to-r from-navy-500 to-dark-400 rounded-xl p-5 mb-6">
              <div className="flex items-end gap-3">
                <span className="font-display text-4xl font-extrabold text-black">
                  {formatPrice(product.price)}
                </span>
                <span className="text-gray-400 line-through text-lg mb-1">
                  {formatPrice(originalPrice)}
                </span>
              </div>
              <p className="text-emerald-400 text-sm font-semibold mt-1">
                🎉 You save {formatPrice(originalPrice - product.price)} ({discount}% OFF)
              </p>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">About this deal</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Trust */}
            <div className="grid grid-cols-3 gap-3 mb-7">
              <TrustItem icon={<Shield className="w-4 h-4" />} label="Secure checkout" />
              <TrustItem icon={<RefreshCw className="w-4 h-4" />} label="30-day refund" />
              <TrustItem icon={<Award className="w-4 h-4" />} label="Lifetime access" />
            </div>

            {/* CTA */}
            <div className="flex gap-3">
              <AddToCartButton product={product} />
              <button className="btn-outline flex-1 justify-center bg-orange-500 hover:bg-orange-600 text-white rounded-md font-bold text-sm transition-all duration-300 active:scale-95">
               
                Buy Now
              </button>
            </div>

            {/* Submit deal */}
            <p className="text-xs text-gray-400 mt-5 text-center">
              Want to list your product?{" "}
              <a href="#" className="text-brand-500 hover:underline">Submit a Deal</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrustItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5 bg-gray-100 rounded-lg py-3 text-center">
      <div className="text-navy-500">{icon}</div>
      <p className="text-xs font-medium text-gray-600">{label}</p>
    </div>
  );
}