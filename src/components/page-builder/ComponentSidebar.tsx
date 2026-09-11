"use client";

import { useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { motion, AnimatePresence } from "framer-motion";
import {
  GripVertical,
  Eye,
  EyeOff,
  Pencil,
  ChevronLeft,
  ChevronRight,
  Plus,
  Layout,
  Trash2,
} from "lucide-react";
import { useBuilder, SECTION_GLOBAL_MAP } from "./BuilderProvider";
import { SECTION_CONFIGS } from "./builder-configs";

// ═══════════════════════════════════════════════════════
// Sortable Section Item
// ═══════════════════════════════════════════════════════
function SortableSectionItem({
  sectionId,
  onEdit,
}: {
  sectionId: string;
  onEdit: (id: string) => void;
}) {
  const {
    sectionVisibility,
    toggleSectionVisibility,
    removeSection,
    selectedSection,
  } = useBuilder();

  const config = SECTION_CONFIGS[sectionId];
  const isVisible = sectionVisibility[sectionId] !== false;
  const isSelected = selectedSection === sectionId;

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
    zIndex: isDragging ? 9999 : "auto" as string | number,
  };

  if (!config) return null;

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`flex items-center gap-2 px-3 py-2.5 rounded-xl transition-all duration-200 group ${
        isSelected
          ? "bg-blue-50 border border-blue-200 shadow-sm"
          : "hover:bg-gray-50 border border-transparent"
      } ${isDragging ? "shadow-xl ring-2 ring-blue-400" : ""}`}
    >
      {/* Drag handle */}
      <button
        {...attributes}
        {...listeners}
        className="flex-shrink-0 p-1 text-gray-400 hover:text-gray-600 cursor-grab active:cursor-grabbing"
      >
        <GripVertical size={16} />
      </button>

      {/* Section icon */}
      <span className="text-lg flex-shrink-0">{config.icon}</span>

      {/* Section label */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-800 truncate">
          {config.label.split("—")[0].trim()}
        </p>
        {config.label.includes("—") && (
          <p className="text-xs text-gray-400 truncate">
            {config.label.split("—")[1]?.trim()}
          </p>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        {/* Visibility toggle */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleSectionVisibility(sectionId);
          }}
          className={`p-1 rounded-md transition-colors ${
            isVisible
              ? "text-gray-400 hover:text-gray-600 hover:bg-gray-100"
              : "text-red-400 hover:text-red-600 hover:bg-red-50"
          }`}
          title={isVisible ? "ซ่อน" : "แสดง"}
        >
          {isVisible ? <Eye size={14} /> : <EyeOff size={14} />}
        </button>

        {/* Edit button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onEdit(sectionId);
          }}
          className="p-1 rounded-md text-gray-400 hover:text-[#1a73e8] hover:bg-blue-50 transition-colors"
          title="แก้ไข"
        >
          <Pencil size={14} />
        </button>

        {/* Delete button */}
        {!["hero", "cta"].includes(sectionId) && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (confirm(`ต้องการลบ "${config.label.split("—")[0].trim()}" ออกหรือไม่?`)) {
                removeSection(sectionId);
              }
            }}
            className="p-1 rounded-md text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
            title="ลบ"
          >
            <Trash2 size={14} />
          </button>
        )}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// Main Sidebar Component
// ═══════════════════════════════════════════════════════
export default function ComponentSidebar() {
  const {
    isEditMode,
    sectionOrder,
    setSectionOrder,
    selectSection,
    addSection,
    sectionVisibility,
    sidebarCollapsed,
    toggleSidebar,
  } = useBuilder();

  const [showAddMenu, setShowAddMenu] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // Handle drag end — reorder sections
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = sectionOrder.indexOf(active.id as string);
    const newIndex = sectionOrder.indexOf(over.id as string);

    if (oldIndex !== -1 && newIndex !== -1) {
      setSectionOrder(arrayMove(sectionOrder, oldIndex, newIndex));
    }
  }

  // Sections available to add (not currently in the list)
  const availableSections = Object.keys(SECTION_CONFIGS).filter(
    (id) => !sectionOrder.includes(id)
  );

  if (!isEditMode) return null;

  return (
    <motion.div
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className={`fixed top-12 left-0 bottom-0 z-[9990] bg-white border-r border-gray-200 shadow-xl shadow-black/5 flex flex-col transition-all duration-300 ${
        sidebarCollapsed ? "w-16" : "w-72"
      }`}
    >
      {/* ═══ Header ═══ */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50/50">
        {!sidebarCollapsed && (
          <div className="flex items-center gap-2">
            <Layout size={18} className="text-[#1a73e8]" />
            <h3 className="font-montserrat font-bold text-sm text-gray-800">
              จัดการส่วน
            </h3>
          </div>
        )}
        <button
          onClick={toggleSidebar}
          className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors text-gray-500"
        >
          {sidebarCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      {/* ═══ Section List ═══ */}
      {!sidebarCollapsed && (
        <div className="flex-1 overflow-y-auto px-3 py-3">
          <p className="text-xs text-gray-400 mb-3 px-1">
            ลากเพื่อจัดเรียง · คลิก ✏️ เพื่อแก้ไข
          </p>

          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={sectionOrder}
              strategy={verticalListSortingStrategy}
            >
              <div className="space-y-1">
                {sectionOrder.map((sectionId) => (
                  <SortableSectionItem
                    key={sectionId}
                    sectionId={sectionId}
                    onEdit={(id) => selectSection(id)}
                  />
                ))}
              </div>
            </SortableContext>
          </DndContext>

          {/* ═══ Add Section ═══ */}
          {availableSections.length > 0 && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <button
                onClick={() => setShowAddMenu(!showAddMenu)}
                className="w-full flex items-center justify-center gap-2 py-2.5 border border-dashed border-gray-300 rounded-xl text-sm text-gray-500 hover:border-[#1a73e8] hover:text-[#1a73e8] hover:bg-blue-50/50 transition-all"
              >
                <Plus size={16} />
                <span>เพิ่มส่วน</span>
              </button>

              <AnimatePresence>
                {showAddMenu && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden mt-2 space-y-1"
                  >
                    {availableSections.map((sectionId) => {
                      const config = SECTION_CONFIGS[sectionId];
                      return (
                        <button
                          key={sectionId}
                          onClick={() => {
                            addSection(sectionId);
                            setShowAddMenu(false);
                          }}
                          className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-blue-50 hover:text-[#1a73e8] transition-colors"
                        >
                          <span>{config.icon}</span>
                          <span>{config.label.split("—")[0].trim()}</span>
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      )}

      {/* ═══ Collapsed Icons ═══ */}
      {sidebarCollapsed && (
        <div className="flex-1 overflow-y-auto py-3 space-y-1 px-2">
          {sectionOrder.map((sectionId) => {
            const config = SECTION_CONFIGS[sectionId];
            if (!config) return null;
            const isVisible = sectionVisibility[sectionId] !== false;
            return (
              <button
                key={sectionId}
                onClick={() => selectSection(sectionId)}
                className={`w-full p-2 rounded-lg text-center transition-colors ${
                  isVisible
                    ? "hover:bg-gray-100"
                    : "opacity-30 hover:bg-gray-100"
                }`}
                title={config.label}
              >
                <span className="text-lg">{config.icon}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* ═══ Footer ═══ */}
      {!sidebarCollapsed && (
        <div className="px-4 py-3 border-t border-gray-100 bg-gray-50/50">
          <p className="text-xs text-gray-400 text-center">
            {sectionOrder.length} ส่วน · ลากเพื่อจัดเรียง
          </p>
        </div>
      )}
    </motion.div>
  );
}
