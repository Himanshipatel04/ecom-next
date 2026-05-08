import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Mohamed Karam",
    role: "Verified Customer",
    rating: 5,
    title: "Crazy Offers With Best Price",
    content:
      "I see that site have crazy offers with really best price 😊 I like all products and services. With VIP membership I get the best deals and quality.",
  },
  {
    id: 2,
    name: "Poppy Gardens",
    role: "Solopreneur",
    rating: 5,
    title: "Infinite choice of resources",
    content:
      "Getting the best software at affordable prices is every creator’s dream. DealFuel gives access to amazing resources and tools for developers and designers.",
  },
  {
    id: 3,
    name: "Enrique",
    role: "Customer",
    rating: 5,
    title: "Great Service and Deals",
    content:
      "Amazing support and fantastic deals. I had an issue with my order and the support team fixed it quickly without any hassle.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-orange-500/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-violet-500/10 blur-[120px]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-2xl text-orange-800 backdrop-blur-md">
            Trusted by Thousands
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-black text-black">
            What Our Customers Say
          </h2>

          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Real experiences from creators, developers, and
            entrepreneurs using DealFuel every day.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="group relative bg-neutral-900 rounded-3xl border border-white/10 p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:bg-white/[0.08]"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-10 h-10 text-white/10" />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-orange-400 text-orange-400"
                  />
                ))}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4 leading-snug">
                {t.title}
              </h3>

              {/* Content */}
              <p className="text-gray-300 leading-relaxed text-sm">
                {t.content}
              </p>

              {/* Footer */}
              <div className="mt-8 flex items-center gap-4">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-sm">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>

                <div>
                  <p className="font-semibold text-white">
                    {t.name}
                  </p>

                  <p className="text-sm text-gray-400">
                    {t.role}
                  </p>
                </div>
              </div>

              {/* Hover Border Glow */}
              <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-orange-500/30 transition-all pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}