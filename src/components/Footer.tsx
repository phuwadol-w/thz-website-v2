"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

// ═══════════════════════════════════════════════════════
// Types
// ═══════════════════════════════════════════════════════
interface ProductLink {
  label: string;
  href: string;
}

interface ServiceLink {
  label: string;
}

interface FooterProps {
  description?: string;
  productLinks?: ProductLink[];
  serviceLinks?: ServiceLink[];
  copyright?: string;
  madeIn?: string;
  phone?: string;
  email?: string;
  address?: string;
  facebook?: string;
}

// ═══════════════════════════════════════════════════════
// Defaults (match current hardcoded values)
// ═══════════════════════════════════════════════════════
const defaultProductLinks: ProductLink[] = [
  { href: "/products?cat=play", label: "THZ Play — สนามเด็กเล่น" },
  { href: "/products?cat=bench", label: "THZ Bench — ม้านั่งโรงเรียน" },
  { href: "/products?cat=furniture", label: "THZ Furniture — เฟอร์นิเจอร์ Loft" },
  { href: "/gallery", label: "ผลงานติดตั้ง" },
];

const defaultServiceLinks: ServiceLink[] = [
  { label: "ออกแบบสนามเด็กเล่น" },
  { label: "ติดตั้งอุปกรณ์" },
  { label: "ซ่อมบำรุงและบริการหลังขาย" },
  { label: "ให้คำปรึกษาฟรี" },
];

const defaultProvinces = [
  { slug: "nakhon-si-thammarat", name: "นครศรีธรรมราช" },
  { slug: "surat-thani", name: "สุราษฎร์ธานี" },
  { slug: "songkhla", name: "สงขลา" },
  { slug: "phuket", name: "ภูเก็ต" },
  { slug: "krabi", name: "กระบี่" },
  { slug: "chumphon", name: "ชุมพร" },
  { slug: "ranong", name: "ระนอง" },
  { slug: "phang-nga", name: "พังงา" },
  { slug: "trang", name: "ตรัง" },
  { slug: "satun", name: "สตูล" },
  { slug: "pattani", name: "ปัตตานี" },
  { slug: "yala", name: "ยะลา" },
  { slug: "narathiwat", name: "นราธิวาส" },
];

export default function Footer(props: FooterProps) {
  const description = props.description ||
    "หจก.โดมการช่าง ผู้ผลิตและจำหน่ายอุปกรณ์สนามเด็กเล่น คุณภาพมาตรฐาน มอก.3000 ผลิตในประเทศไทย จัดส่งและติดตั้งทั่วประเทศ";
  const productLinks = props.productLinks && props.productLinks.length > 0
    ? props.productLinks
    : defaultProductLinks;
  const serviceLinks = props.serviceLinks && props.serviceLinks.length > 0
    ? props.serviceLinks
    : defaultServiceLinks;
  const copyright = props.copyright || "สงวนลิขสิทธิ์";
  const madeIn = props.madeIn || "ผลิตในประเทศไทย";
  const phone = props.phone || "081-300-1932";
  const email = props.email || "THZ@gmail.com";
  const address = props.address || "44 หมู่ 1 ถนนเทวบุรี ต.โพธิ์เสด็จ อ.เมือง จ.นครศรีธรรมราช 80000";
  const facebook = props.facebook || "https://www.facebook.com/domekarnchang/";

  return (
    <footer className="bg-text-dark text-white relative overflow-hidden">
      {/* Decorative top border - bright colors */}
      <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent" />

      {/* Floating decorative */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/images/logo/thz-logo.png"
                alt="THZ Logo - อุปกรณ์สนามเด็กเล่น"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <div>
                <p className="font-montserrat font-extrabold text-lg text-accent">
                  THaiCraftworkZ
                </p>
                <p className="thai-text text-xs text-gray-400">
                  สร้างความสุขผ่านการเล่น
                </p>
              </div>
            </Link>
            <p className="thai-text text-gray-400 text-sm leading-relaxed mb-6">
              {description}
            </p>
            <div className="flex gap-3">
              <a
                href={facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary transition-all duration-300 border border-white/10"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href="https://line.me/ti/p/@THZ"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-[#06C755]/10 flex items-center justify-center hover:bg-[#06C755] transition-all duration-300 border border-[#06C755]/20"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            <h4 className="font-montserrat font-bold text-white mb-6 text-sm uppercase tracking-wider">
              สินค้า
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="thai-text text-sm text-gray-400 hover:text-accent transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="font-montserrat font-bold text-white mb-6 text-sm uppercase tracking-wider">
              บริการ
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((item, i) => (
                <li key={i}>
                  <span className="thai-text text-sm text-gray-400 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent/50" />
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Province SEO Links */}
          <div className="lg:col-span-3">
            <h4 className="font-montserrat font-bold text-white mb-6 text-sm uppercase tracking-wider">
              บริการทั่วภาคใต้
            </h4>
            <ul className="space-y-2">
              {defaultProvinces.map((province) => (
                <li key={province.slug}>
                  <Link
                    href={`/areas/${province.slug}`}
                    className="thai-text text-sm text-gray-400 hover:text-secondary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-secondary/50 group-hover:bg-secondary transition-colors" />
                    อุปกรณ์สนามเด็กเล่น {province.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-montserrat font-bold text-white mb-6 text-sm uppercase tracking-wider">
              ติดต่อเรา
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${phone.replace(/-/g, '')}`}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="thai-text text-sm text-white font-medium">
                      {phone}
                    </p>
                    <p className="thai-text text-xs text-gray-500">
                      โทรเลย
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${email}`}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="thai-text text-sm text-white font-medium">
                      {email}
                    </p>
                    <p className="thai-text text-xs text-gray-500">
                      ส่งอีเมล
                    </p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-primary" />
                </div>
                <div>
                  <p className="thai-text text-sm text-white font-medium">
                    44 หมู่ 1 ถนนเทวบุรี
                  </p>
                  <p className="thai-text text-xs text-gray-500">
                    ต.โพธิ์เสด็จ อ.เมือง จ.นครศรีธรรมราช 80000
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="thai-text text-sm text-gray-500">
            &copy; {new Date().getFullYear()} THaiCraftworkZ (THZ) — หจก.โดมการช่าง {copyright}
          </p>
          <div className="flex items-center gap-4">
            <span className="thai-text text-xs text-gray-600">
              {madeIn}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
