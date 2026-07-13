"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

interface ImageItem {
  src: string;
  title: string;
}

const images: ImageItem[] = [
  { src: "/exterior%201.jpg", title: "Front Garden & Villa Exterior" },
  { src: "/sea%20landscape%203.jpg", title: "Beachfront Backyard View" },
  { src: "/hall%201.jpg", title: "Spacious Living Hall" },
  { src: "/suite%20bedroom.jpg", title: "Main Bedroom Suite" },
  { src: "/dinning.jpg", title: "Dining Area & Kitchen" },
  { src: "/garden%20table.jpg", title: "Outdoor Seating Lawn" }
];

export default function PropertyGallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Simple, Unbreakable Image Grid (Editorial Portfolio style) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((img, i) => (
          <div key={i} className="flex flex-col gap-2">
            <button
              onClick={() => setSelectedImg(img.src)}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-sand-100 border border-sand-200 cursor-pointer focus:outline-none focus:ring-1 focus:ring-gold-400 group"
              title={`View ${img.title}`}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                loading="lazy"
              />
            </button>
            <span className="font-serif text-sm text-ocean-900 font-light tracking-wide pl-1">
              {img.title}
            </span>
          </div>
        ))}
      </div>

      {/* Light-themed Lightbox Modal */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-50 bg-sand-100/95 backdrop-blur-md flex flex-col items-center justify-center p-4"
          onClick={() => setSelectedImg(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImg(null)}
            className="absolute top-4 right-4 p-3 rounded-full bg-white border border-sand-200 text-ocean-900 shadow-md hover:bg-sand-50 transition active:scale-95 z-50 cursor-pointer"
            aria-label="Close image viewer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Large Image Container */}
          <div 
            className="relative max-w-5xl max-h-[80vh] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImg}
              alt="Zoomed View"
              className="rounded-2xl max-h-[80vh] max-w-full object-contain border border-sand-200 shadow-luxury-lg bg-white"
            />
          </div>
          
          <p className="mt-4 text-xs font-semibold tracking-widest text-ocean-500 uppercase">
            Click anywhere to close
          </p>
        </div>
      )}
    </div>
  );
}
