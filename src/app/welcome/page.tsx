import { Wifi, Phone, Clock, Utensils, MapPin, Tv, Car, HeartPulse, Sparkles, MessageCircle, Check } from "lucide-react";

export default function WelcomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-16">
      
      {/* THC Navy Hero */}
      <header className="relative bg-thc-navy text-white pt-24 pb-32 px-6 overflow-hidden rounded-b-[2.5rem] shadow-xl">
        <div className="absolute top-0 right-0 w-1/2 h-[500px] bg-thc-gold/10 rounded-full blur-[100px] -z-10"></div>
        <div className="max-w-2xl mx-auto text-center relative z-10 space-y-4">
          <div className="inline-flex items-center space-x-3 mb-2">
            <span className="w-8 h-[1px] bg-thc-gold/50"></span>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-thc-gold flex items-center gap-2">
              Digital Concierge
            </span>
            <span className="w-8 h-[1px] bg-thc-gold/50"></span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-medium tracking-tight">
            Welcome to Pantai Retreat.
          </h1>
          <p className="text-slate-300 font-light text-sm md:text-base">Your digital guide to a seamless, premium stay.</p>
        </div>
      </header>

      {/* Main App Content - Pulled up to overlap hero */}
      <div className="px-5 -mt-16 space-y-6 max-w-lg mx-auto relative z-20">
        
        {/* Concierge Request Action Card */}
        <div className="bg-white rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-thc-gold/10 rounded-full flex items-center justify-center text-thc-gold mb-4">
            <Sparkles size={20} />
          </div>
          <h2 className="font-heading text-xl font-medium text-slate-900 mb-2">At Your Service</h2>
          <p className="text-sm text-slate-500 font-light mb-6">Need fresh towels, room cleaning, or a late check-out? Our concierge is available 24/7 on WhatsApp.</p>
          <a href="https://wa.me/919446576300" target="_blank" rel="noreferrer" className="w-full bg-slate-900 text-white font-medium py-3 rounded-xl flex items-center justify-center hover:bg-slate-800 transition shadow-lg">
            <MessageCircle size={18} className="mr-2" /> Message Concierge
          </a>
        </div>

        {/* Essential Info */}
        <section className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
          <h2 className="font-heading text-lg text-slate-900 mb-5 font-medium border-b border-slate-100 pb-3">Essential Information</h2>
          
          <div className="space-y-5">
            {/* Wi-Fi */}
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-slate-50 rounded-full text-thc-gold shadow-sm">
                <Wifi size={20} />
              </div>
              <div className="flex-1">
                <h3 className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">Wi-Fi Network</h3>
                <p className="text-slate-900 font-semibold">Pantai_Guest_5G</p>
                <div className="mt-1 bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg text-sm font-mono inline-block">
                  retreat2024
                </div>
              </div>
            </div>

            {/* Check-Out */}
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-slate-50 rounded-full text-thc-gold shadow-sm">
                <Clock size={20} />
              </div>
              <div className="flex-1">
                <h3 className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">Check-out</h3>
                <p className="text-slate-900 font-semibold">11:00 AM</p>
                <p className="text-xs text-slate-500 mt-1">Please leave keys safely and turn off AC units before departure.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Home Tech Guide */}
        <section className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
          <h2 className="font-heading text-lg text-slate-900 mb-5 font-medium border-b border-slate-100 pb-3">Home Tech Guide</h2>
          
          <div className="space-y-5">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-slate-50 rounded-full text-blue-500 shadow-sm border border-slate-100">
                <Tv size={20} />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-slate-900 mb-1">Entertainment System</h3>
                <p className="text-xs text-slate-500 leading-relaxed">Turn on the TV using the black remote. Netflix and Amazon Prime are pre-logged in for guest use. Switch input to HDMI 1 for the soundbar sync.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-slate-50 rounded-full text-sky-500 shadow-sm border border-slate-100">
                <Sparkles size={20} />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-slate-900 mb-1">Air Conditioning</h3>
                <p className="text-xs text-slate-500 leading-relaxed">Optimal cooling is achieved at 22°C (72°F) on auto fan. Please keep doors closed while running to maintain temperature.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Transportation & Medical */}
        <section className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
          <h2 className="font-heading text-lg text-slate-900 mb-5 font-medium border-b border-slate-100 pb-3">Local Contacts</h2>
          
          <div className="space-y-4">
            <a href="tel:04802802222" className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-slate-100 transition-colors">
              <div className="flex items-center space-x-3">
                <Car size={18} className="text-slate-700" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">Azhikode Auto Stand</p>
                  <p className="text-xs text-slate-500">Quick local transport</p>
                </div>
              </div>
              <Phone size={16} className="text-thc-gold" />
            </a>

            <a href="tel:04802802333" className="flex items-center justify-between p-4 bg-red-50 rounded-2xl border border-red-100 hover:bg-red-100 transition-colors">
              <div className="flex items-center space-x-3">
                <HeartPulse size={18} className="text-red-500" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">Kodungallur Taluk Hospital</p>
                  <p className="text-xs text-slate-500">24/7 Nearest Hospital</p>
                </div>
              </div>
              <Phone size={16} className="text-red-500" />
            </a>
          </div>
        </section>

        {/* Local Flavor & Dining */}
        <section className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
          <h2 className="font-heading text-lg text-slate-900 mb-5 font-medium border-b border-slate-100 pb-3">Local Flavor</h2>
          <p className="text-xs text-slate-500 mb-6 font-light">Don't leave Azhikode without trying these regional specialties:</p>
          
          <div className="space-y-4">
            <div className="flex gap-4 p-3 rounded-2xl bg-orange-50/30 border border-orange-100/50">
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-slate-900 mb-1">Karimeen Pollichathu</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">Pearl Spot fish marinated in spices and grilled in a banana leaf. A local backwater delicacy.</p>
              </div>
            </div>
            <div className="flex gap-4 p-3 rounded-2xl bg-amber-50/30 border border-amber-100/50">
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-slate-900 mb-1">Appam with Stew</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">Fermented rice pancakes served with a mild, coconut-milk based vegetable or chicken stew.</p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-50">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Delivery</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-3">Both Swiggy and Zomato operate here. Use "Pantai Retreat, Munakkal" as your pin.</p>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
              <p className="text-sm font-medium text-slate-800">Seaside Kitchen Delivery</p>
              <p className="text-xs text-slate-500 flex justify-between items-center mt-1">
                Direct order: <a href="tel:9446576301" className="text-thc-gold font-medium border-b border-thc-gold">+91 9446576301</a>
              </p>
            </div>
          </div>
        </section>

        {/* Beach & Safety Tips */}
        <section className="bg-slate-900 text-white rounded-3xl p-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl"></div>
          <h2 className="font-heading text-lg text-white mb-5 font-medium border-b border-white/10 pb-3">Beach & Safety</h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-thc-gold mt-1.5 shrink-0"></div>
              <p className="text-xs text-slate-300 leading-relaxed"><strong className="text-white">Sunset timings:</strong> Roughly 6:15 PM - 6:45 PM. The sky at Munakkal is legendary.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-thc-gold mt-1.5 shrink-0"></div>
              <p className="text-xs text-slate-300 leading-relaxed"><strong className="text-white">Swimming:</strong> Please avoid swimming alone after dark. The currents can be strong near the harbor mouth.</p>
            </div>
          </div>
        </section>

        {/* Respect the Home (House Rules) */}
        <section className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 mb-20">
          <h2 className="font-heading text-lg text-slate-900 mb-5 font-medium border-b border-slate-100 pb-3">Respect the Home</h2>
          <ul className="space-y-4">
            <li className="flex items-start text-xs text-slate-600">
              <Check size={14} className="text-thc-gold mr-3 shrink-0" />
              <span>Please keep noise levels low after 10:00 PM for the neighborhood.</span>
            </li>
            <li className="flex items-start text-xs text-slate-600">
              <Check size={14} className="text-thc-gold mr-3 shrink-0" />
              <span>Smoking is strictly limited to designated outdoor garden areas.</span>
            </li>
            <li className="flex items-start text-xs text-slate-600">
              <Check size={14} className="text-thc-gold mr-3 shrink-0" />
              <span>Help us save energy by turning off AC units when leaving the rooms.</span>
            </li>
          </ul>
        </section>

      </div>
    </main>
  );
}
