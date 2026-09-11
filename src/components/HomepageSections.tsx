"use client";

import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import {
  Shield, Truck, Wrench, Phone, MessageCircle, Star,
  ArrowRight, Award, CheckCircle, Heart, Users,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// ═══════════════════════════════════════════════════════
// Icon map for CMS-driven icons
// ═══════════════════════════════════════════════════════
const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Shield, Truck, Wrench, Phone, MessageCircle, Star,
  ArrowRight, Award, CheckCircle, Heart, Users,
};

function getIcon(name: string) {
  return iconMap[name] || Shield;
}

// ═══════════════════════════════════════════════════════
// Default data (fallback when CMS is empty)
// ═══════════════════════════════════════════════════════
const defaultProducts = [
  {
    title: "สนามเด็กเล่นพลาสติกกันแดด",
    description: "สนามเด็กเล่นรวม โครงเหล็กชุบสังกะสี + พลาสติก LLDPE กันแดดกันฝน ปลอดภัยได้มาตรฐาน",
    image: "/images/products/726606443_1405968788229183_6337553449482275185_n.jpg",
    badge: "ยอดนิยม",
    accentColor: "#FF9800",
    category: "THZ Play",
  },
  {
    title: "สไลเดอร์พลาสติกพร้อมบันได",
    description: "สไลเดอร์พลาสติก LLDPE คุณภาพสูง พร้อมบันไดปีน ฐานมั่นคง ปลอดภัยสำหรับเด็ก",
    image: "/images/products/124374999_2742818269293265_2851804580300417570_n.jpg",
    accentColor: "#2196F3",
    category: "THZ Play",
  },
  {
    title: "ชิงช้าสนามพลาสติก",
    description: "ชิงช้าสนามโครงเหล็ก แข็งแรง ทนทาน เหมาะสำหรับโรงเรียน หมู่บ้าน เทศบาล",
    image: "/images/products/472772789_3852975844944163_5782975775520749990_n.jpg",
    accentColor: "#4CAF50",
    category: "THZ Play",
  },
  {
    title: "เครื่องเล่นรวมเสริมพัฒนาการ",
    description: "ชุดเครื่องเล่นรวม ปีนป่าย สไลเดอร์ ชิงช้า เสริมพัฒนาการเด็กทุกวัย",
    image: "/images/products/481072543_1171214081676927_1346842185356984644_n.jpg",
    badge: "ใหม่",
    accentColor: "#FF5722",
    category: "THZ Play",
  },
  {
    title: "ม้านั่งโรงเรียน",
    description: "ม้านั่งสนาม โครงเหล็กแข็งแรง ทนทาน ขนาดมาตรฐาน เหมาะสำหรับโรงเรียน",
    image: "/images/products/650721761_1321150026711060_532668979833544120_n.jpg",
    accentColor: "#2196F3",
    category: "THZ Bench",
  },
  {
    title: "เครื่องเล่นสนามกลางแจ้ง",
    description: "อุปกรณ์สนามเด็กเล่นกลางแจ้ง โครงเหล็กชุบสังกะสี ทนแดดทนฝน ติดตั้งทั่วประเทศ",
    image: "/images/products/769309563_1449583230534405_8478278305857454543_n.jpg",
    accentColor: "#FFC107",
    category: "THZ Play",
  },
];

const defaultGalleryItems = [
  { image: "/images/gallery/gallery-01.jpg", location: "ชุดเครื่องเล่นรวมสนามเด็กเล่น", category: "สนามเด็กเล่น" },
  { image: "/images/gallery/gallery-02.jpg", location: "กระดานโยก 4 ที่นั่ง", category: "สนามเด็กเล่น" },
  { image: "/images/gallery/gallery-03.jpg", location: "กระดานโยก 3 ที่นั่ง", category: "สนามเด็กเล่น" },
  { image: "/images/gallery/gallery-04.jpg", location: "กระดานโยกสนามเด็กเล่น", category: "สนามเด็กเล่น" },
  { image: "/images/gallery/gallery-05.jpg", location: "ชุดปีนป่ายโค้ง (Monkey Bars)", category: "สนามเด็กเล่น" },
  { image: "/images/gallery/gallery-06.jpg", location: "ตาข่ายปีนป่าย A-Frame", category: "สนามเด็กเล่น" },
  { image: "/images/gallery/gallery-07.jpg", location: "ชุดปีนป่ายพร้อมห่วงจับ", category: "สนามเด็กเล่น" },
  { image: "/images/gallery/gallery-08.jpg", location: "อุปกรณ์สมดุลสนามเด็กเล่น", category: "สนามเด็กเล่น" },
];

