"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Gallery({
  title,
  subtitle,
  items,
}: {
  title?: string;
  subtitle?: string;
  items?: Array<{ imageUrl: string; location: string; category: string }>;
}) {
  const galleryItems = items || [];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          {subtitle && (
            <span className="inline-block thai-text bg-secondary/10 text-secondary px-5 py-2 rounded-full text-sm font-semibold mb-4">
              {subtitle}
            </span>
          )}
          <h2 className="font-montserrat text-3xl md:text-4xl font-extrabold text-text-dark mb-4">{title}</h2>
          <div className="section-divider mt-6" />
        </div>
        {galleryItems.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {galleryItems.map((item, index) => (
              <div key={index} className="gallery-card aspect-square cursor-pointer group">
                {item.imageUrl ? (
                  <img src={item.imageUrl} alt={item.location} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">เพิ่มรูปใน Puck</span>
                  </div>
                )}
                <div className="overlay flex items-end p-5">
                  <div>
                    <span className="inline-block bg-secondary/90 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">{item.category}</span>
                    <h3 className="thai-text text-white font-semibold text-sm md:text-base">{item.location}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-400">
            <p>เพิ่มรูปภาพใน Puck Editor โดยลาก component &quot;Gallery&quot; มาวาง</p>
          </div>
        )}
        <div className="text-center mt-10">
          <Link href="/gallery" className="btn-primary inline-flex items-center gap-2">
            ดูผลงานทั้งหมด <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
