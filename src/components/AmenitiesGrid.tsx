"use client";

import React from "react";
import { Shield, MapPin, Home, Music, Mic, Layers, Flame } from "lucide-react";

interface Amenity {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}

const amenities: Amenity[] = [
  {
    icon: Home,
    title: "Fully A/C Party Hall",
    description: "A sleek indoor event space that comfortably hosts 20 to 40 guests, keeping everyone cool and comfortable."
  },
  {
    icon: Music,
    title: "DJ Setup & Disco Lights",
    description: "Premium sound facilities and immersive party lighting to turn your celebration into a private club experience."
  },
  {
    icon: Mic,
    title: "Premium Karaoke System",
    description: "A high-quality audio setup perfect for late-night singing, family jamming sessions, and sangeet nights."
  },
  {
    icon: Layers,
    title: "Panoramic Open Terrace",
    description: "An expansive rooftop space with unobstructed beach views, ideal for sunset gatherings or starlit dinners."
  },
  {
    icon: Flame,
    title: "BBQ & Free Breakfast",
    description: "Equipped barbecue setups for live grilling, plus a fresh, delicious breakfast spread for staying guests the next morning."
  },
  {
    icon: MapPin,
    title: "Direct Beach Access",
    description: "Step off the villa grounds and straight onto the sand. Perfect for beachside ceremonies and sunset photography."
  }
];

// Variants removed

export default function AmenitiesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 max-w-6xl mx-auto px-4">
      {amenities.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <div
            key={index}
            className="pt-5 border-t border-sand-300 flex flex-col gap-2"
          >
            {/* Title with inline minimal icon */}
            <div className="flex items-center gap-2.5 text-ocean-900">
              <IconComponent className="w-4.5 h-4.5 text-gold-500 shrink-0" />
              <h4 className="text-lg font-serif font-light tracking-wide">
                {item.title}
              </h4>
            </div>

            {/* Description */}
            <p className="text-sm text-ocean-600 font-light leading-relaxed pl-7">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
