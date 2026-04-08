import { notFound } from "next/navigation";
import properties from "@/data/properties.json";
import { Check, MapPin, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { MotionReveal } from "@/components/MotionReveal";
import { PillButton, SoftCard } from "@/components/InteractiveElements";
import { RevealImage } from "@/components/RevealImage";

export default function VillaPage({ params }: { params: { slug: string } }) {
  const property = properties.find((p) => p.slug === params.slug);

  if (!property) {
    return <div className="text-slate-900 pt-32 text-center text-3xl font-medium">Property not found.</div>;
  }

  return (
    <main className="min-h-screen bg-white pb-24 text-slate-800 font-sans selection:bg-slate-200 selection:text-slate-900">
      
      {/* THC Navy Hero Section */}
      <section className="bg-thc-navy text-white pt-32 md:pt-48 pb-64 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-thc-gold/10 rounded-full blur-[120px] -z-10"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          <MotionReveal direction="up" delay={0.1}>
            <div className="inline-flex items-center space-x-3 mb-6">
              <span className="w-8 h-[1px] bg-thc-gold/50"></span>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-thc-gold flex items-center gap-2">
                <MapPin size={12} /> {property.location}
              </span>
              <span className="w-8 h-[1px] bg-thc-gold/50"></span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-semibold tracking-tight leading-tight mb-6">
              {property.name}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed border-l-2 border-r-2 border-thc-gold/30 px-6">
              {property.description}
            </p>
          </MotionReveal>
        </div>
      </section>

      {/* Main Content Area (Pulled up to overlap hero) */}
      <div className="max-w-7xl mx-auto px-6 -mt-40 relative z-20">

        {/* App-Like Gallery: Horizontal Carousel on Mobile, Grid on Desktop */}
        <MotionReveal delay={0.2} className="mb-12 md:mb-24 -mx-6 md:mx-0">
          <div className="flex md:grid md:grid-cols-4 md:grid-rows-2 gap-3 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory no-scrollbar h-[40vh] md:h-[60vh] px-6 md:px-0">
            {property.images && property.images.map((img, idx) => (
              <div 
                key={idx}
                className={`
                  relative group overflow-hidden rounded-3xl bg-slate-100 flex-shrink-0 snap-center
                  ${idx === 0 ? "w-[85vw] md:w-full md:col-span-2 md:row-span-2" : "w-[75vw] md:w-full"}
                `}
              >
                <RevealImage
                  src={img}
                  alt={`Villa View ${idx + 1}`}
                  aspectRatio="w-full h-full"
                  delay={idx * 0.1}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                />
                
                {/* Mobile Image Counter Overlay */}
                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md text-white text-[10px] px-3 py-1 rounded-full md:hidden">
                  {idx + 1} / {property.images.length}
                </div>
              </div>
            ))}
          </div>
        </MotionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* The Living Experience Section */}
            <MotionReveal delay={0.2} direction="up">
              <div className="space-y-4 mb-8">
                <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-thc-gold">The Living Experience</span>
                <h2 className="text-3xl md:text-5xl font-heading font-semibold text-slate-900 tracking-tight leading-tight">A Soulful Sanctuary.</h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg font-light mb-12 border-l-4 border-slate-100 pl-8 capitalize-first">
                Nestled in the serene landscapes of {property.location}, {property.name} is more than just a place to stay—it is a thoroughly restored heritage home that breathes the history of Kerala. 
                From the hand-carved wooden ceilings to the meticulously preserved architecture, every corner is designed to bring you to a state of profound calm while enjoying high-end modern comforts.
              </p>
              
              <div className="bg-slate-50/50 rounded-3xl p-8 md:p-10 border border-slate-100">
                <h3 className="text-xl font-semibold text-slate-900 mb-8 border-b border-slate-200 pb-4 flex items-center gap-3">
                  <Sparkles size={20} className="text-thc-gold" /> Premium Amenities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                  {property.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center text-slate-700 group">
                      <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center mr-4 group-hover:border-thc-gold transition-colors">
                        <Check size={14} className="text-thc-gold" />
                      </div>
                      <span className="font-medium text-sm tracking-wide">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </MotionReveal>

            {/* Rules Section (if present) */}
            {property.rules && property.rules.length > 0 && (
              <SoftCard className="p-8 md:p-10 border-none bg-slate-100 shadow-inner">
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Policies & Guidelines</h3>
                <p className="text-slate-500 font-light mb-8">To ensure a peaceful and enjoyable stay for all our guests, we politely request adherence to the following guidelines:</p>
                <ul className="space-y-4">
                  {property.rules.map((rule: string, idx: number) => (
                    <li key={idx} className="flex items-start text-slate-600 font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 mr-4 shrink-0"></span>
                      <span className="leading-relaxed">{rule}</span>
                    </li>
                  ))}
                </ul>
              </SoftCard>
            )}

            {/* Map Section */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Location</h3>
              <div className="w-full h-64 md:h-80 bg-slate-200 rounded-[2rem] overflow-hidden relative shadow-inner group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-4.0.3')] bg-cover bg-center opacity-80 mix-blend-multiply group-hover:mix-blend-normal transition-all duration-700"></div>
                <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] group-hover:bg-white/0 transition-colors duration-700 rounded-[2rem]"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <MapPin size={24} className="text-slate-900" />
                  </div>
                  <h4 className="text-slate-900 font-semibold mb-1 text-lg bg-white/80 px-4 py-1 rounded-full backdrop-blur-md">{property.name}</h4>
                  <Link 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(property.name + ' ' + property.location)}`}
                    target="_blank" 
                    className="mt-4 px-6 py-2.5 bg-slate-900 text-white rounded-full text-xs font-semibold hover:scale-105 transition-transform"
                  >
                    Open in Google Maps
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Clean Reservation Card Sidebar */}
          <div className="lg:col-span-4">
            <SoftCard className="p-8 md:p-10 sticky top-32 flex flex-col items-center text-center shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-200">
              <h1 className="text-2xl font-semibold text-slate-900 mb-3">Reserve your stay</h1>
              <p className="text-slate-500 mb-8 text-sm font-light leading-relaxed">Select a trusted booking partner to secure your preferred dates or contact us directly.</p>
              
              <div className="w-full flex flex-col space-y-3">
                <a href={property.links.airbnb} target="_blank" rel="noreferrer" className="flex items-center justify-between w-full py-3.5 px-6 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-2xl font-semibold text-sm transition-colors group">
                  <span>Airbnb</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                
                <Link 
                  href="https://wa.me/919446576300?text=Hi%20Pantai%20Retreat,%20I'd%20like%20to%20check%20availability%20for..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full py-3.5 px-6 bg-emerald-50 hover:bg-emerald-100 text-emerald-600 rounded-2xl font-semibold text-sm transition-colors group"
                >
                  <span>WhatsApp</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <a href={property.links.booking} target="_blank" rel="noreferrer" className="flex items-center justify-between w-full py-3.5 px-6 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-2xl font-semibold text-sm transition-colors group">
                  <span>Booking.com</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a href={property.links.agoda} target="_blank" rel="noreferrer" className="flex items-center justify-between w-full py-3.5 px-6 bg-sky-50 hover:bg-sky-100 text-sky-600 rounded-2xl font-semibold text-sm transition-colors group">
                  <span>Agoda</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 w-full">
                <p className="text-xs text-slate-400 font-light leading-relaxed flex items-center justify-center">
                  <Check size={12} className="mr-1" /> Best price guarantee
                </p>
              </div>
            </SoftCard>
          </div>

        </div>
      </div>

      {/* Fixed Mobile Action Bar */}
      <div className="fixed bottom-[65px] left-0 w-full bg-white/90 backdrop-blur-xl border-t border-slate-100 p-4 z-[4000] lg:hidden animate-in slide-in-from-bottom-5 shadow-[0_-10px_40px_rgba(0,0,0,0.03)] flex gap-3">
        <div className="flex-1">
          <p className="text-xs text-slate-500 font-medium">Book your stay</p>
          <p className="text-sm font-bold text-slate-900">Check Availability</p>
        </div>
        <PillButton href="https://wa.me/919446576300" className="flex-1 bg-slate-900 text-white shadow-lg text-sm flex items-center justify-center py-2.5">
          WhatsApp
        </PillButton>
      </div>

    </main>
  );
}