const defaultStats = [
  { number: "8+", label: "ปีประสบการณ์", icon: "Award" },
  { number: "500+", label: "โครงการทั่วประเทศ", icon: "CheckCircle" },
  { number: "100%", label: "ได้มาตรฐาน มอก.", icon: "Shield" },
  { number: "5 ปี", label: "รับประกันสินค้า", icon: "Star" },
];

const defaultWhyChooseUs = [
  { icon: "Shield", title: "ได้มาตรฐาน มอก.3000", description: "อุปกรณ์ทุกชิ้นผ่านมาตรฐานความปลอดภัย มอก.3000" },
  { icon: "Truck", title: "จัดส่งทั่วประเทศ", description: "บริการจัดส่งฟรีทั่วประเทศไทย พร้อมทีมติดตั้ง" },
  { icon: "Award", title: "รับประกัน 5 ปี", description: "รับประกันสินค้าทุกชิ้นนาน 5 ปี พร้อมอะไหล่สำรอง" },
  { icon: "Heart", title: "วัสดุคุณภาพสูง", description: "โครงเหล็กชุบสังกะสี + พลาสติก LLDPE ทนทาน" },
  { icon: "Users", title: "บริการติดตั้งฟรี", description: "ทีมช่างผู้เชี่ยวชาญ ติดตั้งฟรีไม่มีค่าใช้จ่าย" },
  { icon: "Wrench", title: "บริการหลังขาย", description: "ดูแลซ่อมบำรุงตลอดอายุการใช้งาน พร้อมอะไหล่สำรอง" },
];

const defaultTestimonials = [
  {
    name: "โรงเรียนเทศบาลวัดเพชร",
    role: "จ.นครศรีธรรมราช",
    text: "อุปกรณ์สนามเด็กเล่นคุณภาพมาก ติดตั้งเรียบร้อย เด็กๆ ชอบมาก ทีมงานบริการดีเยี่ยม",
    rating: 5,
  },
  {
    name: "เทศบาลตำบลโพธิ์เสด็จ",
    role: "จ.นครศรีธรรมราช",
    text: "สั่งม้านั่งโรงเรียน 20 ชุด คุณภาพดี ราคาโรงงาน ส่งเร็ว ติดตั้งให้ฟรี ประทับใจมาก",
    rating: 5,
  },
  {
    name: "โรงเรียนวัดพระธาตุ",
    role: "จ.นครศรีธรรมราช",
    text: "สนามเด็กเล่นพลาสติกกันแดด สวยมาก ทนทาน ได้มาตรฐาน มอก. จะสั่งเพิ่มอีก",
    rating: 5,
  },
];

const defaultBrands = [
  {
    name: "THZ Play",
    slug: "play",
    description: "สไลเดอร์ ชิงช้า ปีนป่าย เครื่องเล่นเสริมพัฒนาการเด็ก",
    image: "/images/brands/thz-play.jpg",
    color: "#2196F3",
    badge: "PLAYGROUND",
    link: "/products?cat=play",
  },
  {
    name: "THZ Bench",
    slug: "bench",
    description: "ม้านั่งโรงเรียน ม้านั่งสนาม โต๊ะโรงอาหาร",
    image: "/images/brands/thz-bench.jpg",
    color: "#4CAF50",
    badge: "BENCH",
    link: "/products?cat=bench",
  },
  {
    name: "THZ Furniture",
    slug: "furniture",
    description: "เฟอร์นิเจอร์สไตล์ Loft โต๊ะ เก้าอี้ ชั้นวาง ผลิตตามสั่ง",
    image: "/images/brands/thz-furniture.jpg",
    color: "#FF9800",
    badge: "FURNITURE",
    link: "/products?cat=furniture",
  },
];

