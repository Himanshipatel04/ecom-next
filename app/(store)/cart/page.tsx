"use client";

import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import toast from "react-hot-toast";
import { useCart } from "@/hooks/useCart";

export default function CartPage() {
  const { items, removeItem, updateQty, totalPrice, totalItems, clearCart } =
    useCart();

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <Link
            href="/products"
            className="text-gray-500 hover:text-brand-500 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="font-display text-2xl font-bold text-gray-900">
            Shopping Cart
            {totalItems > 0 && (
              <span className="ml-2 text-base font-normal text-gray-500">
                ({totalItems} item{totalItems !== 1 ? "s" : ""})
              </span>
            )}
          </h1>
        </div>

        {items.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 py-20 text-center">
            <ShoppingBag className="w-20 h-20 text-gray-200 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-400 mb-6">
              Browse our deals and find something amazing!
            </p>
            <Link href="/products" className="btn-primary mx-auto">
              Browse Deals
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl border border-gray-100 p-4 flex gap-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative w-20 h-20 flex-shrink-0 bg-gray-50 rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-2"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/products/${item.id}`}
                      className="text-sm font-semibold text-gray-800 hover:text-brand-500 transition-colors line-clamp-2"
                    >
                      {item.title}
                    </Link>
                    <p className="text-xs text-gray-400 capitalize mt-0.5">
                      {item.category}
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQty(item.id, item.quantity - 1)}
                          className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:border-brand-400 hover:text-brand-500 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-sm font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQty(item.id, item.quantity + 1)}
                          className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:border-brand-400 hover:text-brand-500 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-bold text-gray-900">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                        <button
                          onClick={() => {
                            removeItem(item.id);
                            toast.error("Item removed from cart");
                          }}
                          className="text-red-400 hover:text-red-600 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <button
                onClick={() => {
                  clearCart();
                  toast.error("Cart cleared");
                }}
                className="text-sm text-red-400 hover:text-red-600 transition-colors flex items-center gap-1"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Clear cart
              </button>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm sticky top-24">
                <h3 className="font-display font-bold text-lg text-gray-900 mb-5">
                  Order Summary
                </h3>
                <div className="space-y-3 mb-5">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Subtotal ({totalItems} items)</span>
                    <span>{formatPrice(totalPrice)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Discount</span>
                    <span className="text-emerald-500">-{formatPrice(0)}</span>
                  </div>
                  <div className="border-t border-gray-100 pt-3 flex justify-between font-bold text-gray-900">
                    <span>Total</span>
                    <span className="text-xl">{formatPrice(totalPrice)}</span>
                  </div>
                </div>
                <button
                  onClick={() => toast.success("Checkout coming soon! 🚀")}
                  className="btn-primary w-full justify-center"
                >
                  Proceed to Checkout
                </button>
                <Link
                  href="/products"
                  className="block text-center text-sm text-gray-400 hover:text-brand-500 mt-3 transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}