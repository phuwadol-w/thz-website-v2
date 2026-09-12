"use client";

import { useState, useEffect, useCallback } from "react";
import { Puck, Render } from "@puckeditor/core";
import "@puckeditor/core/puck.css";
import { puckConfig } from "@/lib/puck/config";
import {
  Loader2,
  Save,
  Eye,
  ArrowLeft,
  CheckCircle,
  LayoutDashboard,
  Palette,
  Settings,
  Globe,
  Plus,
  ChevronDown,
  Sparkles,
} from "lucide-react";

// ═══════════════════════════════════════════════════════
// THZ Enhanced Puck Editor — ReadyPlanet-style
// Visual Page Builder ที่ใช้งานง่าย เหมือนเลือก Template
// ═══════════════════════════════════════════════════════

interface PageData {
  id: string;
  title: string;
  slug: string;
  layout: any;
  published: boolean;
}

// Component descriptions for easy understanding
const componentDescriptions: Record<string, { name: string; description: string; icon: string }> = {
  Hero: { name: "ส่วนหัวหลัก", description: "ข้อความหลัก + ปุ่ม CTA + รูปภาพ", icon: "🎯" },
  Stats: { name: "ตัวเลขสรุป", description: "สถิติสำคัญ เช่น ปีประสบการณ์, โครงการ", icon: "📊" },
  Brands: { name: "แบรนด์สินค้า", description: "แสดง 3 แบรนด์: THZ Play, Bench, Furniture", icon: "🏷️" },
  Products: { name: "สินค้าแนะนำ", description: "แสดงสินค้าขายดีพร้อมรูปและรายละเอียด", icon: "📦" },
  Gallery: { name: "ผลงานติดตั้ง", description: "รูปภาพผลงานติดตั้งทั่วประเทศ", icon: "🖼️" },
  WhyChooseUs: { name: "ทำไมต้อง THZ", description: "จุดเด่นและข้อดีของบริษัท", icon: "✅" },
  Testimonials: { name: "เสียงลูกค้า", description: "รีวิวจากลูกค้าที่ใช้บริการ", icon: "💬" },
  CTA: { name: "ปุ่มติดต่อ", description: "ปุ่มโทรหรือแชท Facebook", icon: "📞" },
  NavbarBlock: { name: "เมนูนำทาง", description: "แถบเมนูด้านบนเว็บไซต์", icon: " navigation" },
  FooterBlock: { name: "ส่วนท้าย", description: "ข้อมูลลิขสิทธิ์และติดต่อ", icon: "📄" },
};

