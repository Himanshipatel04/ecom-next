"use client";

import { X, Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/hooks/useCart";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQty, totalPrice, totalItems } =
    useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm animate-fade-in"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-navy-500">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-brand-400" />
            <h2 className="font-display font-bold text-white text-lg">
              Your Cart
              {totalItems > 0 && (
                <span className="ml-2 text-sm text-brand-300 font-normal">
                  ({totalItems} item{totalItems !== 1 ? "s" : ""})
                </span>
              )}
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-navy-400 rounded-full text-gray-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-6 gap-4">
              <ShoppingBag className="w-16 h-16 text-gray-200" />
              <p className="text-gray-500 font-medium">Your cart is empty</p>
              <p className="text-gray-400 text-sm">
                Browse our deals and add some products!
              </p>
              <Link
                href="/products"
                onClick={closeCart}
                className="btn-primary mt-2"
              >
                Browse Deals
              </Link>
            </div>
          ) : (
            <ul className="px-4 space-y-4">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <div className="relative w-16 h-16 flex-shrink-0 bg-white rounded-lg overflow-hidden border border-gray-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-1"
                      sizes="64px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-800 line-clamp-2 leading-snug">
                      {item.title}
                    </p>
                    <p className="text-brand-500 font-bold text-sm mt-1">
                      {formatPrice(item.price)}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => updateQty(item.id, item.quantity - 1)}
                          className="w-6 h-6 rounded-full bg-gray-200 hover:bg-brand-100 flex items-center justify-center transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-semibold w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQty(item.id, item.quantity + 1)}
                          className="w-6 h-6 rounded-full bg-gray-200 hover:bg-brand-100 flex items-center justify-center transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-400 hover:text-red-600 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-100 px-5 py-5 space-y-4 bg-white">
            <div className="flex items-center justify-between">
              <span className="text-gray-600 font-medium">Subtotal</span>
              <span className="text-xl font-bold text-gray-900">
                {formatPrice(totalPrice)}
              </span>
            </div>
            <Link
              href="/cart"
              onClick={closeCart}
              className="btn-primary w-full justify-center text-center"
            >
              Checkout
            </Link>
            <button
              onClick={closeCart}
              className="w-full text-center text-sm text-gray-500 hover:text-brand-500 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}