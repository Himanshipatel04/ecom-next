"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { PlusCircle, Package, ExternalLink, Loader2 } from "lucide-react";
import { AdminProduct } from "@/types";
import { formatPrice } from "@/lib/utils";
import { ProductCardSkeleton } from "@/components/ui/Skeleton";
import toast from "react-hot-toast";

export default function AdminProductsPage() {
  const [products, setProducts] = useState<AdminProduct[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = useCallback(async () => {
    try {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data.data || []);
    } catch {
      toast.error("Failed to load products");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-2xl font-bold text-gray-900">
            Admin Products
          </h1>
          <p className="text-gray-500 mt-1">
            Products added via the admin panel.
          </p>
        </div>
        <Link href="/admin/add-product" className="flex p-4 items-center gap-2 bg-black text-white rounded-md">
          <PlusCircle className="w-4 h-4" />
          Add Product
        </Link>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Array.from({ length: 3 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      ) : products.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 py-20 text-center">
          <Package className="w-16 h-16 text-gray-200 mx-auto mb-4" />
          <h3 className="font-semibold text-gray-700 text-lg mb-2">
            No products yet
          </h3>
          <p className="text-gray-400 text-sm mb-6">
            Add your first product to see it here.
          </p>
          <Link href="/admin/add-product" className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-gray-300 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors">
            <PlusCircle className="w-4 h-4" />
            Add First Product
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Product
                </th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Category
                </th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Price
                </th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Added
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-lg bg-gray-100 overflow-hidden flex-shrink-0">
                        {product.image ? (
                          <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            className="object-contain p-1"
                            sizes="40px"
                          />
                        ) : (
                          <Package className="w-5 h-5 text-gray-400 m-auto" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 line-clamp-1">
                          {product.title}
                        </p>
                        <p className="text-xs text-gray-400 line-clamp-1 mt-0.5">
                          {product.description.slice(0, 60)}…
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="bg-navy-50 text-navy-600 text-xs font-medium px-2.5 py-1 rounded-full capitalize">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="font-bold text-gray-900">
                      {formatPrice(product.price)}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-gray-400 text-xs">
                    {new Date(product.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}