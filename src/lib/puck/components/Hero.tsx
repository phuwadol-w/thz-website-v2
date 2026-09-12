"use client";

import { Star, ArrowRight, CheckCircle } from "lucide-react";

export default function Hero({
  badge,
  headline1,
  headline2,
  headline3,
  standard,
  subtext,
  ctaText,
  ctaLink,
  imageUrl,
}: {
  badge?: string;
  headline1?: string;
  headline2?: string;
  headline3?: string;
  standard?: string;
  subtext?: string;
  ctaText?: string;
  ctaLink?: string;
  imageUrl?: string;
}) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#0d2847] to-[#0a1628]">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-[150px]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {badge && (
              <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 px-4 py-2 rounded-full text-xs font-montserrat font-semibold tracking-wider mb-6">
                {badge}
              </span>
            )}
            <h1 className="font-montserrat text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              {headline1}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F4D03F]">
                {headline2}
              </span>{" "}
              <span className="text-white">{headline3}</span>
            </h1>
            {standard && (
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 mb-6">
                <CheckCircle size={18} className="text-[#D4AF37]" />
                <span className="font-montserrat font-bold text-white text-sm">{standard}</span>
              </div>
            )}
            {subtext && (
              <p className="text-white/70 text-lg mb-8 max-w-lg leading-relaxed">{subtext}</p>
            )}
            {ctaText && (
              <a
                href={ctaLink || "/contact"}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-[#0a1628] px-8 py-4 rounded-full font-montserrat font-bold text-base hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300"
              >
                {ctaText}
                <ArrowRight size={18} />
              </a>
            )}
          </div>
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/30">
              {imageUrl ? (
                <img src={imageUrl} alt="Hero" className="w-full h-auto object-cover" />
              ) : (
                <div className="w-full h-[400px] bg-gradient-to-br from-blue-900/50 to-cyan-900/50 flex items-center justify-center">
                  <span className="text-white/30 text-sm">เพิ่มรูปภาพใน Puck Editor</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
