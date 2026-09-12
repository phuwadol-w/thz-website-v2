"use client";

import { ReactNode } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical, Eye, EyeOff } from "lucide-react";
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
// แสดง drag handle + label เมื่อ hover
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

          {/* Top-left: Section label + visibility */}
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
          </div>

          {/* Content offset for drag handle */}
          <div className="ml-10" />
        </>
      )}

      {/* Section Content */}
      {children}
    </div>
  );
}
