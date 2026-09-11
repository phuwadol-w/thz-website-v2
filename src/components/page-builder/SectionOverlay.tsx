"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Pencil, GripVertical } from "lucide-react";
import { useBuilder } from "./BuilderProvider";

// ═══════════════════════════════════════════════════════
// Types
// ═══════════════════════════════════════════════════════
interface SectionOverlayProps {
  sectionId: string;
  label: string;
  icon?: string;
  children: ReactNode;
  className?: string;
}

// ═══════════════════════════════════════════════════════
// Component
// ═══════════════════════════════════════════════════════
export default function SectionOverlay({
  sectionId,
  label,
  icon = "📝",
  children,
  className = "",
}: SectionOverlayProps) {
  const { isEditMode, selectSection, selectedSection } = useBuilder();

  const isSelected = selectedSection === sectionId;

  return (
    <div
      className={`relative group ${className}`}
      data-section-id={sectionId}
    >
      {/* Edit mode overlays */}
      {isEditMode && (
        <>
          {/* Dashed border on hover */}
          <div
            className={`absolute inset-0 pointer-events-none z-10 transition-all duration-200 ${
              isSelected
                ? "border-2 border-blue-500 rounded-lg"
                : "border-2 border-dashed border-blue-400/60 rounded-lg opacity-0 group-hover:opacity-100"
            }`}
          />

          {/* Section label badge */}
          <div
            className={`absolute top-3 left-3 z-20 flex items-center gap-1.5 bg-[#1a73e8] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg transition-all duration-200 ${
              isSelected
                ? "opacity-100 translate-y-0"
                : "opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-1"
            }`}
          >
            <span>{icon}</span>
            <span>{label}</span>
          </div>

          {/* Edit button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              selectSection(sectionId);
            }}
            className={`absolute top-3 right-3 z-20 w-9 h-9 bg-[#1a73e8] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#1557b0] transition-colors ${
              isSelected
                ? "opacity-100 translate-y-0"
                : "opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-1"
            }`}
          >
            <Pencil size={14} />
          </motion.button>

          {/* Drag handle (top center) */}
          <div
            className={`absolute top-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1 bg-white/90 backdrop-blur-sm text-gray-500 px-2 py-1 rounded-lg shadow-md cursor-grab active:cursor-grabbing transition-all duration-200 ${
              isSelected
                ? "opacity-100 translate-y-0"
                : "opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-1"
            }`}
          >
            <GripVertical size={14} />
          </div>
        </>
      )}

      {/* Content */}
      {children}
    </div>
  );
}
