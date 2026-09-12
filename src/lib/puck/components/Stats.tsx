"use client";

import { Award, CheckCircle, Shield, Star } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Award, CheckCircle, Shield, Star,
};

export default function Stats({ items }: { items?: Array<{ number: string; label: string; icon: string }> }) {
  const stats = items || [
    { number: "8+", label: "ปีประสบการณ์", icon: "Award" },
    { number: "500+", label: "โครงการทั่วประเทศ", icon: "CheckCircle" },
    { number: "100%", label: "ได้มาตรฐาน มอก.", icon: "Shield" },
    { number: "5 ปี", label: "รับประกันสินค้า", icon: "Star" },
  ];

  return (
    <section className="trust-bar py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComp = iconMap[stat.icon] || Shield;
            return (
              <div key={index} className="flex items-center gap-3 justify-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <IconComp size={22} className="text-primary" />
                </div>
                <div>
                  <p className="font-montserrat font-extrabold text-xl text-text-dark">{stat.number}</p>
                  <p className="thai-text text-xs text-gray-500">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
