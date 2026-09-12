"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function CTA({
  title,
  subtitle,
  description,
  phoneText,
}: {
  title?: string;
  subtitle?: string;
  description?: string;
  phoneText?: string;
}) {
  return (
    <section className="py-24 bg-gradient-to-r from-primary via-primary-dark to-secondary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-montserrat text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          {title}
          <br />
          <span className="text-accent">{subtitle}</span>
        </h2>
        {description && <p className="thai-text text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">{description}</p>}
        <div className="flex flex-wrap justify-center gap-4">
          <a href="tel:0813001932" className="btn-accent inline-flex items-center gap-2 text-base">
            <Phone size={20} />
            {phoneText || "โทรเลย 081-300-1932"}
          </a>
          <a href="https://line.me/ti/p/@THZ" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#06C755] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#05b34a] transition-all duration-300 shadow-lg shadow-[#06C755]/30">
            <MessageCircle size={20} />
            แชท LINE
          </a>
        </div>
      </div>
    </section>
  );
}
