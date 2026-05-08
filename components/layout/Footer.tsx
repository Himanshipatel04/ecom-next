import Link from "next/link";
import { Zap, Twitter, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-navy-500 rounded-full flex items-center justify-center">
                <Zap className="w-4 h-4 text-brand-400" fill="currentColor" />
              </div>
              <span className="font-display font-bold text-xl text-white">
                DEAL<span className="text-brand-500">FUEL</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              DealFuel is a deal website for cool tech deals & amazing offers for
              web developers, designers, marketers, businesses, bloggers &
              freelancers.
            </p>
            <div className="flex items-center gap-3">
              <SocialIcon href="#" icon={<Facebook className="w-4 h-4" />} />
              <SocialIcon href="#" icon={<Twitter className="w-4 h-4" />} />
              <SocialIcon href="#" icon={<Instagram className="w-4 h-4" />} />
            </div>
            {/* Payment icons */}
            <div className="flex items-center gap-2 mt-4">
              {["AMEX", "VISA", "MC", "DISC"].map((card) => (
                <span
                  key={card}
                  className="bg-white text-gray-800 text-[9px] font-bold px-2 py-1 rounded"
                >
                  {card}
                </span>
              ))}
            </div>
          </div>

          {/* DealFuel Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              DealFuel
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "#" },
                { label: "Affiliates", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Freebies", href: "#" },
                { label: "Past Deals", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-brand-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Support
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Contact", href: "#" },
                { label: "Privacy Policy", href: "#" },
                { label: "License", href: "#" },
                { label: "Submit A Deal", href: "#" },
                { label: "Terms & Conditions", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-brand-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Follow Us
            </h4>
            <p className="text-sm text-gray-400 mb-4">
              Follow us via social media to receive our latest updates.
            </p>
            <div className="flex gap-3 mb-6">
              <SocialIcon href="#" icon={<Facebook className="w-4 h-4" />} />
              <SocialIcon href="#" icon={<Twitter className="w-4 h-4" />} />
              <SocialIcon href="#" icon={<Instagram className="w-4 h-4" />} />
            </div>
            {/* <h4 className="font-semibold text-white mb-3 text-sm">
              Newsletter
            </h4>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email..."
                className="flex-1 bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-sm text-gray-200 placeholder-gray-500 outline-none focus:border-brand-500 transition-colors"
              />
              <button className="bg-brand-500 hover:bg-brand-600 text-white px-4 py-2 rounded-md text-sm font-semibold transition-colors">
                Go
              </button>
            </div> */}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-5 text-center">
        <p className="text-sm text-gray-500">
          Copyright © {new Date().getFullYear()} DealFuel. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="w-8 h-8 rounded-md border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-all"
    >
      {icon}
    </a>
  );
}