import FeaturedDeals from "@/components/home/FeaturedDeals";
import HeroBanner from "@/components/home/HeroBanner";
import Testimonials from "@/components/home/Testimonials";
import TrustSection from "@/components/home/TrustSection";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroBanner />
      <TrustSection />
      <Testimonials />
      <FeaturedDeals />
    </main>
  );
}
