"use client";

import { useState, useEffect } from "react";
import {
  Palette,
  Check,
  ArrowRight,
  Loader2,
  Layout,
  Sparkles,
  Zap,
  Crown,
  Leaf,
} from "lucide-react";

// ═══════════════════════════════════════════════════════
// THZ Template Gallery — ReadyPlanet-style
// เลือกเทมเพลต 5 แบบ แล้วใช้ได้ทันที
// ═══════════════════════════════════════════════════════

interface Template {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    bg: string;
    text: string;
  };
  font: string;
  style: string;
  preview: {
    heroGradient: string;
    cardStyle: string;
    buttonStyle: string;
  };
}

const templates: Template[] = [
  {
    id: "modern",
    name: "Modern Teal",
    description: "โทนสีเขียวเข้ม-ทอง ทันสมัย ดูมืออาชีพ",
    icon: <Sparkles size={20} />,
    colors: {
      primary: "#006D6F",
      secondary: "#2D6A4F",
      accent: "#D4AF37",
      bg: "#FFFFFF",
      text: "#1A1A2E",
    },
    font: "Montserrat",
    style: "ทันสมัย",
    preview: {
      heroGradient: "linear-gradient(135deg, #006D6F 0%, #2D6A4F 100%)",
      cardStyle: "rounded-2xl shadow-lg",
      buttonStyle: "rounded-xl font-bold",
    },
  },
  {
    id: "classic",
    name: "Classic Blue",
    description: "โทนสีน้ำเงิน-ขาว คลาสสิก น่าเชื่อถือ",
    icon: <Crown size={20} />,
    colors: {
      primary: "#1E40AF",
      secondary: "#3B82F6",
      accent: "#F59E0B",
      bg: "#F8FAFC",
      text: "#1E293B",
    },
    font: "Inter",
    style: "คลาสสิก",
    preview: {
      heroGradient: "linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)",
      cardStyle: "rounded-xl shadow-md",
      buttonStyle: "rounded-lg font-semibold",
    },
  },
  {
    id: "minimal",
    name: "Minimal White",
    description: "โทนสีขาว-เทา เรียบง่าย สะอาดตา",
    icon: <Layout size={20} />,
    colors: {
      primary: "#374151",
      secondary: "#6B7280",
      accent: "#10B981",
      bg: "#FFFFFF",
      text: "#111827",
    },
    font: "Inter",
    style: "เรียบง่าย",
    preview: {
      heroGradient: "linear-gradient(135deg, #374151 0%, #6B7280 100%)",
      cardStyle: "rounded-lg border",
      buttonStyle: "rounded-md font-medium",
    },
  },
  {
    id: "bold",
    name: "Bold Orange",
    description: "โทนสีส้ม-ดำ กล้าหาญ โดดเด่น",
    icon: <Zap size={20} />,
    colors: {
      primary: "#EA580C",
      secondary: "#F97316",
      accent: "#1A1A2E",
      bg: "#FFFBEB",
      text: "#1C1917",
    },
    font: "Montserrat",
    style: "โดดเด่น",
    preview: {
      heroGradient: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
      cardStyle: "rounded-2xl shadow-xl",
      buttonStyle: "rounded-full font-extrabold",
    },
  },
  {
    id: "nature",
    name: "Nature Green",
    description: "โทนสีเขียวธรรมชาติ สดชื่น เป็นมิตร",
    icon: <Leaf size={20} />,
    colors: {
      primary: "#059669",
      secondary: "#10B981",
      accent: "#FBBF24",
      bg: "#F0FDF4",
      text: "#064E3B",
    },
    font: "Inter",
    style: "ธรรมชาติ",
    preview: {
      heroGradient: "linear-gradient(135deg, #059669 0%, #10B981 100%)",
      cardStyle: "rounded-2xl shadow-md",
      buttonStyle: "rounded-xl font-bold",
    },
  },
];

