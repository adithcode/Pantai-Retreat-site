import Link from "next/link";
import { Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-thc-navy border-t border-[#142646] text-slate-400">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <h3 className="font-heading text-3xl font-semibold text-white tracking-tight">
              THC Group<span className="text-thc-gold">.</span>
            </h3>
            <p className="text-sm leading-relaxed max-w-sm font-light text-slate-300">
              Experience the perfect blend of heritage architecture and modern premium luxury in Kerala, or unlock instant liquidity by pledging your assets.
            </p>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="font-semibold text-white tracking-tight">Connect</h4>
            <div className="space-y-6 text-sm font-light">
              <a href="tel:9446576300" className="flex items-center hover:text-thc-gold transition-colors w-fit">
                <Phone size={16} className="mr-3 text-thc-gold" />
                +91 9446576300
              </a>
              
              <div className="space-y-4">
                <div className="flex items-start text-slate-300">
                  <MapPin size={16} className="mr-3 text-thc-gold mt-1 flex-shrink-0" />
                  <div className="leading-relaxed">
                    <span className="block text-white font-medium mb-0.5 text-xs uppercase tracking-widest">Stays</span>
                    Munakkal Beach, Azhikode<br/>Kerala 680666
                  </div>
                </div>

                <div className="flex items-start text-slate-300">
                  <MapPin size={16} className="mr-3 text-sky-400 mt-1 flex-shrink-0" />
                  <div className="leading-relaxed">
                    <span className="block text-white font-medium mb-0.5 text-xs uppercase tracking-widest">Finance</span>
                    Sringapuram, Kodungallur<br/>Kerala 680664
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Links Column */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="font-semibold text-white tracking-tight">Explore</h4>
            <div className="space-y-3 text-sm font-light flex flex-col text-slate-300">
              <Link href="/" className="hover:text-white transition-colors w-fit">Homestays</Link>
              <Link href="/finance" className="hover:text-white transition-colors w-fit">Asset-Backed Loans</Link>
              <Link href="https://wa.me/919446576300" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors w-fit">Contact via WhatsApp</Link>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-[#142646] flex flex-col md:flex-row justify-between items-center text-xs font-light space-y-4 md:space-y-0 text-slate-500">
          <p>&copy; {new Date().getFullYear()} THC Group. All rights reserved.</p>
          <div className="space-x-6 flex">
            <Link href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
