import Link from "next/link";
import { Home, Search, Zap } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen hero-bg flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        {/* Logo */}
        <Link href="/" className="inline-flex items-center gap-2 mb-12">
          <div className="w-8 h-8 bg-navy-500 rounded-full flex items-center justify-center border border-white/20">
            <Zap className="w-4 h-4 text-brand-400" fill="currentColor" />
          </div>
          <span className="font-display font-bold text-white text-xl">
            DEAL<span className="text-brand-500">FUEL</span>
          </span>
        </Link>

        {/* 404 */}
        <div className="relative mb-8">
          <p className="font-display text-[120px] font-extrabold text-white/5 leading-none select-none">
            404
          </p>
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="font-display text-7xl font-extrabold text-white">
              404
            </p>
          </div>
        </div>

        <h1 className="font-display text-2xl font-bold text-white mb-3">
          Deal Not Found
        </h1>
        <p className="text-gray-400 text-base mb-10 leading-relaxed">
          Looks like this deal expired or doesn&apos;t exist. Don&apos;t
          worry — we have plenty of other amazing deals waiting for you!
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary justify-center">
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link href="/products" className="btn-outline justify-center">
            <Search className="w-4 h-4" />
            Browse All Deals
          </Link>
        </div>
      </div>
    </div>
  );
}