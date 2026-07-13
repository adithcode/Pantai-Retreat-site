"use client";

import React from "react";
import { Compass, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import PropertyGallery from "@/components/PropertyGallery";
import AmenitiesGrid from "@/components/AmenitiesGrid";
import LocationDetails from "@/components/LocationDetails";
import ContactForm from "@/components/ContactForm";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      {/* Scrollable container with horizontal overflow disabled to protect mobile layout */}
      <div className="flex-1 flex flex-col relative overflow-x-hidden">
        
        {/* Simple Navigation Header */}
        <Header />

        {/* 1. Hero / Splash Section */}
        <section className="relative w-full bg-sand-50 pt-24 pb-8 border-b border-sand-200">
          <div className="max-w-6xl mx-auto px-4 flex flex-col gap-6">
            
            {/* Clean Banner Image */}
            <div className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] rounded-2xl md:rounded-3xl overflow-hidden shadow-luxury border border-sand-200 relative">
              <img 
                src="/exterior%201.jpg" 
                alt="Villa Pantai Kerala Beach House" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Intro Text Section */}
            <div className="text-center max-w-2xl mx-auto flex flex-col gap-3.5 mt-2">
              <span className="text-xs font-semibold tracking-widest text-gold-500 uppercase">
                Private Beachfront Event Venue & Stay
              </span>
              <h1 className="text-4xl md:text-5xl font-light text-ocean-900 font-serif tracking-wide leading-tight">
                Pantai Retreat Villa
              </h1>
              <p className="text-sm sm:text-base text-ocean-600 font-light max-w-xl mx-auto leading-relaxed">
                Welcome to Pantai Retreat Villa, an exclusive private property next to Munakkal Beach in Azhikode, Thrissur, Kerala. Designed specifically for hosting event celebrations, intimate weddings, pre-wedding functions, and private parties right by the ocean.
              </p>
              
              {/* Minimalist Property Details (Editorial style) */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 py-5 border-y border-sand-300">
                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-wider text-ocean-500 font-semibold">Space</span>
                  <span className="text-sm text-ocean-900 font-serif font-light">2,000 Sq. Ft.</span>
                </div>
                <div className="flex flex-col gap-1 border-l border-sand-300 pl-2 md:pl-0">
                  <span className="text-xs uppercase tracking-wider text-ocean-500 font-semibold">Suites</span>
                  <span className="text-sm text-ocean-900 font-serif font-light">2 Premium Suites</span>
                </div>
                <div className="flex flex-col gap-1 border-t md:border-t-0 border-sand-300 pt-4 md:pt-0 md:border-l md:pl-2">
                  <span className="text-xs uppercase tracking-wider text-ocean-500 font-semibold">Bedrooms</span>
                  <span className="text-sm text-ocean-900 font-serif font-light">2 Master Rooms</span>
                </div>
                <div className="flex flex-col gap-1 border-t md:border-t-0 border-sand-300 pt-4 md:pt-0 md:border-l md:pl-2">
                  <span className="text-xs uppercase tracking-wider text-ocean-500 font-semibold">Access</span>
                  <span className="text-sm text-ocean-900 font-serif font-light">Direct Beach Steps</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-3 mt-6">
                <a
                  href="#location"
                  className="bg-white border border-sand-300 hover:bg-sand-50 text-ocean-900 text-xs font-semibold tracking-widest uppercase px-6 py-3.5 rounded-lg transition-colors shadow-sm flex items-center justify-center"
                >
                  Email Inquiry
                </a>
                <a
                  href="https://wa.me/919446576300?text=Hello%20Pantai%20Retreat%20Villa%2C%20I%20would%20like%20to%20check%20availability%20for%20a%20booking."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold tracking-widest uppercase px-6 py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 448 512">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                  </svg>
                  Book via WhatsApp
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* 2. The Estate / Photo Gallery Grid */}
        <section id="estate" className="py-16 bg-sand-50 transition-colors">
          <div className="max-w-6xl mx-auto px-4 flex flex-col gap-8">
            <div className="text-center max-w-xl mx-auto">
              <span className="text-xs font-semibold tracking-widest text-gold-500 uppercase">The House</span>
              <h2 className="text-3xl md:text-4xl font-light text-ocean-900 mt-1 font-serif">
                Our Humble Beach House
              </h2>
              <div className="w-12 h-[1px] bg-gold-400 mx-auto my-3" />
              <p className="text-sm text-ocean-600 font-light leading-relaxed">
                Take a look at our simple rooms, family spaces, and the quiet garden lawn that leads right onto Munakkal beach.
              </p>
            </div>

            {/* Unbreakable Photo Grid */}
            <PropertyGallery />
          </div>
        </section>

        {/* 3. Inclusions / Simple Features Grid */}
        <section id="amenities" className="py-16 bg-white border-y border-sand-200 transition-colors">
          <div className="max-w-6xl mx-auto px-4 flex flex-col gap-10">
            <div className="text-center max-w-xl mx-auto">
              <span className="text-xs font-semibold tracking-widest text-gold-500 uppercase">What is Included</span>
              <h2 className="text-3xl md:text-4xl font-light text-ocean-900 mt-1 font-serif">
                Simple & Peaceful Living
              </h2>
              <div className="w-12 h-[1px] bg-gold-400 mx-auto my-3" />
              <p className="text-sm text-ocean-600 font-light leading-relaxed">
                We believe in simple hospitality. Our caretakers are here to ensure your family enjoys a quiet and safe beachfront holiday.
              </p>
            </div>

            {/* Simple Amenities Cards Grid */}
            <AmenitiesGrid />
          </div>
        </section>

        {/* 3.5 Occasions Section */}
        <section id="occasions" className="py-16 bg-sand-50 border-b border-sand-200">
          <div className="max-w-6xl mx-auto px-4 flex flex-col gap-10">
            <div className="text-center max-w-xl mx-auto">
              <span className="text-xs font-semibold tracking-widest text-gold-500 uppercase">Specialized Venue</span>
              <h2 className="text-3xl md:text-4xl font-light text-ocean-900 mt-1 font-serif">
                Perfect For Every Occasion
              </h2>
              <div className="w-12 h-[1px] bg-gold-400 mx-auto my-3" />
              <p className="text-sm text-ocean-600 font-light leading-relaxed">
                Pantai Retreat Villa is designed to host, elevate, and celebrate your special milestones:
              </p>
            </div>

            <div className="max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 pt-2">
              <div className="flex gap-4 items-start border-b border-sand-300 pb-4">
                <span className="font-serif text-lg text-gold-500">01</span>
                <div>
                  <h4 className="text-base font-serif text-ocean-900 font-medium">Pre-Wedding Events</h4>
                  <p className="text-xs text-ocean-600 font-light mt-1">Host your intimate Haldi, Mehendi, or Engagement ceremonies in a beachfront setting.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start border-b border-sand-300 pb-4">
                <span className="font-serif text-lg text-gold-500">02</span>
                <div>
                  <h4 className="text-base font-serif text-ocean-900 font-medium">Professional Photoshoots</h4>
                  <p className="text-xs text-ocean-600 font-light mt-1">The perfect background for pre-wedding portrait shoots, products, or magazine editorials.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start border-b border-sand-300 pb-4">
                <span className="font-serif text-lg text-gold-500">03</span>
                <div>
                  <h4 className="text-base font-serif text-ocean-900 font-medium">Milestones & Birthdays</h4>
                  <p className="text-xs text-ocean-600 font-light mt-1">Celebrate your benchmark birthdays, anniversaries, and family achievements together.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start border-b border-sand-300 pb-4">
                <span className="font-serif text-lg text-gold-500">04</span>
                <div>
                  <h4 className="text-base font-serif text-ocean-900 font-medium">Family Gatherings & Reunions</h4>
                  <p className="text-xs text-ocean-600 font-light mt-1">Reconnect with family, cook barbecues, sing karaoke, and share beach strolls.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start border-b border-sand-300 pb-4 md:border-none md:pb-0">
                <span className="font-serif text-lg text-gold-500">05</span>
                <div>
                  <h4 className="text-base font-serif text-ocean-900 font-medium">Corporate Socials & Private Functions</h4>
                  <p className="text-xs text-ocean-600 font-light mt-1">Host high-energy team socials, networking evenings, or private celebrations.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Location & Contact Connect */}
        <section id="location" className="py-16 bg-sand-50 transition-colors">
          <div className="max-w-6xl mx-auto px-4 flex flex-col gap-16">
            
            {/* Simple Address & Travel Guide */}
            <LocationDetails />

            {/* Direct inquiry form */}
            <ContactForm />

          </div>
        </section>

        {/* Simple & Humble Footer */}
        <footer className="bg-ocean-950 text-sand-100 py-12 px-4 border-t border-white/5 transition-colors">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start text-center md:text-left">
            {/* Left brand card */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <div className="flex items-center gap-2">
                <img
                  src="/thc-logo.png"
                  alt="THC Group Logo"
                  className="h-7 w-auto object-contain brightness-125"
                />
                <span className="font-serif text-sm tracking-widest text-white border-l border-white/20 pl-2">PANTAI RETREAT VILLA</span>
              </div>
              <p className="text-xs text-sand-300/70 font-light leading-relaxed max-w-xs">
                An exclusive private beachfront property next to Munakkal Beach, Azhikode, Thrissur, Kerala. Built for hosting event celebrations, intimate weddings, and private get-togethers.
              </p>
            </div>

            {/* Middle contact details */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <h5 className="font-serif text-sm tracking-widest text-gold-400 font-semibold">GET IN TOUCH</h5>
              <div className="flex flex-col gap-2 text-xs text-sand-300/80 font-light">
                <a href="tel:+919446576300" className="flex items-center gap-1.5 hover:text-gold-400 justify-center md:justify-start transition-colors">
                  <Phone className="w-3.5 h-3.5 text-gold-500" />
                  +91 94465 76300
                </a>
                <a href="mailto:thckdr@gmail.com" className="flex items-center gap-1.5 hover:text-gold-400 justify-center md:justify-start transition-colors">
                  <Mail className="w-3.5 h-3.5 text-gold-500" />
                  thckdr@gmail.com
                </a>
                <span className="flex items-center gap-1.5 justify-center md:justify-start">
                  <MapPin className="w-3.5 h-3.5 text-gold-500" />
                  Munakkal Beach Road, Azhikode, Kerala
                </span>
              </div>
            </div>

            {/* Right stay details */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <h5 className="font-serif text-sm tracking-widest text-gold-400 font-semibold">STAY INFORMATION</h5>
              <p className="text-xs text-sand-300/70 font-light leading-relaxed max-w-xs">
                Check-in: 2:00 PM | Check-out: 11:00 AM. Inquire about local transport and travel guide arrangements when speaking to our caretaker.
              </p>
            </div>
          </div>

          <div className="max-w-6xl mx-auto border-t border-white/5 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-sand-300/40 uppercase tracking-widest font-semibold">
            <span>© {new Date().getFullYear()} Pantai Retreat Villa. Managed by <a href="https://thcgroup.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 underline transition-colors">THC Group</a>.</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-sand-100 transition-colors">Terms of Stay</a>
              <a href="#" className="hover:text-sand-100 transition-colors">Privacy</a>
            </div>
          </div>
        </footer>

        {/* 5. Circular floating WhatsApp button (Bottom Left Corner) */}
        <FloatingWhatsApp />

      </div>
    </>
  );
}
