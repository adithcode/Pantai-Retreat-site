import Link from "next/link";
import { ArrowRight, MapPin, Sparkles, ShieldCheck, Clock, Map } from "lucide-react";
import properties from "../data/properties.json";
import { MotionReveal } from "../components/MotionReveal";
import { SoftCard, PillButton } from "../components/InteractiveElements";
import { RevealImage } from "../components/RevealImage";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-100 selection:text-slate-900">
      
      {/* Hero Section: Grand Editorial Layout */}
      <section className="relative px-6 md:px-12 pt-32 md:pt-40 pb-24 md:pb-32 overflow-hidden flex flex-col justify-center min-h-[90vh] bg-thc-navy text-white">
        
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-l from-[#0f2444] to-transparent opacity-50 -z-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-thc-gold/10 rounded-full blur-[120px] -z-10"></div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center z-10">
          
          {/* Left Column: Typography */}
          <MotionReveal delay={0.1} duration={1} className="space-y-8 flex flex-col justify-center">
            <div className="inline-flex items-center space-x-3">
              <span className="w-12 h-[1px] bg-thc-gold/50"></span>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-thc-gold">THC Group</span>
            </div>
            
            <h1 className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] tracking-tight leading-[1.05]">
              Exceptional <em className="italic font-light text-thc-gold">Stays</em> <br className="hidden md:block"/>
              & Asset-Backed <em className="italic font-light text-sky-400">Liquidity.</em>
            </h1>
            
            <p className="text-lg text-slate-300 font-light max-w-lg leading-relaxed border-l border-thc-gold/30 pl-6">
              Experience curated heritage properties in Kerala or unlock instant cash by pledging your vehicle assets securely.
            </p>
            
            <div className="pt-8 flex flex-col sm:flex-row items-center gap-6">
              <PillButton href="/stays/pantai-retreat-villa" className="w-full sm:w-auto bg-thc-gold text-thc-navy hover:bg-[#E5C158] font-bold shadow-[0_10px_30px_rgba(212,175,55,0.3)]">
                Explore Our Villa
              </PillButton>
              <Link href="/finance" className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3 rounded-full text-white border border-white/20 hover:bg-white/10 transition-colors font-medium">
                <span>Asset-Backed Loans</span> <ArrowRight size={16} />
              </Link>
            </div>
          </MotionReveal>

          {/* Right Column: Editorial Imagery Structure */}
          <MotionReveal delay={0.3} direction="left" className="relative h-[500px] w-full hidden lg:block">
            {/* Front Image */}
            <div className="absolute bottom-0 left-0 w-3/4 h-[350px] bg-slate-800 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 border border-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/sitout.jpg" alt="Villa Sitout" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] tracking-widest font-semibold px-4 py-1.5 rounded-full uppercase">
                Azhikode, Kerala
              </div>
            </div>
            {/* Back Image Offset */}
            <div className="absolute top-0 right-0 w-2/3 h-[400px] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl z-10 border border-white/5 opacity-80">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/balconyphoto.jpg" alt="Villa Balcony" className="w-full h-full object-cover scale-105" />
            </div>
          </MotionReveal>
          
        </div>
      </section>

      {/* Highlights Section - Rhythmic Dark Theme */}
      <section className="py-32 px-6 md:px-12 bg-thc-navy relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-thc-gold/5 rounded-full blur-[100px] -z-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 space-y-4">
            <div className="inline-flex items-center space-x-3 mb-4">
              <span className="w-8 h-[1px] bg-thc-gold/30"></span>
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-thc-gold">Our Philosophy</span>
              <span className="w-8 h-[1px] bg-thc-gold/30"></span>
            </div>
            <h2 className="font-heading text-4xl md:text-6xl text-white tracking-tight leading-tight">The Standard of <em className="italic font-light text-thc-gold">Excellence.</em></h2>
            <p className="text-slate-400 max-w-xl mx-auto font-light leading-relaxed">Operating with absolute transparency and refined, human-made aesthetics across all our ventures.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MotionReveal delay={0.1} direction="up" className="h-full">
              <div className="p-10 h-full flex flex-col items-start bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2.5rem] group hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-thc-gold/5">
                <div className="text-xs font-bold tracking-[0.3em] uppercase text-thc-gold/60 mb-8 group-hover:text-thc-gold transition-colors">01 / Heritage</div>
                <h3 className="text-2xl font-semibold text-white mb-4">Timeless Architecture</h3>
                <p className="text-slate-400 leading-relaxed font-light text-sm">Experience the soul of Kerala in thoroughly restored villas, offering premium modern amenities within authentic heritage structures.</p>
              </div>
            </MotionReveal>
            
            <MotionReveal delay={0.2} direction="up" className="h-full">
              <div className="p-10 h-full flex flex-col items-start bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2.5rem] group hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-sky-400/5">
                <div className="text-xs font-bold tracking-[0.3em] uppercase text-sky-400/60 mb-8 group-hover:text-sky-400 transition-colors">02 / Liquidity</div>
                <h3 className="text-2xl font-semibold text-white mb-4">Instant Pledge Loans</h3>
                <p className="text-slate-400 leading-relaxed font-light text-sm">Unlock immediate liquidity by pledging your vehicle assets. Fast, private, and secure cash deployments with transparent collateral terms.</p>
              </div>
            </MotionReveal>
            
            <MotionReveal delay={0.3} direction="up" className="h-full">
              <div className="p-10 h-full flex flex-col items-start bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2.5rem] group hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-400/5">
                <div className="text-xs font-bold tracking-[0.3em] uppercase text-emerald-400/60 mb-8 group-hover:text-emerald-400 transition-colors">03 / Service</div>
                <h3 className="text-2xl font-semibold text-white mb-4">Dedicated Support</h3>
                <p className="text-slate-400 leading-relaxed font-light text-sm">Whether it is 24/7 concierge service for your beach stay or instant loan deployment, your time is our most strictly valued asset.</p>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* Destinations Section - Apple-like Clean Gallery */}
      <section id="destinations" className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <MotionReveal delay={0.1} direction="left" className="max-w-2xl">
              <h2 className="font-heading text-4xl md:text-6xl text-slate-900 tracking-tight leading-[1.1] mb-6">
                Premium Discoveries.
              </h2>
              <p className="text-slate-500 text-lg font-light leading-relaxed">
                Curated collections of heritage properties that redefine the standard of luxury living.
              </p>
            </MotionReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {properties.map((property) => (
              <SoftCard key={property.slug} className="group flex flex-col bg-white shadow-md border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                <Link href={`/stays/${property.slug}`} className="block flex-1">
                  <div className="aspect-[4/3] relative overflow-hidden bg-slate-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={property.images && property.images.length > 0 ? property.images[0] : "/villa.png"}
                      alt={property.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                      {property.name}
                    </h3>
                    <div className="flex items-center text-slate-500 mb-4">
                      <Map size={14} className="mr-2" />
                      <span className="text-sm font-medium">{property.location}</span>
                    </div>
                    <p className="text-slate-500 font-light leading-relaxed mb-6 line-clamp-3">
                      {property.description}
                    </p>
                    
                    <div className="inline-flex items-center text-sm font-semibold text-sky-600 group-hover:text-sky-700 transition-colors">
                      Discover Property <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </SoftCard>
            ))}
          </div>

        </div>
      </section>

      {/* The Ultimate Workation Section */}
      <section className="py-32 px-6 md:px-12 bg-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            <MotionReveal direction="right" className="flex-1 space-y-10 order-2 lg:order-1">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-2 block">Focused Productivity</span>
                <h2 className="font-heading text-4xl md:text-6xl text-slate-900 tracking-tight leading-[1.1]">
                  The Ultimate Workation.
                </h2>
              </div>
              
              <p className="text-lg text-slate-500 font-light leading-relaxed">
                Where high-speed digital productivity meets the soul of the Arabian Sea. Designed specifically for the modern nomad who demands both precision and peace.
              </p>
              
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <div className="w-10 h-1 bg-slate-200 rounded-full mb-4"></div>
                  <h4 className="font-semibold text-slate-900">100Mbps Fiber</h4>
                  <p className="text-sm text-slate-500 font-light leading-relaxed">Blazing fast internet for seamless global communication.</p>
                </div>
 
                <div className="space-y-2">
                  <div className="w-10 h-1 bg-slate-200 rounded-full mb-4"></div>
                  <h4 className="font-semibold text-slate-900">Power Backup</h4>
                  <p className="text-sm text-slate-500 font-light leading-relaxed">Uninterrupted deep work powered by our 24/7 UPS architecture.</p>
                </div>
              </div>
            </MotionReveal>

            <MotionReveal direction="left" className="flex-1 w-full relative order-1 lg:order-2">
              <SoftCard className="p-2 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] border-0">
                <RevealImage
                  src="/sitout.jpg"
                  alt="Workation Sitout"
                  aspectRatio="aspect-[4/5] object-cover rounded-[1.5rem]"
                  className="rounded-[1.5rem] overflow-hidden"
                />
              </SoftCard>
            </MotionReveal>
            
        </div>
      </section>

    </main>
  );
}
