"use client";

import { useState, useCallback, ReactNode } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical, Eye, EyeOff, Settings, ChevronUp, ChevronDown, Palette } from "lucide-react";
import { useBuilder } from "./BuilderProvider";

// ═══════════════════════════════════════════════════════
// Types
// ═══════════════════════════════════════════════════════
interface DraggableSectionProps {
  sectionId: string;
  label: string;
  icon?: string;
  children: ReactNode;
  className?: string;
}

// ═══════════════════════════════════════════════════════
// DraggableSection — Elementor-style section wrapper
// แสดง drag handle + label + settings เมื่อ hover
// ═══════════════════════════════════════════════════════
export default function DraggableSection({
  sectionId,
  label,
  icon = "📝",
  children,
  className = "",
}: DraggableSectionProps) {
  const {
    isEditMode,
    sectionVisibility,
    toggleSectionVisibility,
    addPendingChange,
    markDirty,
    showToast,
  } = useBuilder();

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: sectionId });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 9999 : ("auto" as string | number),
  };

  const isVisible = sectionVisibility[sectionId] !== false;

  // Section settings state
  const [showSettings, setShowSettings] = useState(false);
  const [sectionStyles, setSectionStyles] = useState({
    paddingTop: "0",
    paddingBottom: "0",
    marginTop: "0",
    marginBottom: "0",
    bgColor: "",
  });

  // Apply styles
  const applyStyles = useCallback(() => {
    const el = document.querySelector(`[data-section-id="${sectionId}"]`)?.children[0] as HTMLElement;
    if (el) {
      el.style.paddingTop = `${sectionStyles.paddingTop}px`;
      el.style.paddingBottom = `${sectionStyles.paddingBottom}px`;
      el.style.marginTop = `${sectionStyles.marginTop}px`;
      el.style.marginBottom = `${sectionStyles.marginBottom}px`;
      if (sectionStyles.bgColor) {
        el.style.backgroundColor = sectionStyles.bgColor;
      }

      // Save to CMS
      addPendingChange(sectionId, {
        styles: {
          paddingTop: sectionStyles.paddingTop,
          paddingBottom: sectionStyles.paddingBottom,
          marginTop: sectionStyles.marginTop,
          marginBottom: sectionStyles.marginBottom,
          bgColor: sectionStyles.bgColor,
        },
      });
      markDirty();
      showToast("บันทึกการตั้งค่า section แล้ว");
    }
  }, [sectionId, sectionStyles, addPendingChange, markDirty, showToast]);

  const handleStyleChange = useCallback((key: string, value: string) => {
    setSectionStyles((prev) => ({ ...prev, [key]: value }));
  }, []);

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`relative group/drag ${className} ${
        !isVisible ? "opacity-30 pointer-events-none" : ""
      } ${isDragging ? "ring-4 ring-blue-400 rounded-xl shadow-2xl" : ""}`}
      data-section-id={sectionId}
      data-section-label={label}
    >
      {/* ═══ Edit Mode: Hover border + Drag handle ═══ */}
      {isEditMode && (
        <>
          {/* Hover border */}
          <div
            className={`absolute inset-0 pointer-events-none z-10 transition-all duration-200 ${
              isDragging
                ? "border-2 border-blue-500"
                : "border-2 border-dashed border-blue-400/30 opacity-0 group-hover/drag:opacity-100"
            }`}
          />

          {/* Left: Drag handle (full height) */}
          <div
            {...attributes}
            {...listeners}
            className={`absolute top-0 left-0 bottom-0 z-20 w-10 flex flex-col items-center justify-center bg-blue-500/90 backdrop-blur-sm text-white cursor-grab active:cursor-grabbing transition-all duration-200 hover:bg-blue-600 ${
              isDragging ? "bg-blue-600 w-12" : "opacity-0 group-hover/drag:opacity-100"
            }`}
            title="ลากเพื่อจัดเรียง"
          >
            <GripVertical size={18} className="mb-1" />
            <span className="text-[9px] font-medium" style={{ writingMode: "vertical-rl" }}>
              ลาก
            </span>
          </div>

          {/* Top-left: Section label + controls */}
          <div className={`absolute top-2 left-12 z-20 flex items-center gap-1.5 transition-all duration-200 ${
            isDragging
              ? "opacity-100 translate-y-0"
              : "opacity-0 group-hover/drag:opacity-100 group-hover/drag:translate-y-0 translate-y-1"
          }`}>
            <span className="bg-gray-800/80 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full font-medium flex items-center gap-1.5">
              <span>{icon}</span>
              <span>{label}</span>
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleSectionVisibility(sectionId);
              }}
              className="w-7 h-7 bg-white/90 backdrop-blur-sm text-gray-500 rounded-full flex items-center justify-center shadow hover:bg-white transition-colors"
              title={isVisible ? "ซ่อน" : "แสดง"}
            >
              {isVisible ? <Eye size={13} /> : <EyeOff size={13} />}
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowSettings(!showSettings);
              }}
              className="w-7 h-7 bg-white/90 backdrop-blur-sm text-gray-500 rounded-full flex items-center justify-center shadow hover:bg-white transition-colors"
              title="ตั้งค่า Section"
            >
              <Settings size={13} />
            </button>
          </div>

          {/* Section Settings Panel */}
          {showSettings && (
            <div
              className="absolute top-12 left-12 z-30 bg-white rounded-xl shadow-2xl p-4 w-72 border border-gray-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-sm text-gray-800 flex items-center gap-2">
                  <Palette size={14} />
                  ตั้งค่า {label}
                </h4>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>

              <div className="space-y-3">
                {/* Padding */}
                <div>
                  <label className="text-xs font-medium text-gray-500 mb-2 block">Padding (px)</label>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="text-[10px] text-gray-400">บน</span>
                      <input
                        type="number"
                        value={sectionStyles.paddingTop}
                        onChange={(e) => handleStyleChange("paddingTop", e.target.value)}
                        className="w-full px-2 py-1.5 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-blue-400"
                        min="0"
                        max="200"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400">ล่าง</span>
                      <input
                        type="number"
                        value={sectionStyles.paddingBottom}
                        onChange={(e) => handleStyleChange("paddingBottom", e.target.value)}
                        className="w-full px-2 py-1.5 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-blue-400"
                        min="0"
                        max="200"
                      />
                    </div>
                  </div>
                </div>

                {/* Margin */}
                <div>
                  <label className="text-xs font-medium text-gray-500 mb-2 block">Margin (px)</label>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="text-[10px] text-gray-400">บน</span>
                      <input
                        type="number"
                        value={sectionStyles.marginTop}
                        onChange={(e) => handleStyleChange("marginTop", e.target.value)}
                        className="w-full px-2 py-1.5 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-blue-400"
                        min="-100"
                        max="200"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400">ล่าง</span>
                      <input
                        type="number"
                        value={sectionStyles.marginBottom}
                        onChange={(e) => handleStyleChange("marginBottom", e.target.value)}
                        className="w-full px-2 py-1.5 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-blue-400"
                        min="-100"
                        max="200"
                      />
                    </div>
                  </div>
                </div>

                {/* Background Color */}
                <div>
                  <label className="text-xs font-medium text-gray-500 mb-2 block">สีพื้นหลัง</label>
                  <div className="flex gap-2">
                    <input
                      type="color"
                      value={sectionStyles.bgColor || "#ffffff"}
                      onChange={(e) => handleStyleChange("bgColor", e.target.value)}
                      className="w-8 h-8 rounded-lg border border-gray-200 cursor-pointer"
                    />
                    <input
                      type="text"
                      value={sectionStyles.bgColor}
                      onChange={(e) => handleStyleChange("bgColor", e.target.value)}
                      placeholder="#ffffff"
                      className="flex-1 px-2 py-1.5 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-blue-400"
                    />
                  </div>
                </div>

                {/* Quick presets */}
                <div>
                  <label className="text-xs font-medium text-gray-500 mb-2 block">ระยะห่างด่วน</label>
                  <div className="flex gap-1.5">
                    {[
                      { label: "เล็ก", pt: "20", pb: "20" },
                      { label: "กลาง", pt: "40", pb: "40" },
                      { label: "ใหญ่", pt: "80", pb: "80" },
                      { label: "ไม่มี", pt: "0", pb: "0" },
                    ].map((preset) => (
                      <button
                        key={preset.label}
                        onClick={() => {
                          handleStyleChange("paddingTop", preset.pt);
                          handleStyleChange("paddingBottom", preset.pb);
                        }}
                        className="flex-1 px-2 py-1.5 bg-gray-100 hover:bg-blue-100 text-xs rounded-lg transition-colors"
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Apply button */}
                <button
                  onClick={applyStyles}
                  className="w-full py-2 bg-blue-500 text-white text-xs font-medium rounded-lg hover:bg-blue-600 transition-colors"
                >
                  ใช้การตั้งค่า
                </button>
              </div>
            </div>
          )}

          {/* Content offset for drag handle */}
          <div className="ml-10" />
        </>
      )}

      {/* Section Content */}
      {children}
    </div>
  );
}
