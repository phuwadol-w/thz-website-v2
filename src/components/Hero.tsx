"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Truck, Award, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// ═══════════════════════════════════════════════════════
// Types
// ═══════════════════════════════════════════════════════
interface HeroProps {
  badge?: string;
  headline1?: string;
  headline2?: string;
  headline3?: string;
  standard?: string;
  subtext?: string;
  imageUrl?: string;
  ctaText?: string;
  ctaLink?: string;
}

// ═══════════════════════════════════════════════════════
// Defaults (match current hardcoded values)
// ═══════════════════════════════════════════════════════
const defaults = {
  badge: "EST. 2560 — PLAYGROUND EQUIPMENT",
  headline1: "สนามเด็กเล่น",
  headline2: "คุณภาพ",
  headline3: "มาตรฐาน",
  standard: "มอก.3000",
  subtext: "ผู้ผลิตและจำหน่ายอุปกรณ์สนามเด็กเล่นคุณภาพ",
  imageUrl: "/images/hero/hero-main.jpg",
  ctaText: "ขอใบเสนอราคาฟรี",
  ctaLink: "/contact",
};

export default function Hero(props: HeroProps) {
  const badge = props.badge || defaults.badge;
  const headline1 = props.headline1 || defaults.headline1;
  const headline2 = props.headline2 || defaults.headline2;
  const headline3 = props.headline3 || defaults.headline3;
  const standard = props.standard || defaults.standard;
  const subtext = props.subtext || defaults.subtext;
  const imageUrl = props.imageUrl || defaults.imageUrl;
  const ctaText = props.ctaText || defaults.ctaText;
  const ctaLink = props.ctaLink || defaults.ctaLink;

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-sky-light via-white to-grass-light">
      {/* Decorative floating shapes */}
      <div className="floating-shape w-72 h-72 bg-primary top-20 -left-20 animate-float" />
      <div className="floating-shape w-48 h-48 bg-secondary bottom-20 right-10 animate-float delay-300" />
      <div className="floating-shape w-32 h-32 bg-accent top-40 right-40 animate-float delay-500" />
      <div className="floating-shape w-24 h-24 bg-cta bottom-40 left-40 animate-float delay-200" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2.5 mb-6"
            >
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="font-montserrat text-sm text-primary-dark font-semibold">
                {badge}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-montserrat text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[0.95] mb-6"
            >
              <span className="text-text-dark">{headline1}</span>
              <br />
              <span className="text-primary">{headline2}</span>{" "}
              <span className="text-accent">{headline3}</span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">
                {standard}
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-inter text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed"
            >
              {subtext}
              <br />
              <span className="text-text-dark font-medium">โครงเหล็กชุบสังกะสี + พลาสติก LLDPE</span>
              <br />
              <span className="text-secondary font-medium">จัดส่งทั่วประเทศ บริการติดตั้งฟรี</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Link
                href={ctaLink}
                className="group inline-flex items-center gap-3 btn-cta text-base"
              >
                {ctaText}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:0813001932"
                className="inline-flex items-center gap-3 btn-primary text-base"
              >
                <Phone size={20} />
                โทร 081-300-1932
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-6"
            >
              {[
                { icon: Shield, text: "มอก.3000", color: "text-primary" },
                { icon: Truck, text: "จัดส่งทั่วประเทศ", color: "text-secondary" },
                { icon: Award, text: "รับประกัน 5 ปี", color: "text-accent-dark" },
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-2">
                  <badge.icon size={18} className={badge.color} />
                  <span className="font-inter text-sm text-gray-700 font-medium">
                    {badge.text}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src={imageUrl}
                alt="สนามเด็กเล่น THZ - อุปกรณ์สนามเด็กเล่นคุณภาพมาตรฐาน มอก.3000"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Shield size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-montserrat font-bold text-text-dark">
                      {standard}
                    </p>
                    <p className="thai-text text-xs text-gray-600">
                      ผ่านมาตรฐานความปลอดภัย
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🎉</span>
                </div>
                <div>
                  <p className="font-montserrat font-bold text-text-dark text-lg">500+</p>
                  <p className="thai-text text-xs text-gray-500">โครงการทั่วประเทศ</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-inter text-xs text-gray-400 tracking-widest">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary/40 to-transparent" />
      </motion.div>
    </section>
  );
}
