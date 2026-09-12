"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Products({
  title,
  subtitle,
  description,
  items,
}: {
  title?: string;
  subtitle?: string;
  description?: string;
  items?: Array<{ title: string; description: string; imageUrl: string; badge: string; category: string; accentColor: string }>;
}) {
  const products = items || [];

  return (
    <section className="py-20 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          {subtitle && (
            <span className="inline-block thai-text bg-accent/10 text-accent-dark px-5 py-2 rounded-full text-sm font-semibold mb-4">
              {subtitle}
            </span>
          )}
          <h2 className="font-montserrat text-3xl md:text-4xl font-extrabold text-text-dark mb-4">{title}</h2>
          {description && <p className="thai-text text-gray-500 max-w-2xl mx-auto">{description}</p>}
          <div className="section-divider mt-6" />
        </div>
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="relative h-56 overflow-hidden">
                  {product.imageUrl ? (
                    <img src={product.imageUrl} alt={product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <span className="text-gray-400 text-sm">เพิ่มรูปใน Puck</span>
                    </div>
                  )}
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">{product.badge}</span>
                  )}
                  <span className="absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full text-white" style={{ backgroundColor: product.accentColor }}>
                    {product.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-montserrat font-bold text-text-dark mb-2 text-lg">{product.title}</h3>
                  <p className="thai-text text-sm text-gray-500 leading-relaxed mb-4">{product.description}</p>
                  <Link href="/products" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all">
                    ดูรายละเอียด <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-400">
            <p>เพิ่มสินค้าใน Puck Editor โดยลาก component &quot;Products&quot; มาวาง</p>
          </div>
        )}
        <div className="text-center mt-12">
          <Link href="/products" className="btn-primary inline-flex items-center gap-2">
            ดูสินค้าทั้งหมด <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
