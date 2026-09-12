"use client";

import { Shield, Truck, Award, Heart, Users, Wrench } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Shield, Truck, Award, Heart, Users, Wrench,
};

export default function WhyChooseUs({
  title,
  subtitle,
  items,
}: {
  title?: string;
  subtitle?: string;
  items?: Array<{ title: string; description: string; icon: string }>;
}) {
  const whyItems = items || [];

  return (
    <section className="py-20 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          {subtitle && (
            <span className="inline-block thai-text bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-semibold mb-4">
              {subtitle}
            </span>
          )}
          <h2 className="font-montserrat text-3xl md:text-4xl font-extrabold text-text-dark mb-4">{title}</h2>
          <div className="section-divider mt-6" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyItems.map((item, index) => {
            const IconComp = iconMap[item.icon] || Shield;
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <IconComp size={28} className="text-primary" />
                </div>
                <h3 className="font-montserrat font-bold text-text-dark mb-3">{item.title}</h3>
                <p className="thai-text text-sm text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
