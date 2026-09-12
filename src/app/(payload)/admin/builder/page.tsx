"use client";

import { useState, useEffect } from "react";
import GrapesJSEditor from "@/components/grapesjs/GrapesJSEditor";

// ═══════════════════════════════════════════════════════
// /admin/builder — GrapesJS Visual Page Builder
// Select a page to edit, then drag-and-drop to build
// ═══════════════════════════════════════════════════════

const PAGES = [
  { slug: "/", label: "หน้าแรก (Homepage)" },
  { slug: "/about", label: "เกี่ยวกับเรา (About)" },
  { slug: "/contact", label: "ติดต่อเรา (Contact)" },
  { slug: "/products", label: "สินค้า (Products)" },
  { slug: "/gallery", label: "ผลงาน (Gallery)" },
];

export default function AdminBuilderPage() {
  const [selectedPage, setSelectedPage] = useState<string | null>(null);
  const [initialHtml, setInitialHtml] = useState("");
  const [initialCss, setInitialCss] = useState("");
  const [loading, setLoading] = useState(false);

  // Load existing page content when a page is selected
  useEffect(() => {
    if (!selectedPage) return;
    setLoading(true);
    fetch(`/api/puck/pages?where[slug][equals]=${encodeURIComponent(selectedPage)}`)
      .then(r => r.json())
      .then(data => {
        const page = data.docs?.[0];
        const layout = page?.layout;
        if (layout?.html) {
          setInitialHtml(layout.html);
          setInitialCss(layout.css || "");
        } else {
          setInitialHtml("");
          setInitialCss("");
        }
      })
      .catch(() => {
        setInitialHtml("");
        setInitialCss("");
      })
      .finally(() => setLoading(false));
  }, [selectedPage]);

  // If no page selected, show page selector
  if (!selectedPage) {
    return (
      <div style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Montserrat', sans-serif",
      }}>
        <div style={{
          background: "white",
          borderRadius: "24px",
          padding: "48px",
          maxWidth: "600px",
          width: "100%",
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
        }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <div style={{
              width: "80px",
              height: "80px",
              background: "linear-gradient(135deg, #2196F3, #4CAF50)",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
              fontSize: "36px",
            }}>
              🎨
            </div>
            <h1 style={{ fontSize: "28px", fontWeight: 900, color: "#1A1A2E", margin: "0 0 8px" }}>
              THZ Page Builder
            </h1>
            <p style={{ fontSize: "14px", color: "#6B7280", fontFamily: "'Kanit', sans-serif" }}>
              เลือกหน้าที่ต้องการแก้ไข
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {PAGES.map(page => (
              <button
                key={page.slug}
                onClick={() => setSelectedPage(page.slug)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "16px 20px",
                  border: "2px solid #E5E7EB",
                  borderRadius: "12px",
                  background: "white",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  textAlign: "left",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "#2196F3";
                  e.currentTarget.style.background = "#F0F7FF";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "#E5E7EB";
                  e.currentTarget.style.background = "white";
                }}
              >
                <span style={{ fontSize: "24px" }}>
                  {page.slug === "/" ? "🏠" : page.slug === "/about" ? "📋" : page.slug === "/contact" ? "📞" : page.slug === "/products" ? "📦" : "🖼️"}
                </span>
                <div>
                  <p style={{ fontWeight: 700, fontSize: "15px", color: "#1A1A2E", margin: 0 }}>{page.label}</p>
                  <p style={{ fontSize: "12px", color: "#9CA3AF", margin: "2px 0 0", fontFamily: "'Kanit', sans-serif" }}>{page.slug}</p>
                </div>
                <span style={{ marginLeft: "auto", color: "#9CA3AF", fontSize: "18px" }}>→</span>
              </button>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "24px" }}>
            <a
              href="/admin"
              style={{
                color: "#6B7280",
                fontSize: "13px",
                textDecoration: "none",
                fontFamily: "'Kanit', sans-serif",
              }}
            >
              ← กลับไป Payload Admin
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Show editor
  return (
    <div style={{ height: "100vh" }}>
      {loading ? (
        <div style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Montserrat', sans-serif",
        }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>⏳</div>
            <p style={{ color: "#6B7280" }}>กำลังโหลด...</p>
          </div>
        </div>
      ) : (
        <GrapesJSEditor
          pageSlug={selectedPage}
          initialHtml={initialHtml}
          initialCss={initialCss}
        />
      )}
    </div>
  );
}
