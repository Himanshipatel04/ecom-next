import { BadgeCheck, CalendarDays, Star } from "lucide-react";

export default function TrustSection() {
  return (
    <section className="w-full py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start text-center">
          
          {/* Feature 1: Quality */}
          <div className="flex flex-col items-center space-y-3">
            <div className="p-3 bg-yellow-50 rounded-full">
              <BadgeCheck className="w-8 h-8 text-yellow-500" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Handpicked, high-quality deals</h3>
              <p className="text-gray-500 text-sm mt-1">The newest software at insane prices</p>
            </div>
          </div>

          {/* Feature 2: Guarantee */}
          <div className="flex flex-col items-center space-y-3">
            <div className="p-3 bg-blue-50 rounded-full">
              <CalendarDays className="w-8 h-8 text-blue-900" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">30-day money back promise</h3>
              <p className="text-gray-500 text-sm mt-1">Easy refunds within 30 days of purchase</p>
            </div>
          </div>

          {/* Feature 3: Trustpilot Style Reviews */}
          <div className="flex flex-col items-center space-y-3">
            <div className="flex space-x-1 items-center bg-[#00b67a] p-1 px-2 rounded">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-white text-white" />
              ))}
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Excellent customer experience</h3>
              <p className="text-sm mt-1">
                <span className="text-red-500 font-medium">100+ Customers Rated 4.4</span>
                <Star className="inline w-3 h-3 ml-1 fill-yellow-400 text-yellow-400" />
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}