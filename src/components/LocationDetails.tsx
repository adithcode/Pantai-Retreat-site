"use client";

import React from "react";
import { MapPin, Compass, ExternalLink, Navigation } from "lucide-react";

export default function LocationDetails() {
  const address = "Villa Pantai, Munakkal Beach Road, Azhikode, Thrissur District, Kerala, India";
  const mapsUrl = `https://maps.app.goo.gl/2aLDRARTR1vkgsfK8`;

  return (
    <div className="max-w-4xl mx-auto px-4 flex flex-col gap-6">
      <div className="text-center mb-2">
        <span className="text-xs font-semibold tracking-widest text-gold-500 uppercase">Our Location</span>
        <h3 className="text-3xl font-light text-ocean-900 mt-1 font-serif">Azhikode, Thrissur</h3>
        <p className="text-sm text-ocean-500 font-light mt-2 max-w-lg mx-auto">
          Nestled along the quiet shores of Munakkal Beach in Kerala, offering a calm and peaceful beachside escape.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* Address Card */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-sand-200 flex flex-col gap-4 justify-between">
          <div className="flex flex-col gap-3">
            <div className="text-gold-500 flex items-center mb-1">
              <MapPin className="w-5 h-5" />
            </div>
            <h4 className="text-xl font-light text-ocean-900 font-serif leading-tight">
              Villa Address
            </h4>
            <p className="text-sm text-ocean-600 font-light leading-relaxed">
              {address}
            </p>
          </div>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mt-4 bg-ocean-900 hover:bg-ocean-950 text-white font-medium py-3 px-5 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer text-xs uppercase tracking-wider font-semibold"
          >
            <Navigation className="w-3.5 h-3.5" />
            Navigate with Google Maps
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Access Directions Card */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-sand-200 flex flex-col gap-4">
          <div className="text-gold-500 flex items-center mb-1">
            <Compass className="w-5 h-5" />
          </div>
          <h4 className="text-xl font-light text-ocean-900 font-serif leading-tight">
            How to Reach Us
          </h4>
          <div className="flex flex-col gap-3.5 text-sm text-ocean-600 font-light leading-relaxed">
            <div>
              <span className="font-semibold text-ocean-900 block">By Air</span>
              <p className="text-xs">Cochin International Airport (COK) is approximately 40 km (1 hour 15 mins drive) from the villa.</p>
            </div>
            <div className="border-t border-sand-100 pt-3">
              <span className="font-semibold text-ocean-900 block">By Train</span>
              <p className="text-xs">Thrissur Railway Station is 35 km away. Irinjalakuda station is closer at about 25 km.</p>
            </div>
            <div className="border-t border-sand-100 pt-3">
              <span className="font-semibold text-ocean-900 block">Local Landmarks</span>
              <p className="text-xs">Located right next to the Munakkal Beach park entrance in Azhikode, Kodungallur region.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
