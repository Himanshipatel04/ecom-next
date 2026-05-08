"use client";

import Link from "next/link";
import { useState } from "react";
import { ShoppingCart, Search, Menu, X, Zap, ChevronDown } from "lucide-react";

import CartDrawer from "@/components/cart/CartDrawer";
import { useCart } from "@/hooks/useCart";
import Image from "next/image";

export default function Header() {
  const { totalItems, toggleCart } = useCart();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");

  const handleSearch = () => {
    if (!searchVal.trim()) return;

    window.location.href = `/products?search=${encodeURIComponent(
      searchVal.trim(),
    )}`;

    setSearchVal("");
    setSearchOpen(false);
    setMobileOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        {/* Promo Bar */}
        <div className="bg-slate-900 text-white text-center py-2 text-xs font-medium">
          Get 15–25% OFF on selected plans!
          <Link
            href="/products"
            className="underline ml-1 hover:text-orange-300"
          >
            Shop Now
          </Link>
        </div>

        {/* Main Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
          
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="DealFuel Logo"
                width={150}
                height={150}
                className="object-contain"
              />
            </Link>
            <nav>
              <Link
                href="/products"
                className="px-4 py-2 text-sm font-semibold text-orange-500 hover:text-orange-600 transition"
              >
                Hot Deals
              </Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Search */}
              <div className="hidden md:block">
                {searchOpen ? (
                  <div className="flex items-center gap-2 border border-gray-200 rounded-full px-3 py-2 bg-gray-50">
                    <Search className="w-4 h-4 text-gray-400" />

                    <input
                      autoFocus
                      type="text"
                      value={searchVal}
                      onChange={(e) => setSearchVal(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleSearch();

                        if (e.key === "Escape") {
                          setSearchOpen(false);
                        }
                      }}
                      placeholder="Search products..."
                      className="bg-transparent outline-none text-sm w-44"
                    />

                    <button
                      onClick={() => {
                        setSearchOpen(false);
                        setSearchVal("");
                      }}
                    >
                      <X className="w-3 h-3 text-gray-400" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setSearchOpen(true)}
                    className="p-2 rounded-full hover:bg-gray-100 transition"
                  >
                    <Search className="w-5 h-5 text-gray-700" />
                  </button>
                )}
              </div>

              {/* Admin */}
              <Link
                href="/admin"
                className="hidden md:block px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-500 transition"
              >
                Admin
              </Link>

              {/* Login */}
              <Link
                href="/login"
                className="hidden md:block px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-500 transition"
              >
                Login
              </Link>

              {/* Cart */}
              <button
                onClick={toggleCart}
                className="relative p-2 rounded-full hover:bg-gray-100 transition"
              >
                <ShoppingCart className="w-5 h-5 text-gray-700" />

                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center">
                    {totalItems > 99 ? "99+" : totalItems}
                  </span>
                )}
              </button>

              {/* Mobile Menu */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 rounded-full hover:bg-gray-100"
              >
                {mobileOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white px-4 py-4 space-y-2">
            <MobileNavItem
              href="/products"
              label="Tools & Software"
              onClick={() => setMobileOpen(false)}
            />

            <MobileNavItem
              href="/products?category=design"
              label="Design Resources"
              onClick={() => setMobileOpen(false)}
            />

            <MobileNavItem
              href="/products"
              label="Hot Deals"
              onClick={() => setMobileOpen(false)}
            />

            <MobileNavItem
              href="/admin"
              label="Admin Dashboard"
              onClick={() => setMobileOpen(false)}
            />

            <MobileNavItem
              href="/login"
              label="Login"
              onClick={() => setMobileOpen(false)}
            />

            {/* Mobile Search */}
            <div className="flex items-center gap-2 border-t border-gray-100 pt-3">
              <Search className="w-4 h-4 text-gray-400" />

              <input
                type="text"
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
                placeholder="Search products..."
                className="flex-1 outline-none text-sm py-1"
              />
            </div>
          </div>
        )}
      </header>

      <CartDrawer />
    </>
  );
}

function NavItem({
  href,
  label,
  hasDropdown,
}: {
  href: string;
  label: string;
  hasDropdown?: boolean;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50 rounded-md transition"
    >
      {label}

      {hasDropdown && <ChevronDown className="w-3.5 h-3.5 opacity-60" />}
    </Link>
  );
}

function MobileNavItem({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-3 py-2.5 rounded-md text-sm font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition"
    >
      {label}
    </Link>
  );
}
