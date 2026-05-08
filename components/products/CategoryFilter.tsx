"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useCallback } from "react";

interface CategoryFilterProps {
  categories: string[];
}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const current = searchParams.get("category") || "all";

  const setCategory = useCallback(
    (cat: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (cat === "all") {
        params.delete("category");
      } else {
        params.set("category", cat);
      }
      router.push(`${pathname}?${params.toString()}`);
    },
    [router, pathname, searchParams]
  );

  const allCategories = ["all", ...categories];

  return (
    <div className="flex flex-wrap gap-2">
      {allCategories.map((cat) => (
        <button
          key={cat}
          onClick={() => setCategory(cat)}
          className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 capitalize ${
            current === cat
              ? "bg-orange-500 text-white border-navy-500"
              : "bg-white text-gray-600 border-gray-200 hover:border-brand-400 hover:text-brand-500"
          }`}
        >
          {cat === "all" ? "All Products" : cat}
        </button>
      ))}
    </div>
  );
}