"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, MessageCircle, ChevronDown } from "lucide-react";

// ═══════════════════════════════════════════════════════
// Types
// ═══════════════════════════════════════════════════════
interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

interface NavbarProps {
  navLinks?: NavLink[];
  ctaPhone?: string;
  ctaFacebook?: string;
}

// ═══════════════════════════════════════════════════════
// Default navigation links (match current hardcoded)
// ═══════════════════════════════════════════════════════
const defaultNavLinks: NavLink[] = [
  { href: "/", label: "หน้าแรก" },
  {
    href: "/products",
    label: "สินค้า",
    children: [
      { href: "/products?cat=play", label: "THZ Play — สนามเด็กเล่น" },
      { href: "/products?cat=bench", label: "THZ Bench — ม้านั่ง" },
      { href: "/products?cat=furniture", label: "THZ Furniture — เฟอร์นิเจอร์" },
    ],
  },
  { href: "/gallery", label: "ผลงาน" },
  { href: "/about", label: "เกี่ยวกับเรา" },
  { href: "/contact", label: "ติดต่อเรา" },
];

export default function Navbar(props: NavbarProps) {
  const navLinks = props.navLinks && props.navLinks.length > 0
    ? props.navLinks
    : defaultNavLinks;
  const ctaPhone = props.ctaPhone || "081-300-1932";
  const ctaFacebook = props.ctaFacebook || "https://www.facebook.com/domekarnchang/";

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5 py-2"
          : "bg-white/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Image
                src="/images/logo/thz-logo.png"
                alt="THZ Logo - อุปกรณ์สนามเด็กเล่น"
                width={48}
                height={48}
                className="w-10 h-10 lg:w-12 lg:h-12 object-contain transition-all duration-300"
              />
            </div>
            <div className="hidden sm:block">
              <p className="font-montserrat font-extrabold text-lg leading-tight text-primary-dark">
                THaiCraftworkZ
              </p>
              <p className="thai-text text-xs text-gray-500">
                สร้างความสุขผ่านการเล่น
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && setHoveredDropdown(index)}
                onMouseLeave={() => setHoveredDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="thai-text font-medium px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-1 text-text-dark hover:text-primary hover:bg-primary/5"
                >
                  {link.label}
                  {link.children && link.children.length > 0 && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${
                        hoveredDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                {link.children && link.children.length > 0 && hoveredDropdown === index && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 py-2 animate-scale-in">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-3 thai-text text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${ctaPhone.replace(/-/g, '')}`}
              className="flex items-center gap-2 btn-primary text-sm px-5 py-2.5"
            >
              <Phone size={16} />
              <span>{ctaPhone}</span>
            </a>
            <a
              href={ctaFacebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#1877F2] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#166FE5] transition-all duration-300 shadow-lg shadow-[#1877F2]/20"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Facebook</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl transition-colors text-text-dark hover:bg-primary/5"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 animate-fade-in">
          <div className="px-4 py-6 space-y-1">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block thai-text font-medium text-text-dark hover:text-primary hover:bg-primary/5 py-3 px-4 rounded-xl transition-colors"
                >
                  {link.label}
                </Link>
                {link.children && link.children.length > 0 && (
                  <div className="pl-6">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setIsOpen(false)}
                        className="block thai-text text-sm text-gray-500 hover:text-primary py-2 px-4 rounded-lg transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-3 mt-4">
              <a
                href={`tel:${ctaPhone.replace(/-/g, '')}`}
                className="flex items-center justify-center gap-2 btn-primary text-sm"
              >
                <Phone size={16} />
                <span>{ctaPhone}</span>
              </a>
              <a
                href={ctaFacebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#1877F2] text-white px-6 py-3 rounded-full text-sm font-semibold"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>แชท Facebook</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