export default function EnhancedPuckEditor() {
  const [pages, setPages] = useState<PageData[]>([]);
  const [selectedPage, setSelectedPage] = useState<PageData | null>(null);
  const [puckData, setPuckData] = useState<any>({ content: [], root: {}, zones: {} });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [viewMode, setViewMode] = useState<"editor" | "preview">("editor");
  const [error, setError] = useState<string | null>(null);
  const [showComponentHelp, setShowComponentHelp] = useState(false);

  // ═══ Load pages from CMS ═══
  useEffect(() => {
    async function loadPages() {
      try {
        const res = await fetch("/api/pages?limit=50");
        if (res.ok) {
          const data = await res.json();
          const pageList = data.docs || data || [];
          setPages(pageList);

          // Auto-select homepage or first page
          const homepage = pageList.find((p: PageData) => p.slug === "/") || pageList[0];
          if (homepage) {
            selectPage(homepage);
          }
        }
      } catch (err) {
        console.error("Failed to load pages:", err);
        setError("ไม่สามารถโหลดข้อมูลหน้าได้");
      } finally {
        setLoading(false);
      }
    }
    loadPages();
  }, []);

  // ═══ Select page ═══
  const selectPage = useCallback((page: PageData) => {
    setSelectedPage(page);
    setPuckData(page.layout || { content: [], root: {}, zones: {} });
    setSaveSuccess(false);
    setError(null);
  }, []);

  // ═══ Save layout ═══
  const handleSave = useCallback(async () => {
    if (!selectedPage) return;
    setSaving(true);
    setError(null);
    try {
      const res = await fetch(`/api/pages/${selectedPage.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ layout: puckData }),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Failed to save");
      }

      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (err: any) {
      setError(err.message || "เกิดข้อผิดพลาดในการบันทึก");
    } finally {
      setSaving(false);
    }
  }, [selectedPage, puckData]);

  // ═══ Create new page ═══
  const handleCreatePage = useCallback(async (title: string, slug: string) => {
    try {
      const res = await fetch("/api/pages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          slug,
          layout: { content: [], root: {}, zones: {} },
          published: false,
        }),
      });

      if (res.ok) {
        const newPage = await res.json();
        setPages((prev) => [...prev, newPage.doc || newPage]);
      }
    } catch (err) {
      console.error("Failed to create page:", err);
    }
  }, []);

  // ═══ Loading state ═══
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 size={40} className="animate-spin text-[#006D6F] mx-auto mb-4" />
          <p className="text-gray-500 font-medium">กำลังโหลด Page Builder...</p>
        </div>
      </div>
    );
  }

  // ═══ No page selected — show page list (ReadyPlanet style) ═══
  if (!selectedPage) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#3B82F6] to-[#2563EB] rounded-xl flex items-center justify-center">
                <LayoutDashboard size={20} className="text-white" />
              </div>
              <div>
                <h1 className="font-montserrat text-2xl font-extrabold text-[#1A1A2E]">
                  Page Builder
                </h1>
                <p className="text-sm text-gray-500">
                  เลือกหน้าที่ต้องการแก้ไข — คลิกแล้วลากวาง components ได้เลย
                </p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <a
              href="/admin/dashboard"
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <LayoutDashboard size={18} className="text-blue-500" />
              </div>
              <div>
                <p className="font-montserrat font-bold text-sm text-[#1A1A2E]">Dashboard</p>
                <p className="text-xs text-gray-500">ภาพรวมเว็บไซต์</p>
              </div>
            </a>
            <a
              href="/admin/templates"
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                <Palette size={18} className="text-purple-500" />
              </div>
              <div>
                <p className="font-montserrat font-bold text-sm text-[#1A1A2E]">Templates</p>
                <p className="text-xs text-gray-500">เลือกเทมเพลต</p>
              </div>
            </a>
            <a
              href="/admin/globals/settings"
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center">
                <Settings size={18} className="text-gray-500" />
              </div>
              <div>
                <p className="font-montserrat font-bold text-sm text-[#1A1A2E]">Settings</p>
                <p className="text-xs text-gray-500">ตั้งค่าเว็บไซต์</p>
              </div>
            </a>
          </div>

          {/* Page List */}
          <div className="mb-4">
            <h2 className="font-montserrat text-lg font-bold text-[#1A1A2E] mb-4">
              เลือกหน้าที่ต้องการแก้ไข
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => selectPage(page)}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#006D6F] transition-all text-left group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#006D6F] to-[#2D6A4F] rounded-lg flex items-center justify-center text-white text-sm font-bold">
                    {page.slug === "/" ? "H" : page.title.charAt(0)}
                  </div>
                  <ArrowLeft size={14} className="text-gray-300 rotate-180 group-hover:text-[#006D6F] transition-colors" />
                </div>
                <h3 className="font-montserrat font-bold text-[#1A1A2E] mb-1 group-hover:text-[#006D6F] transition-colors">
                  {page.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{page.slug}</p>
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2 py-1 rounded-full ${page.published ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                    {page.published ? " Published" : " Draft"}
                  </span>
                  <span className="text-xs text-gray-400">
                    {page.layout?.content?.length || 0} components
                  </span>
                </div>
              </button>
            ))}

            {/* Create new page */}
            <button
              onClick={() => {
                const title = prompt("ชื่อหน้าใหม่:");
                const slug = prompt("Slug (เช่น /about):");
                if (title && slug) handleCreatePage(title, slug);
              }}
              className="bg-white rounded-xl p-6 shadow-sm border-2 border-dashed border-gray-300 hover:border-[#006D6F] hover:shadow-lg transition-all text-left group"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-50 group-hover:bg-[#006D6F]/10 rounded-xl flex items-center justify-center mx-auto mb-3 transition-colors">
                  <Plus size={20} className="text-gray-400 group-hover:text-[#006D6F] transition-colors" />
                </div>
                <h3 className="font-montserrat font-bold text-[#1A1A2E] group-hover:text-[#006D6F] transition-colors">
                  สร้างหน้าใหม่
                </h3>
                <p className="text-xs text-gray-500 mt-1">คลิกเพื่อสร้างหน้าใหม่</p>
              </div>
            </button>
          </div>

          {/* Component Guide */}
          <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={18} className="text-[#D4AF37]" />
              <h3 className="font-montserrat font-bold text-[#1A1A2E]">
                คู่มือ Components
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {Object.entries(componentDescriptions).slice(0, 8).map(([key, desc]) => (
                <div key={key} className="bg-gray-50 rounded-lg p-3">
                  <div className="text-lg mb-1">{desc.icon}</div>
                  <p className="font-montserrat font-bold text-xs text-[#1A1A2E]">{desc.name}</p>
                  <p className="text-[10px] text-gray-500 mt-1">{desc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══ Enhanced Puck Editor ═══
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top toolbar — ReadyPlanet style */}
      <div className="fixed top-0 left-0 right-0 z-[9999] h-14 bg-white border-b border-gray-200 shadow-sm flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSelectedPage(null)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 text-sm"
          >
            <ArrowLeft size={16} />
            <span>กลับ</span>
          </button>
          <div className="h-5 w-px bg-gray-200" />
          <div>
            <h2 className="font-montserrat font-bold text-sm text-[#1A1A2E]">{selectedPage.title}</h2>
            <p className="text-xs text-gray-500">{selectedPage.slug}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Component Help Toggle */}
          <button
            onClick={() => setShowComponentHelp(!showComponentHelp)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              showComponentHelp ? "bg-[#006D6F] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            <Sparkles size={12} />
            คู่มือ
          </button>

          {/* View mode toggle */}
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode("editor")}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                viewMode === "editor" ? "bg-white shadow text-[#006D6F]" : "text-gray-500"
              }`}
            >
              แก้ไข
            </button>
            <button
              onClick={() => setViewMode("preview")}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                viewMode === "preview" ? "bg-white shadow text-[#006D6F]" : "text-gray-500"
              }`}
            >
              <Eye size={12} className="inline mr-1" />
              ดูตัวอย่าง
            </button>
          </div>

          {/* Save button */}
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 bg-[#006D6F] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#005555] transition-all disabled:opacity-50"
          >
            {saving ? (
              <Loader2 size={14} className="animate-spin" />
            ) : saveSuccess ? (
              <CheckCircle size={14} />
            ) : (
              <Save size={14} />
            )}
            {saving ? "กำลังบันทึก..." : saveSuccess ? "บันทึกสำเร็จ!" : "บันทึก"}
          </button>
        </div>
      </div>

      {/* Error message */}
      {error && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-[9998] bg-red-500 text-white px-6 py-3 rounded-xl shadow-lg text-sm">
          {error}
        </div>
      )}

      {/* Component Help Panel */}
      {showComponentHelp && (
        <div className="fixed top-14 right-0 w-80 h-[calc(100vh-56px)] bg-white border-l border-gray-200 shadow-lg z-[9997] overflow-y-auto p-4">
          <h3 className="font-montserrat font-bold text-[#1A1A2E] mb-4">คู่มือ Components</h3>
          <p className="text-xs text-gray-500 mb-4">
            ลาก components จากด้านซ้ายไปวางบนหน้าเว็บ แล้วคลิกเพื่อแก้ไข
          </p>
          <div className="space-y-3">
            {Object.entries(componentDescriptions).map(([key, desc]) => (
              <div key={key} className="bg-gray-50 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">{desc.icon}</span>
                  <p className="font-montserrat font-bold text-sm text-[#1A1A2E]">{desc.name}</p>
                </div>
                <p className="text-xs text-gray-500">{desc.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Puck Editor or Preview */}
      <div className="pt-14">
        {viewMode === "editor" ? (
          <Puck
            config={puckConfig}
            data={puckData}
            onPublish={(data) => {
              setPuckData(data);
              handleSave();
            }}
            onChange={(data) => setPuckData(data)}
          />
        ) : (
          <div className="min-h-screen">
            <Render config={puckConfig} data={puckData} />
          </div>
        )}
      </div>
    </div>
  );
}
