"use client";

import { ShoppingCart, Check } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

import { Product } from "@/types";
import { useCart } from "@/hooks/useCart";

export default function AddToCartButton({
  product,
}: {
  product: Product;
}) {
  const { addItem } = useCart();

  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product);

    toast.success("Added to cart! 🛒");

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <button
      disabled={added}
      onClick={handleAdd}
      className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-md font-bold text-sm transition-all duration-300 ${
        added
          ? "bg-gray-400 cursor-not-allowed text-white"
          : "bg-black text-white active:scale-95 hover:bg-gray-800"
      }`}
    >
      {added ? (
        <>
          <Check className="w-4 h-4" />
          Added!
        </>
      ) : (
        <>
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </>
      )}
    </button>
  );
}