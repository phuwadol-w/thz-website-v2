"use client";

import { useState, useEffect } from "react";
import {
  LayoutDashboard,
  FileText,
  Image,
  Package,
  MessageSquare,
  Settings,
  Palette,
  Navigation,
  Globe,
  BarChart3,
  ExternalLink,
  ArrowRight,
  ShoppingCart,
  Users,
  TrendingUp,
  Clock,
} from "lucide-react";

// ═══════════════════════════════════════════════════════
// THZ Admin Dashboard — ReadyPlanet-style
// ภาพรวมเว็บ + ปุ่มลัด + สถิติ
// ═══════════════════════════════════════════════════════

interface Stats {
  pages: number;
  products: number;
  gallery: number;
  submissions: number;
  media: number;
}

interface QuickLink {
  icon: React.ReactNode;
  label: string;
  description: string;
  href: string;
  color: string;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    pages: 0,
    products: 0,
    gallery: 0,
    submissions: 0,
    media: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const [pagesRes, productsRes, galleryRes, submissionsRes, mediaRes] =
          await Promise.all([
            fetch("/api/pages?limit=0").then((r) => r.json()),
            fetch("/api/products?limit=0").then((r) => r.json()),
            fetch("/api/gallery?limit=0").then((r) => r.json()),
            fetch("/api/submissions?limit=0").then((r) => r.json()),
            fetch("/api/media?limit=0").then((r) => r.json()),
          ]);

        setStats({
          pages: pagesRes.totalDocs || 0,
          products: productsRes.totalDocs || 0,
          gallery: galleryRes.totalDocs || 0,
          submissions: submissionsRes.totalDocs || 0,
          media: mediaRes.totalDocs || 0,
        });
      } catch (err) {
        console.error("Failed to fetch stats:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  const quickLinks: QuickLink[] = [
    {
      icon: <LayoutDashboard size={24} />,
      label: "Page Builder",
      description: "แก้ไขหน้าเว็บแบบ Visual Drag & Drop",
      href: "/admin/editor",
      color: "#3B82F6",
    },
    {
      icon: <FileText size={24} />,
      label: "จัดการหน้าเว็บ",
      description: "สร้าง/แก้ไข/ลบหน้าเว็บทั้งหมด",
      href: "/admin/collections/pages",
      color: "#10B981",
    },
    {
      icon: <Package size={24} />,
      label: "จัดการสินค้า",
      description: "เพิ่ม/แก้ไขสินค้า 3 แบรนด์",
      href: "/admin/collections/products",
      color: "#F59E0B",
    },
    {
      icon: <Image size={24} />,
      label: "จัดการรูปภาพ",
      description: "อัปโหลด/จัดการรูปภาพทั้งหมด",
      href: "/admin/collections/media",
      color: "#8B5CF6",
    },
    {
      icon: <Globe size={24} />,
      label: "ผลงานติดตั้ง",
      description: "จัดการรูปผลงานติดตั้งทั่วประเทศ",
      href: "/admin/collections/gallery",
      color: "#EC4899",
    },
    {
      icon: <Navigation size={24} />,
      label: "จัดการเมนู",
      description: "แก้ไขเมนูนำทาง + เมนูย่อย",
      href: "/admin/globals/navigation",
      color: "#14B8A6",
    },
    {
      icon: <Palette size={24} />,
      label: "ตั้งค่าหน้าแรก",
      description: "แก้ไข Hero, Stats, Brands, Products",
      href: "/admin/globals/homepage",
      color: "#F97316",
    },
    {
      icon: <Settings size={24} />,
      label: "ตั้งค่าเว็บไซต์",
      description: "ข้อมูลบริษัท + โซเชียล + SEO",
      href: "/admin/globals/settings",
      color: "#6366F1",
    },
    {
      icon: <MessageSquare size={24} />,
      label: "ข้อความติดต่อ",
      description: "ดูข้อความจากลูกค้าที่ส่งมา",
      href: "/admin/collections/submissions",
      color: "#EF4444",
    },
  ];

  const statCards = [
    {
      label: "หน้าเว็บ",
      value: stats.pages,
      icon: <FileText size={20} />,
      color: "#3B82F6",
      href: "/admin/collections/pages",
    },
    {
      label: "สินค้า",
      value: stats.products,
      icon: <Package size={20} />,
      color: "#10B981",
      href: "/admin/collections/products",
    },
    {
      label: "รูปภาพ",
      value: stats.media,
      icon: <Image size={20} />,
      color: "#8B5CF6",
      href: "/admin/collections/media",
    },
    {
      label: "ผลงาน",
      value: stats.gallery,
      icon: <Globe size={20} />,
      color: "#EC4899",
      href: "/admin/collections/gallery",
    },
    {
      label: "ข้อความ",
      value: stats.submissions,
      icon: <MessageSquare size={20} />,
      color: "#EF4444",
      href: "/admin/collections/submissions",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#006D6F] to-[#2D6A4F] rounded-xl flex items-center justify-center">
              <LayoutDashboard size={20} className="text-white" />
            </div>
            <div>
              <h1 className="font-montserrat text-2xl font-extrabold text-[#1A1A2E]">
                THZ Admin Dashboard
              </h1>
              <p className="text-sm text-gray-500">
                จัดการเว็บไซต์ หจก.โดมการช่าง
              </p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {statCards.map((stat) => (
            <a
              key={stat.label}
              href={stat.href}
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${stat.color}15` }}
                >
                  <span style={{ color: stat.color }}>{stat.icon}</span>
                </div>
                <ArrowRight
                  size={14}
                  className="text-gray-300 group-hover:text-gray-500 transition-colors"
                />
              </div>
              <p className="font-montserrat text-2xl font-bold text-[#1A1A2E]">
                {loading ? "-" : stat.value}
              </p>
              <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
            </a>
          ))}
        </div>

        {/* Quick Links Grid */}
        <div className="mb-8">
          <h2 className="font-montserrat text-lg font-bold text-[#1A1A2E] mb-4">
            เข้าถึงด่วน
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all group flex items-start gap-4"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${link.color}15` }}
                >
                  <span style={{ color: link.color }}>{link.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-montserrat font-bold text-sm text-[#1A1A2E] group-hover:text-[#006D6F] transition-colors">
                      {link.label}
                    </h3>
                    <ExternalLink
                      size={12}
                      className="text-gray-300 group-hover:text-[#006D6F] transition-colors"
                    />
                  </div>
                  <p className="text-xs text-gray-500 line-clamp-2">
                    {link.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Live Preview Banner */}
        <div className="bg-gradient-to-r from-[#006D6F] to-[#2D6A4F] rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Globe size={24} />
              </div>
              <div>
                <h3 className="font-montserrat font-bold text-lg">
                  ดูตัวอย่างเว็บไซต์
                </h3>
                <p className="text-white/80 text-sm">
                  ดูเว็บไซต์แบบ Real-time ที่ deploy แล้ว
                </p>
              </div>
            </div>
            <a
              href="https://thz-website-v2.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#006D6F] px-5 py-2.5 rounded-xl font-montserrat font-bold text-sm hover:bg-gray-100 transition-all flex items-center gap-2"
            >
              เปิดเว็บไซต์
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center text-xs text-gray-400">
          <p>
            THZ Website v2 — Powered by Next.js + Payload CMS + MongoDB Atlas
          </p>
        </div>
      </div>
    </div>
  );
}
