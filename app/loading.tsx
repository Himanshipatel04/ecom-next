import { Zap } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen hero-bg flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-16 h-16 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full border-4 border-white/10" />
          <div className="absolute inset-0 rounded-full border-4 border-brand-500 border-t-transparent animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Zap className="w-6 h-6 text-brand-400" fill="currentColor" />
          </div>
        </div>
        <p className="font-display font-bold text-white text-lg animate-pulse">
          Loading deals…
        </p>
      </div>
    </div>
  );
}