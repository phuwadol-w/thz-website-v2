"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  price?: string;
  badge?: string;
  accentColor: string;
  category?: string;
}

export default function ProductCard({
  title,
  description,
  image,
  price,
  badge,
  accentColor,
  category,
}: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group card-hover bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-white flex items-center justify-center p-4">
        <Image
          src={image}
          alt={`${title} - อุปกรณ์สนามเด็กเล่น THZ`}
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-text-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

        {/* Badge */}
        {badge && (
          <span
            className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-lg"
            style={{ backgroundColor: accentColor }}
          >
            {badge}
          </span>
        )}

        {/* Category tag */}
        {category && (
          <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-text-dark text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
            {category}
          </span>
        )}

        {/* Hover CTA */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-400">
          <div
            className="flex items-center justify-center gap-2 text-white font-semibold py-3 rounded-xl backdrop-blur-sm"
            style={{ backgroundColor: accentColor + "CC" }}
          >
            ดูรายละเอียด
            <ArrowRight size={16} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-montserrat font-bold text-lg text-text-dark mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="thai-text text-sm text-gray-500 mb-4 line-clamp-2 leading-relaxed">
          {description}
        </p>
        {price && (
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <span className="font-montserrat font-extrabold text-primary text-lg">
              {price}
            </span>
            <span className="thai-text text-xs text-gray-400">รวม VAT</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
