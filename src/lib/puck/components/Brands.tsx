"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Brands({
  title,
  items,
}: {
  title?: string;
  items?: Array<{ name: string; slug: string; description: string; color: string; badge: string; link: string; imageUrl: string }>;
}) {
  const brands = items || [];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block thai-text bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-semibold mb-4">
            แบรนด์สินค้าของเรา
          </span>
          <h2 className="font-montserrat text-3xl md:text-4xl font-extrabold text-text-dark mb-4">{title}</h2>
          <div className="section-divider mt-6" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <div key={brand.slug || index} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100">
              <div className="relative h-64 overflow-hidden">
                {brand.imageUrl ? (
                  <img src={brand.imageUrl} alt={brand.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">{brand.name}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-text-dark/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block text-white text-xs font-bold px-4 py-1.5 rounded-full" style={{ backgroundColor: brand.color }}>
                    {brand.badge}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-montserrat font-extrabold text-xl text-text-dark mb-2">{brand.name}</h3>
                <p className="font-inter text-sm text-gray-500 mb-4 leading-relaxed">{brand.description}</p>
                <Link href={brand.link} className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all duration-300">
                  ดูสินค้าทั้งหมด <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
