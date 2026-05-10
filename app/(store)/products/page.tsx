export const runtime = "nodejs";
import { Metadata } from "next";
import { Suspense } from "react";
import { getAllProducts, getCategories } from "@/lib/fakestoreapi";
import ProductCard from "@/components/products/ProductCard";
import CategoryFilter from "@/components/products/CategoryFilter";

export const metadata: Metadata = {
  title: "All Products – Software Deals & Tools",
  description:
    "Browse all handpicked software deals, tools, and resources at insane prices.",
};

export const dynamic = "force-dynamic";

interface ProductsPageProps {
  searchParams: Promise<{ category?: string; search?: string }>;
}


export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const { category, search } = await searchParams;

  const [allProducts, categories] = await Promise.all([
    getAllProducts(),
    getCategories(),
  ]);

  let filtered = allProducts;

  if (category && category !== "all") {
    filtered = filtered.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase(),
    );
  }

  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q),
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Premium Header */}
      <div className="relative bg-[#0a192f] py-16 overflow-hidden">
        
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500 blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
              {search ? (
                <>
                  Results for <span className="text-blue-400">"{search}"</span>
                </>
              ) : (
                "Explore Premium Deals"
              )}
            </h1>
            <p className="text-gray-400 text-lg">
              Unlock the best software tools at fraction of the cost.{" "}
              {filtered.length} curated offers live now.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4  z-20 pb-20">
        {/* Category Filter Container */}
        <div className="bg-gray-800 p-2 rounded-3xl shadow-xl shadow-gray-200/50 my-5">
          <Suspense
            fallback={
              <div className="h-12 animate-pulse bg-gray-100 rounded-xl" />
            }
          >
            <CategoryFilter categories={categories} />
          </Suspense>
        </div>

        {/* Product Grid */}
        {filtered.length === 0 ? (
          <p>No products found !</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
