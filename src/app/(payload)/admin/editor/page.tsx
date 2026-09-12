"use client";

import { useState, useEffect, useCallback } from "react";
import { Puck, Render } from "@puckeditor/core";
import "@puckeditor/core/puck.css";
import { puckConfig } from "@/lib/puck/config";
import { Loader2, Save, Eye, ArrowLeft, CheckCircle } from "lucide-react";

// ═══════════════════════════════════════════════════════
// Puck Admin Editor — Full page builder for THZ Website
// ═══════════════════════════════════════════════════════

interface PageData {
  id: string;
  title: string;
  slug: string;
  layout: any;
  published: boolean;
}

export default function PuckEditor() {
  const [pages, setPages] = useState<PageData[]>([]);
  const [selectedPage, setSelectedPage] = useState<PageData | null>(null);
  const [puckData, setPuckData] = useState<any>({ content: [], root: {}, zones: {} });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [viewMode, setViewMode] = useState<"editor" | "preview">("editor");
  const [error, setError] = useState<string | null>(null);

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
          <Loader2 size={40} className="animate-spin text-[#1a73e8] mx-auto mb-4" />
          <p className="text-gray-500 font-medium">กำลังโหลด Puck Editor...</p>
        </div>
      </div>
    );
  }

  // ═══ No page selected — show page list ═══
  if (!selectedPage) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-montserrat text-3xl font-extrabold text-text-dark mb-8">
            เลือกหน้าที่ต้องการแก้ไข
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => selectPage(page)}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-left border border-gray-100"
              >
                <h3 className="font-montserrat font-bold text-text-dark mb-2">{page.title}</h3>
                <p className="text-sm text-gray-500">{page.slug}</p>
                <div className="mt-3 flex items-center gap-2">
                  <span className={`text-xs px-2 py-1 rounded-full ${page.published ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                    {page.published ? "Published" : "Draft"}
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
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-left border-2 border-dashed border-gray-300 hover:border-[#1a73e8]"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl text-[#1a73e8]">+</span>
                </div>
                <h3 className="font-montserrat font-bold text-text-dark">สร้างหน้าใหม่</h3>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ═══ Puck Editor ═══
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top toolbar */}
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
            <h2 className="font-montserrat font-bold text-sm text-text-dark">{selectedPage.title}</h2>
            <p className="text-xs text-gray-500">{selectedPage.slug}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* View mode toggle */}
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode("editor")}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                viewMode === "editor" ? "bg-white shadow text-[#1a73e8]" : "text-gray-500"
              }`}
            >
              Editor
            </button>
            <button
              onClick={() => setViewMode("preview")}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                viewMode === "preview" ? "bg-white shadow text-[#1a73e8]" : "text-gray-500"
              }`}
            >
              <Eye size={12} className="inline mr-1" />
              Preview
            </button>
          </div>

          {/* Save button */}
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 bg-[#1a73e8] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#1557b0] transition-all disabled:opacity-50"
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
