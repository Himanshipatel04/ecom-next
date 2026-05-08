import { Award, Calendar, Star } from "lucide-react";

export default function TrustBadges() {
  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TrustItem
            icon={<Award className="w-8 h-8 text-amber-500" />}
            title="Handpicked, high-quality deals"
            desc="The newest software at insane prices"
          />
          <TrustItem
            icon={<Calendar className="w-8 h-8 text-navy-500" />}
            title="30-day money back promise"
            desc="Easy refunds within 30 days of purchase"
          />
          <TrustItem
            icon={
              <div className="flex text-emerald-500">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Star key={i} className="w-7 h-7 fill-emerald-500" />
                ))}
                <Star className="w-7 h-7 fill-emerald-200 text-emerald-200" />
              </div>
            }
            title="Excellent customer experience"
            desc={
              <span className="text-amber-500 font-semibold">
                100+ Customers Rated 4.4 ⭐
              </span>
            }
          />
        </div>
      </div>
    </section>
  );
}

function TrustItem({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center text-center gap-3">
      <div className="w-14 h-14 flex items-center justify-center">{icon}</div>
      <div>
        <p className="font-display font-bold text-gray-900 text-base">{title}</p>
        <p className="text-gray-500 text-sm mt-1">{desc}</p>
      </div>
    </div>
  );
}