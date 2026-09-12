"use client";

import { useState, useCallback } from "react";
import { Puck, Render } from "@puckeditor/core";
import { puckConfig } from "@/lib/puck/config";
import { useEdit } from "@/lib/puck/EditContext";
import { Save, X, Loader2, CheckCircle } from "lucide-react";

// ═══════════════════════════════════════════════════════
// InlinePuckEditor — Wraps page content with Puck editor
// when edit mode is active. Shows Puck sidebar + preview.
// ═══════════════════════════════════════════════════════

interface InlinePuckEditorProps {
  slug: string;
  initialLayout: any;
  children: React.ReactNode; // The normal page content
}

export default function InlinePuckEditor({ slug, initialLayout, children }: InlinePuckEditorProps) {
  const { isEditing, stopEditing } = useEdit();
  const [data, setData] = useState(initialLayout || { content: [], root: {}, zones: {} });
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = useCallback(async () => {
    setSaving(true);
    try {
      // Find or create page
      const listRes = await fetch(`/api/puck/pages?where[slug][equals]=${encodeURIComponent(slug)}`);
      const listData = await listRes.json();
      const existing = listData.docs?.[0];

      if (existing) {
        await fetch(`/api/puck/pages/${existing.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ layout: data }),
        });
      } else {
        await fetch("/api/puck/pages", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ slug, title: slug === "/" ? "หน้าแรก" : slug.replace("/", ""), layout: data, published: true }),
        });
      }

      setSaved(true);
      setTimeout(() => {
        setSaved(false);
        stopEditing();
        // Reload to show saved content
        window.location.reload();
      }, 1200);
    } catch (err) {
      console.error("Save error:", err);
      alert("เกิดข้อผิดพลาดในการบันทึก");
    } finally {
      setSaving(false);
    }
  }, [slug, data, stopEditing]);

  // Not editing — show normal page content
  if (!isEditing) {
    return <>{children}</>;
  }

  // Editing — show Puck editor with preview
  return (
    <div className="relative">
      {/* Save bar */}
      <div className="fixed top-0 left-0 right-0 z-[10001] bg-blue-600 text-white px-4 py-2.5 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-sm">✏️ กำลังแก้ไขหน้า: {slug}</span>
          {saved && (
            <span className="flex items-center gap-1 text-green-200 text-sm">
              <CheckCircle size={14} /> บันทึกแล้ว
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleSave}
            disabled={saving || saved}
            className="flex items-center gap-1.5 bg-white text-blue-600 px-4 py-1.5 rounded-lg text-sm font-semibold hover:bg-blue-50 transition-all disabled:opacity-50"
          >
            {saving ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />}
            {saving ? "กำลังบันทึก..." : saved ? "บันทึกแล้ว" : "บันทึก"}
          </button>
          <button
            onClick={stopEditing}
            className="flex items-center gap-1.5 bg-red-500 text-white px-4 py-1.5 rounded-lg text-sm font-semibold hover:bg-red-600 transition-all"
          >
            <X size={14} /> ยกเลิก
          </button>
        </div>
      </div>

      {/* Puck Editor */}
      <div className="pt-12">
        <Puck
          config={puckConfig}
          data={data}
          onPublish={(newData: any) => {
            setData(newData);
          }}
        />
      </div>
    </div>
  );
}
