"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    type: "product",
    bg: "from-[#1a1008] via-[#2c1a08] to-[#1a1008]",
    imageSrc: "https://placehold.co/900x420/2c1a08/ffffff?text=Product+Image",
    imageAlt: "Healthy cooking oils collection",
    headline: "স্বাস্থ্যকর তেলে",
    subheadline: "অ্যাক্টিভ থাকুন প্রতিদিন",
    warmOverlay: true,
  },
  {
    id: 2,
    type: "product",
    bg: "from-[#1a1008] via-[#2c1a08] to-[#1a1008]",
    imageSrc: "https://placehold.co/900x420/2c1a08/ffffff?text=Product+Image+2",
    imageAlt: "More products",
    headline: "বিশুদ্ধ ও প্রাকৃতিক",
    subheadline: "সেরা মানের পণ্য আপনার জন্য",
    warmOverlay: true,
  },
  {
    id: 3,
    type: "product",
    bg: "from-[#1a1008] via-[#2c1a08] to-[#1a1008]",
    imageSrc: "https://placehold.co/900x420/2c1a08/ffffff?text=Product+Image+3",
    imageAlt: "Special offer",
    headline: "বিশেষ অফার",
    subheadline: "সীমিত সময়ের জন্য বিশেষ ছাড়",
    warmOverlay: true,
  },
];

const sideBanner = {
  imageSrc: "https://placehold.co/500x420/1a3a1a/ffffff?text=Mango+Image",
  imageAlt: "Fresh Amrapali mangoes hanging on tree",
  tag: "মিষ্টি-রসালো স্বাদে অনন্য",
  headline: "বাগানের\nসেরা আমপালি",
  cta: "অর্ডার চলছে",
};

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [current]);

  function goTo(idx: number) {
    if (isAnimating || idx === current) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setIsAnimating(false);
    }, 300);
  }

  const slide = slides[current];

  return (
    <section className="w-full bg-[#f5f5f5] px-2 sm:px-4 py-3 sm:py-4">
      <div className="max-w-[1400px] mx-auto flex gap-2 sm:gap-3">

        {/* ── Left: Slider ── */}
        <div className="relative flex-1 min-w-0 rounded-xl overflow-hidden bg-[#1c1008] shadow-lg"
          style={{ aspectRatio: "900/420" }}>

          {/* Slide image */}
          <div
            className={`absolute inset-0 transition-opacity duration-300 ${isAnimating ? "opacity-0" : "opacity-100"}`}
          >
            <img
              src={slide.imageSrc}
              alt={slide.imageAlt}
              className="w-full h-full object-cover"
            />
            {/* Warm gradient overlay — left side dark, right side transparent */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/60" />
            {/* Bottom vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>

          {/* Text — right aligned, mirroring the image */}
          <div
            className={`absolute inset-0 flex flex-col items-end justify-center pr-6 sm:pr-10 md:pr-14 transition-all duration-300 ${isAnimating ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"}`}
          >
            <h2
              className="text-white font-extrabold leading-tight text-right drop-shadow-lg"
              style={{
                fontFamily: "'Noto Serif Bengali', 'SolaimanLipi', serif",
                fontSize: "clamp(1.4rem, 3.5vw, 2.6rem)",
                textShadow: "0 2px 12px rgba(0,0,0,0.7)",
              }}
            >
              {slide.headline}
            </h2>
            <p
              className="text-white/90 font-semibold text-right mt-1 drop-shadow"
              style={{
                fontFamily: "'Noto Serif Bengali', 'SolaimanLipi', serif",
                fontSize: "clamp(0.9rem, 2vw, 1.5rem)",
                textShadow: "0 2px 8px rgba(0,0,0,0.6)",
              }}
            >
              {slide.subheadline}
            </p>
          </div>

          {/* Dot indicators */}
          <div className="absolute bottom-3 left-4 flex gap-2 z-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Slide ${i + 1}`}
                className={`rounded-full transition-all duration-300 focus:outline-none ${
                  i === current
                    ? "w-5 h-2.5 bg-orange-500"
                    : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ── Right: Static Mango Banner ── */}
        <div
          className="relative rounded-xl overflow-hidden shadow-lg flex-shrink-0 hidden sm:block"
          style={{ width: "clamp(180px, 28%, 380px)", aspectRatio: "500/420" }}
        >
          <img
            src={sideBanner.imageSrc}
            alt={sideBanner.imageAlt}
            className="w-full h-full object-cover"
          />
          {/* Dark overlay bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

          {/* Text block — bottom right */}
          <div className="absolute bottom-0 right-0 left-0 p-3 sm:p-4 flex flex-col items-end">
            <span
              className="text-white/80 text-right mb-0.5"
              style={{
                fontFamily: "'Noto Serif Bengali', 'SolaimanLipi', serif",
                fontSize: "clamp(0.55rem, 1.1vw, 0.8rem)",
              }}
            >
              {sideBanner.tag}
            </span>
            <h3
              className="text-white font-extrabold text-right leading-snug"
              style={{
                fontFamily: "'Noto Serif Bengali', 'SolaimanLipi', serif",
                fontSize: "clamp(1rem, 2.2vw, 1.7rem)",
                whiteSpace: "pre-line",
                textShadow: "0 2px 10px rgba(0,0,0,0.8)",
              }}
            >
              {sideBanner.headline}
            </h3>
            <button
              className="mt-2 sm:mt-3 border border-white/70 text-white/90 rounded px-3 py-1 text-xs sm:text-sm hover:bg-white/10 transition-colors"
              style={{ fontFamily: "'Noto Serif Bengali', 'SolaimanLipi', serif" }}
            >
              {sideBanner.cta}
            </button>
          </div>
        </div>

      </div>

      {/* Bengali font from Google */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+Bengali:wght@400;600;700;800&display=swap');
      `}</style>
    </section>
  );
}