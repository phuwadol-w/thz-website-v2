"use client";

import { useState, useEffect } from "react";
import { BuilderProvider } from "./BuilderProvider";
import BuilderToolbar from "./BuilderToolbar";
import VisualBuilder from "./VisualBuilder";
import { Loader2 } from "lucide-react";

// ═══════════════════════════════════════════════════════
// AdminBuilderWrapper — wraps VisualBuilder with BuilderProvider
// Fetches initial data from CMS and passes to builder
// ═══════════════════════════════════════════════════════
export default function AdminBuilderWrapper() {
  const [initialData, setInitialData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [hpRes, navRes, footerRes, settingsRes] = await Promise.allSettled([
          fetch("/api/homepage").then((r) => r.json()),
          fetch("/api/navigation").then((r) => r.json()),
          fetch("/api/footer-config").then((r) => r.json()),
          fetch("/api/settings").then((r) => r.json()),
        ]);

        const hpData = hpRes.status === "fulfilled" ? hpRes.value : {};
        const navData = navRes.status === "fulfilled" ? navRes.value : {};
        const footerData = footerRes.status === "fulfilled" ? footerRes.value : {};
        const settingsData = settingsRes.status === "fulfilled" ? settingsRes.value : {};

        setInitialData({
          homepage: hpData,
          navigation: navData,
          footerConfig: footerData,
          settings: settingsData,
        });
      } catch (err) {
        console.error("Failed to fetch initial data:", err);
        setError("ไม่สามารถโหลดข้อมูลได้");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 size={40} className="animate-spin text-[#1a73e8] mx-auto mb-4" />
          <p className="text-gray-500 font-medium">กำลังโหลด Page Builder...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 font-medium mb-2">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="text-[#1a73e8] underline text-sm"
          >
            ลองใหม่
          </button>
        </div>
      </div>
    );
  }

  return (
    <BuilderProvider initialData={initialData}>
      <div className="min-h-screen bg-gray-100">
        <BuilderToolbar />
        <VisualBuilder />
      </div>
    </BuilderProvider>
  );
}
