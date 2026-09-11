"use client";

import { ReactNode } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { motion } from "framer-motion";
import {
  Pencil,
  GripVertical,
  Eye,
  EyeOff,
  Trash2,
} from "lucide-react";
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
// Component — wraps each section with drag-and-drop
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
    selectSection,
    selectedSection,
    sectionVisibility,
    toggleSectionVisibility,
    removeSection,
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
    opacity: isDragging ? 0.4 : 1,
    zIndex: isDragging ? 9999 : "auto" as string | number,
  };

  const isSelected = selectedSection === sectionId;
  const isVisible = sectionVisibility[sectionId] !== false;

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`relative group ${className} ${!isVisible ? "opacity-30 pointer-events-none" : ""} ${isDragging ? "ring-4 ring-blue-400 rounded-xl" : ""}`}
      data-section-id={sectionId}
      data-section-label={label}
    >
      {/* ═══ Edit Mode Overlays ═══ */}
      {isEditMode && (
        <>
          {/* Dashed border on hover */}
          <div
            className={`absolute inset-0 pointer-events-none z-10 transition-all duration-200 rounded-xl ${
              isSelected
                ? "border-2 border-blue-500 shadow-[inset_0_0_0_2px_rgba(59,130,246,0.3)]"
                : "border-2 border-dashed border-blue-400/50 opacity-0 group-hover:opacity-100"
            }`}
          />

          {/* Section label badge — top left */}
          <div
            className={`absolute top-3 left-3 z-20 flex items-center gap-1.5 bg-[#1a73e8] text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg transition-all duration-200 ${
              isSelected
                ? "opacity-100 translate-y-0"
                : "opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-1"
            }`}
          >
            <span className="text-sm">{icon}</span>
            <span>{label}</span>
          </div>

          {/* Action buttons — top right */}
          <div
            className={`absolute top-3 right-3 z-20 flex items-center gap-1.5 transition-all duration-200 ${
              isSelected
                ? "opacity-100 translate-y-0"
                : "opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-1"
            }`}
          >
            {/* Visibility toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                toggleSectionVisibility(sectionId);
              }}
              className="w-8 h-8 bg-white/90 backdrop-blur-sm text-gray-600 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
              title={isVisible ? "ซ่อน секциия" : "แสดง секциия"}
            >
              {isVisible ? <Eye size={14} /> : <EyeOff size={14} />}
            </motion.button>

            {/* Edit button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                selectSection(sectionId);
              }}
              className="w-8 h-8 bg-[#1a73e8] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#1557b0] transition-colors"
              title="แก้ไข секциия"
            >
              <Pencil size={14} />
            </motion.button>

            {/* Delete button (for non-essential sections) */}
            {!["hero", "cta"].includes(sectionId) && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  if (confirm(`ต้องการลบ "${label}" ออกหรือไม่?`)) {
                    removeSection(sectionId);
                  }
                }}
                className="w-8 h-8 bg-red-500/90 backdrop-blur-sm text-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors"
                title="ลบ секциия"
              >
                <Trash2 size={14} />
              </motion.button>
            )}
          </div>

          {/* Drag handle — top center */}
          <div
            {...attributes}
            {...listeners}
            className={`absolute top-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1 bg-white/90 backdrop-blur-sm text-gray-500 px-3 py-1.5 rounded-full shadow-lg cursor-grab active:cursor-grabbing transition-all duration-200 hover:bg-white hover:text-[#1a73e8] ${
              isSelected
                ? "opacity-100 translate-y-0"
                : "opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-1"
            }`}
          >
            <GripVertical size={14} />
            <span className="text-xs font-medium">ลากเพื่อจัดเรียง</span>
          </div>
        </>
      )}

      {/* ═══ Section Content ═══ */}
      {children}
    </div>
  );
}