// ═══════════════════════════════════════════════════════
// Types
// ═══════════════════════════════════════════════════════
interface HomepageSectionsProps {
  homepage: Record<string, any> | null;
}

// ═══════════════════════════════════════════════════════
// Component
// ═══════════════════════════════════════════════════════
export default function HomepageSections({ homepage }: HomepageSectionsProps) {
  const hp = homepage || {};

  // Stats from CMS or defaults
  const stats = hp.stats && hp.stats.length > 0
    ? hp.stats.map((s: any) => ({ ...s, icon: getIcon(s.icon) }))
    : defaultStats.map(s => ({ ...s, icon: getIcon(s.icon) }));

  // Brands from CMS or defaults
  const brands = hp.brands && hp.brands.length > 0
    ? hp.brands.map((b: any) => ({
        name: b.name,
        slug: b.slug,
        description: b.description || '',
        image: b.image?.url || defaultBrands.find(d => d.slug === b.slug)?.image || '',
        badge: b.name?.replace('THZ ', '').toUpperCase() || '',
        link: b.link || `/products?cat=${b.slug}`,
      }))
    : defaultBrands;

  // Why choose us from CMS or defaults
  const whyItems = hp.whyItems && hp.whyItems.length > 0
    ? hp.whyItems.map((w: any) => ({ ...w, icon: getIcon(w.icon) }))
    : defaultWhyChooseUs.map(w => ({ ...w, icon: getIcon(w.icon) }));

  // Testimonials from CMS or defaults
  const testimonials = hp.testimonials && hp.testimonials.length > 0
    ? hp.testimonials
    : defaultTestimonials;

  return (
    <>
      {/* ═══════════ Trust Bar ═══════════ */}
      <section className="trust-bar py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat: any, index: number) => {
              const IconComp = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 justify-center"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <IconComp size={22} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-montserrat font-extrabold text-xl text-text-dark">
                      {stat.number}
                    </p>
                    <p className="thai-text text-xs text-gray-500">{stat.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ Product Categories — 3 Brand Cards ═══════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block thai-text bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-semibold mb-4">
              แบรนด์สินค้าของเรา
            </span>
            <h2 className="font-montserrat text-3xl md:text-4xl font-extrabold text-text-dark mb-4">
              {hp.brandsTitle || "3 แบรนด์คุณภาพ ครบวงจร"}
            </h2>
            <div className="section-divider mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brands.map((brand: any, index: number) => (
              <motion.div
                key={brand.slug || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={brand.image}
                    alt={`${brand.name} - อุปกรณ์สนามเด็กเล่น`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-text-dark/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span
                      className="inline-block text-white text-xs font-bold px-4 py-1.5 rounded-full"
                      style={{ backgroundColor: brand.color || '#2196F3' }}
                    >
                      {brand.badge}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-montserrat font-extrabold text-xl text-text-dark mb-2">
                    {brand.name}
                  </h3>
                  <p className="font-inter text-sm text-gray-500 mb-4 leading-relaxed">
                    {brand.description}
                  </p>
                  <Link
                    href={brand.link}
                    className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all duration-300"
                  >
                    ดูสินค้าทั้งหมด
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ Featured Products ═══════════ */}
      <section className="py-20 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block thai-text bg-accent/10 text-accent-dark px-5 py-2 rounded-full text-sm font-semibold mb-4">
              {hp.productsSubtitle || "สินค้าแนะนำ"}
            </span>
            <h2 className="font-montserrat text-3xl md:text-4xl font-extrabold text-text-dark mb-4">
              {hp.productsTitle || "สินค้าขายดีของเรา"}
            </h2>
            <p className="thai-text text-gray-500 max-w-2xl mx-auto">
              {hp.productsDescription ||
                "ผลิตจากวัสดุคุณภาพสูง โครงเหล็กชุบสังกะสี + พลาสติก LLDPE ทนทาน ปลอดภัย ได้มาตรฐาน มอก.3000"}
            </p>
            <div className="section-divider mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {defaultProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/products"
              className="btn-primary inline-flex items-center gap-2"
            >
              ดูสินค้าทั้งหมด
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ Featured Gallery ═══════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block thai-text bg-secondary/10 text-secondary px-5 py-2 rounded-full text-sm font-semibold mb-4">
              {hp.gallerySubtitle || "ผลงานของเรา"}
            </span>
            <h2 className="font-montserrat text-3xl md:text-4xl font-extrabold text-text-dark mb-4">
              {hp.galleryTitle || "ผลงานติดตั้งทั่วประเทศ"}
            </h2>
            <p className="thai-text text-gray-500 max-w-2xl mx-auto">
              ผลงานการผลิตและติดตั้งอุปกรณ์สนามเด็กเล่นกว่า 500 โครงการ
            </p>
            <div className="section-divider mt-6" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {defaultGalleryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="gallery-card aspect-square cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={`${item.location} - อุปกรณ์สนามเด็กเล่น THZ`}
                  className="w-full h-full object-cover"
                />
                <div className="overlay flex items-end p-5">
                  <div>
                    <span className="inline-block bg-secondary/90 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                      {item.category}
                    </span>
                    <h3 className="thai-text text-white font-semibold text-sm md:text-base">
                      {item.location}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link
              href="/gallery"
              className="btn-primary inline-flex items-center gap-2"
            >
              ดูผลงานทั้งหมด
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ Why Choose Us ═══════════ */}
      <section className="py-20 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block thai-text bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-semibold mb-4">
              {hp.whySubtitle || "ทำไมต้อง THZ"}
            </span>
            <h2 className="font-montserrat text-3xl md:text-4xl font-extrabold text-text-dark mb-4">
              {hp.whyTitle || "คุณภาพระดับโลก ราคาที่เข้าถึงได้"}
            </h2>
            <p className="thai-text text-gray-500 max-w-2xl mx-auto">
              หจก.โดมการช่าง ผลิตอุปกรณ์สนามเด็กเล่นด้วยวัสดุคุณภาพสูง
              โครงเหล็กชุบสังกะสี ทนทาน ปลอดภัย ได้มาตรฐาน มอก.3000
            </p>
            <div className="section-divider mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyItems.map((item: any, index: number) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <IconComp size={28} className="text-primary" />
                  </div>
                  <h3 className="font-montserrat font-bold text-text-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="thai-text text-sm text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ Testimonials ═══════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block thai-text bg-secondary/10 text-secondary px-5 py-2 rounded-full text-sm font-semibold mb-4">
              ความคิดเห็นลูกค้า
            </span>
            <h2 className="font-montserrat text-3xl md:text-4xl font-extrabold text-text-dark mb-4">
              {hp.testimonialsTitle || "ลูกค้าของเราไว้วางใจ"}
            </h2>
            <div className="section-divider mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating || 5 }).map((_: any, i: number) => (
                    <Star key={i} size={18} className="text-accent fill-accent" />
                  ))}
                </div>

                {/* Quote */}
                <p className="thai-text text-gray-600 mb-6 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="font-montserrat font-bold text-primary text-lg">
                      {testimonial.name?.charAt(0) || '?'}
                    </span>
                  </div>
                  <div>
                    <p className="font-montserrat font-semibold text-text-dark text-sm">
                      {testimonial.name}
                    </p>
                    <p className="thai-text text-xs text-gray-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CTA Section ═══════════ */}
      <section className="py-24 bg-gradient-to-r from-primary via-primary-dark to-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-montserrat text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              {hp.ctaTitle || "พร้อมสร้างสนามเด็กเล่น"}
              <br />
              <span className="text-accent">{hp.ctaSubtitle || "ในฝัน ของคุณ?"}</span>
            </h2>
            <p className="thai-text text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              {hp.ctaDescription ||
                "ติดต่อเราวันนี้เพื่อรับใบเสนอราคาฟรี ออกแบบและติดตั้งอุปกรณ์สนามเด็กเล่นคุณภาพมาตรฐาน จัดส่งทั่วประเทศ"}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:0813001932"
                className="btn-accent inline-flex items-center gap-2 text-base"
              >
                <Phone size={20} />
                {hp.ctaPhoneText || "โทรเลย 081-300-1932"}
              </a>
              <a
                href="https://line.me/ti/p/@THZ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#06C755] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#05b34a] transition-all duration-300 shadow-lg shadow-[#06C755]/30"
              >
                <MessageCircle size={20} />
                แชท LINE
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
