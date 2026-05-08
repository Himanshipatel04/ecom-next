// components/products/ProductCard.tsx
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Zap } from 'lucide-react'

export default function ProductCard({ product }: { product: any }) {
  return (
    <div className="group relative bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col h-full">
      {/* Badge */}
      <div className="absolute top-3 left-3 z-10">
        <span className="bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider flex items-center gap-1">
          <Zap className="w-3 h-3 fill-current" /> New Deal
        </span>
      </div>

      {/* Image Container */}
      <div className="relative h-52 w-full bg-white p-6 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow border-t border-gray-50">
        <p className="text-[11px] font-bold text-blue-600 uppercase tracking-widest mb-2">
          {product.category}
        </p>
        
        <h3 className="font-bold text-gray-900 text-md leading-snug line-clamp-2 mb-3 group-hover:text-blue-600 transition-colors">
          {product.title}
        </h3>

        <div className="mt-auto">
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-2xl font-black text-gray-900">${product.price}</span>
            <span className="text-sm text-gray-400 line-through">${(product.price * 1.5).toFixed(2)}</span>
          </div>

          <Link
            href={`/products/${product.id}`}
            className="w-full bg-gray-900 hover:bg-blue-600 text-white py-2.5 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-colors group/btn"
          >
            Get This Deal
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  )
}