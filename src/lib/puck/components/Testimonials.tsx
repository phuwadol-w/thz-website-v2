"use client";

import { Star } from "lucide-react";

export default function Testimonials({
  title,
  items,
}: {
  title?: string;
  items?: Array<{ name: string; role: string; text: string; rating: number }>;
}) {
  const testimonials = items || [];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block thai-text bg-secondary/10 text-secondary px-5 py-2 rounded-full text-sm font-semibold mb-4">
            ความคิดเห็นลูกค้า
          </span>
          <h2 className="font-montserrat text-3xl md:text-4xl font-extrabold text-text-dark mb-4">{title}</h2>
          <div className="section-divider mt-6" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                  <Star key={i} size={18} className="text-accent fill-accent" />
                ))}
              </div>
              <p className="thai-text text-gray-600 mb-6 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="font-montserrat font-bold text-primary text-lg">{testimonial.name?.charAt(0) || "?"}</span>
                </div>
                <div>
                  <p className="font-montserrat font-semibold text-text-dark text-sm">{testimonial.name}</p>
                  <p className="thai-text text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
