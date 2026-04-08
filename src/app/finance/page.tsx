import Link from "next/link";
import { ArrowRight, ShieldCheck, Banknote, Clock, MapPin, HardHat } from "lucide-react";
import { MotionReveal } from "@/components/MotionReveal";
import { PillButton, SoftCard } from "@/components/InteractiveElements";

export default function FinanceHub() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-slate-200 selection:text-slate-900">
      
      {/* THC Navy Hero Section */}
      <section className="bg-thc-navy text-white pt-32 md:pt-48 pb-24 md:pb-40 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-sky-500/10 rounded-full blur-[120px] -z-10"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-24 relative z-10">
          <MotionReveal direction="right" className="flex-1 space-y-8">
            <div className="inline-flex items-center space-x-3">
              <span className="w-12 h-[1px] bg-sky-400/50"></span>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-sky-400">THC Asset Liquidity</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-semibold tracking-tight leading-[1.05]">
              Instant Liquidity. <br className="hidden lg:block"/> Pledge Your <em className="italic font-light text-sky-400">Asset.</em>
            </h1>
            <p className="text-xl text-slate-300 font-light max-w-xl leading-relaxed border-l border-sky-400/30 pl-6">
              Unlock the value of your vehicle with immediate cash deployments. We provide secure, private liquidity based on your asset's worth—no middleman, no delay.
            </p>
          </MotionReveal>

          <MotionReveal direction="left" delay={0.2} className="w-full max-w-md">
            <SoftCard className="p-8 md:p-10 bg-white border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
              <h2 className="text-2xl font-semibold mb-2">Loan Request</h2>
              <p className="text-sm text-slate-500 mb-8">Asset-backed cash deployment form.</p>
              
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Legal Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="whatsapp" className="text-sm font-medium text-slate-700">WhatsApp Contact</label>
                  <div className="flex bg-slate-50 border border-slate-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-sky-500 transition-all">
                    <span className="flex items-center px-4 bg-slate-100 border-r border-slate-200 text-slate-500 font-medium">+91</span>
                    <input 
                      type="tel" 
                      id="whatsapp" 
                      className="w-full bg-transparent px-4 py-3 focus:outline-none"
                      placeholder="Number"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="assetDetails" className="text-sm font-medium text-slate-700">Vehicle Model & Year</label>
                  <input 
                    type="text" 
                    id="assetDetails" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                    placeholder="e.g. 2022 Toyota Innova"
                  />
                </div>

                <div className="space-y-3 pt-2">
                  <label className="text-sm font-medium text-slate-700">Vehicle Type</label>
                  <div className="flex gap-4">
                    <label className="flex-1 cursor-pointer group">
                      <input type="radio" name="loanType" className="peer sr-only" value="2-wheeler" />
                      <div className="py-3 border border-slate-200 rounded-xl text-center text-slate-600 font-medium peer-checked:bg-sky-50 peer-checked:border-sky-500 peer-checked:text-sky-700 transition-all hover:bg-slate-50">
                        2-Wheeler
                      </div>
                    </label>
                    <label className="flex-1 cursor-pointer group">
                      <input type="radio" name="loanType" className="peer sr-only" value="4-wheeler" defaultChecked />
                      <div className="py-3 border border-slate-200 rounded-xl text-center text-slate-600 font-medium peer-checked:bg-sky-50 peer-checked:border-sky-500 peer-checked:text-sky-700 transition-all hover:bg-slate-50">
                        4-Wheeler
                      </div>
                    </label>
                  </div>
                </div>
  
                <div className="pt-4">
                  <button 
                    type="button" 
                    className="w-full bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white font-semibold py-4 rounded-xl transition-all shadow-[0_10px_20px_rgba(2,132,199,0.15)] flex justify-center items-center group"
                  >
                    Request Instant Cash <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-center text-xs text-slate-400 mt-4 font-medium flex items-center justify-center">
                    <ShieldCheck size={14} className="mr-1" /> Encrypted & Private
                  </p>
                </div>
              </form>
            </SoftCard>
          </MotionReveal>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-24 px-6 md:px-12 bg-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-semibold text-slate-900 mb-4">The Advantage of Liquidity</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Our streamlined operations are designed for direct access and fast cash deployments without middleman friction.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MotionReveal delay={0.1} direction="up">
              <SoftCard className="p-8 h-full bg-white flex flex-col items-start border border-slate-200 hover:shadow-xl transition-shadow group">
                <div className="text-sm font-semibold tracking-[0.2em] uppercase text-slate-400 mb-6 group-hover:text-sky-600 transition-colors">01 / Speed</div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">Instant Cash Deployment</h3>
                <p className="text-slate-500 font-light leading-relaxed">Internal operations specifically optimized for unmatched regional speed, ensuring you get liquidity precisely when you need it.</p>
              </SoftCard>
            </MotionReveal>
            
            <MotionReveal delay={0.2} direction="up">
              <SoftCard className="p-8 h-full bg-white flex flex-col items-start border border-slate-200 hover:shadow-xl transition-shadow group">
                <div className="text-sm font-semibold tracking-[0.2em] uppercase text-slate-400 mb-6 group-hover:text-emerald-600 transition-colors">02 / Terms</div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">Transparent Pledging</h3>
                <p className="text-slate-500 font-light leading-relaxed">Zero middleman fees. Enjoy direct access to Kerala's most competitive and transparent collateral-based lending structures.</p>
              </SoftCard>
            </MotionReveal>

            <MotionReveal delay={0.3} direction="up">
              <SoftCard className="p-8 h-full bg-white flex flex-col items-start border border-slate-200 hover:shadow-xl transition-shadow group">
                <div className="text-sm font-semibold tracking-[0.2em] uppercase text-slate-400 mb-6 group-hover:text-amber-600 transition-colors">03 / Trust</div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">Safe Asset Custody</h3>
                <p className="text-slate-500 font-light leading-relaxed">Based in Sringapuram & Kodungallur, we provide a secure, trusted environment for your pledged assets with full local accountability.</p>
              </SoftCard>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 bg-white border-t border-slate-100">
        <MotionReveal direction="up" className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-heading font-semibold mb-6">Need immediate liquidity?</h2>
          <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto font-light">Get your cash deployment today with our seamless digital request form. Secure, private, and fast.</p>
          <PillButton href="#" className="bg-sky-600 text-white hover:bg-sky-700 shadow-[0_10px_20px_rgba(2,132,199,0.2)]">
            Request Instant Cash Now
          </PillButton>
        </MotionReveal>
      </section>
      
      {/* Fixed Mobile Action Bar */}
      <div className="fixed bottom-[65px] left-0 w-full bg-white/90 backdrop-blur-xl border-t border-slate-100 p-4 z-[4000] lg:hidden animate-in slide-in-from-bottom-5">
        <PillButton href="#" className="w-full bg-sky-600 text-white shadow-lg text-sm flex items-center justify-center py-4">
          Request Instant Cash
        </PillButton>
      </div>

    </main>
  );
}