export default function TemplateGallery() {
  const [selectedTemplate, setSelectedTemplate] = useState<string>("modern");
  const [applying, setApplying] = useState(false);
  const [applied, setApplied] = useState(false);
  const [currentTemplate, setCurrentTemplate] = useState<string>("modern");

  // Load current template from Settings
  useEffect(() => {
    async function loadSettings() {
      try {
        const res = await fetch("/api/globals/settings");
        if (res.ok) {
          const data = await res.json();
          if (data.template) {
            setCurrentTemplate(data.template);
            setSelectedTemplate(data.template);
          }
        }
      } catch (err) {
        console.error("Failed to load settings:", err);
      }
    }
    loadSettings();
  }, []);

  // Apply template
  const handleApply = async () => {
    setApplying(true);
    try {
      const template = templates.find((t) => t.id === selectedTemplate);
      if (!template) return;

      // Update Settings global with new template + colors
      const res = await fetch("/api/globals/settings", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          template: selectedTemplate,
          primaryColor: template.colors.primary,
          secondaryColor: template.colors.secondary,
          accentColor: template.colors.accent,
          bgColor: template.colors.bg,
          textColor: template.colors.text,
          fontPrimary: template.font,
        }),
      });

      if (res.ok) {
        setApplied(true);
        setCurrentTemplate(selectedTemplate);
        setTimeout(() => setApplied(false), 3000);
      }
    } catch (err) {
      console.error("Failed to apply template:", err);
    } finally {
      setApplying(false);
    }
  };

  const selected = templates.find((t) => t.id === selectedTemplate);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] rounded-xl flex items-center justify-center">
              <Palette size={20} className="text-white" />
            </div>
            <div>
              <h1 className="font-montserrat text-2xl font-extrabold text-[#1A1A2E]">
                Template Gallery
              </h1>
              <p className="text-sm text-gray-500">
                เลือกเทมเพลตสำหรับเว็บไซต์ THZ — คลิกเลือกแล้วกดใช้งาน
              </p>
            </div>
          </div>
          {currentTemplate && (
            <div className="mt-3 inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1.5 rounded-lg text-sm">
              <Check size={14} />
              เทมเพลตปัจจุบัน:{" "}
              <strong>
                {templates.find((t) => t.id === currentTemplate)?.name}
              </strong>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Template List */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {templates.map((template) => (
                <button
                  key={template.id}
                  onClick={() => setSelectedTemplate(template.id)}
                  className={`bg-white rounded-2xl p-5 text-left transition-all border-2 ${
                    selectedTemplate === template.id
                      ? "border-[#006D6F] shadow-lg ring-2 ring-[#006D6F]/20"
                      : "border-gray-100 hover:border-gray-200 hover:shadow-md"
                  }`}
                >
                  {/* Color Preview */}
                  <div
                    className="h-32 rounded-xl mb-4 flex items-center justify-center"
                    style={{ background: template.preview.heroGradient }}
                  >
                    <div className="text-center text-white">
                      <div className="text-3xl font-bold mb-1">THZ</div>
                      <div className="text-sm opacity-80">
                        {template.style}
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span style={{ color: template.colors.primary }}>
                          {template.icon}
                        </span>
                        <h3 className="font-montserrat font-bold text-[#1A1A2E]">
                          {template.name}
                        </h3>
                      </div>
                      <p className="text-xs text-gray-500">
                        {template.description}
                      </p>
                    </div>
                    {selectedTemplate === template.id && (
                      <div className="w-6 h-6 bg-[#006D6F] rounded-full flex items-center justify-center flex-shrink-0">
                        <Check size={14} className="text-white" />
                      </div>
                    )}
                  </div>

                  {/* Color Dots */}
                  <div className="flex gap-2 mt-3">
                    {Object.entries(template.colors).map(([key, color]) => (
                      <div
                        key={key}
                        className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: color }}
                        title={key}
                      />
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Preview Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-6">
              <h3 className="font-montserrat font-bold text-[#1A1A2E] mb-4">
                ตัวอย่างเทมเพลต
              </h3>

              {selected && (
                <>
                  {/* Mini Preview */}
                  <div
                    className="rounded-xl p-6 mb-4 text-center"
                    style={{ background: selected.preview.heroGradient }}
                  >
                    <div className="text-white">
                      <div className="text-2xl font-bold mb-2">THZ</div>
                      <div className="text-sm opacity-80 mb-3">
                        หจก.โดมการช่าง
                      </div>
                      <div
                        className={`inline-block px-4 py-2 text-sm font-bold text-[${selected.colors.primary}] bg-white rounded-lg`}
                      >
                        ดูสินค้า
                      </div>
                    </div>
                  </div>

                  {/* Color Palette */}
                  <div className="mb-4">
                    <h4 className="text-xs font-bold text-gray-500 uppercase mb-2">
                      สีที่ใช้
                    </h4>
                    <div className="grid grid-cols-5 gap-2">
                      {Object.entries(selected.colors).map(([key, color]) => (
                        <div key={key} className="text-center">
                          <div
                            className="w-full h-10 rounded-lg mb-1"
                            style={{ backgroundColor: color }}
                          />
                          <span className="text-[10px] text-gray-400 capitalize">
                            {key}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Font */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-gray-500 uppercase mb-2">
                      ฟอนต์
                    </h4>
                    <p
                      className="text-lg font-bold text-[#1A1A2E]"
                      style={{ fontFamily: selected.font }}
                    >
                      {selected.font}
                    </p>
                  </div>

                  {/* Apply Button */}
                  <button
                    onClick={handleApply}
                    disabled={applying || selectedTemplate === currentTemplate}
                    className="w-full bg-[#006D6F] text-white py-3 rounded-xl font-montserrat font-bold text-sm hover:bg-[#005555] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {applying ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        กำลังใช้งาน...
                      </>
                    ) : applied ? (
                      <>
                        <Check size={16} />
                        ใช้งานแล้ว!
                      </>
                    ) : selectedTemplate === currentTemplate ? (
                      "เทมเพลตนี้กำลังใช้งานอยู่"
                    ) : (
                      <>
                        ใช้เทมเพลตนี้
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
