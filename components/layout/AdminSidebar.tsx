"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  PlusCircle,
  ShoppingBag,
  Zap,
  Home,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/admin/products", label: "Products", icon: Package },
  { href: "/admin/add-product", label: "Add Product", icon: PlusCircle },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 pt-24 bg-gray-900 min-h-screen flex flex-col fixed left-0 top-0 z-40">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-gray-800">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-navy-500 rounded-full flex items-center justify-center">
            <Zap className="w-3.5 h-3.5 text-brand-400" fill="currentColor" />
          </div>
          <span className="font-display font-bold text-white text-sm">
            DEAL<span className="text-brand-500">FUEL</span>{" "}
            <span className="text-gray-400 font-normal">Admin</span>
          </span>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-6 space-y-1">
        {navItems.map((item) => {
          const active = item.exact
            ? pathname === item.href
            : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all",
                active
                  ? "bg-brand-500 text-white"
                  : "text-gray-400 hover:text-white hover:bg-gray-800",
              )}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-3 py-4 border-t border-gray-800 space-y-1">
        <Link
          href="/"
          className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-all"
        >
          <Home className="w-4 h-4" />
          Back to Store
        </Link>
      </div>
    </aside>
  );
}
