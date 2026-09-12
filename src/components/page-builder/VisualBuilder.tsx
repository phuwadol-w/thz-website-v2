"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragStartEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useBuilder } from "./BuilderProvider";
import ComponentSidebar from "./ComponentSidebar";
import DraggableSection from "./DraggableSection";
import SectionRenderer from "./SectionRenderer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ═══════════════════════════════════════════════════════
// Visual Builder — Elementor-style inline editing
// คลิกข้อความบนหน้าเว็บ → แก้ไขได้เลย
// คลิกรูปภาพ → เลือกรูปใหม่ได้เลย
// ═══════════════════════════════════════════════════════
export default function VisualBuilder() {
  const {
    isEditMode,
    sectionOrder,
    setSectionOrder,
    sectionVisibility,
    sidebarCollapsed,
    homepageData,
    navigationData,
    footerData,
    settingsData,
  } = useBuilder();

  const [activeId, setActiveId] = useState<string | null>(null);

  // Data comes from BuilderProvider context (fetched by AdminBuilderWrapper)
  const homepage = homepageData || {};
  const navigation = navigationData || {};
  const footerConfig = footerData || {};
  const settings = settingsData || {};

  // ═══ DnD Sensors ═══
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 3 },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = useCallback((event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  }, []);

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;
      setActiveId(null);
      if (!over || active.id === over.id) return;
      const oldIndex = sectionOrder.indexOf(active.id as string);
      const newIndex = sectionOrder.indexOf(over.id as string);
      if (oldIndex !== -1 && newIndex !== -1) {
        setSectionOrder(arrayMove(sectionOrder, oldIndex, newIndex));
      }
    },
    [sectionOrder, setSectionOrder]
  );

  // Loading is handled by AdminBuilderWrapper

  const visibleSections = sectionOrder.filter(
    (id) => sectionVisibility[id] !== false
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ═══ Left Sidebar — FLOATING ═══ */}
      <AnimatePresence>
        {isEditMode && (
          <motion.div
            initial={{ x: -288, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -288, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-12 left-0 bottom-0 z-[9990]"
          >
            <ComponentSidebar />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══ Main Content ═══ */}
      <div
        className={`transition-all duration-300 ${
          isEditMode
            ? sidebarCollapsed
              ? "ml-16"
              : "ml-72"
            : "ml-0"
        }`}
      >
        {/* Edit mode indicator */}
        {isEditMode && (
          <div className="sticky top-12 z-[9980] bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 flex items-center justify-between text-xs shadow-md">
            <div className="flex items-center gap-2">
              <span className="font-semibold">โหมดแก้ไข</span>
              <span className="text-blue-200">· คลิกข้อความเพื่อแก้ไข · คลิกรูปเพื่อเปลี่ยน · ลากส่วนเพื่อจัดเรียง</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-200">{visibleSections.length} ส่วน</span>
            </div>
          </div>
        )}

        {/* Website Content — FULL WIDTH with inline editing */}
        <div className="bg-white">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={sectionOrder}
              strategy={verticalListSortingStrategy}
            >
              {/* Navbar */}
              <div className={!isEditMode ? "" : "relative"}>
                {isEditMode && (
                  <div className="absolute top-2 left-14 z-20 bg-gray-700 text-white text-xs px-2 py-1 rounded-md font-medium opacity-60">
                    🧭 Navigation
                  </div>
                )}
                <Navbar
                  navLinks={navigation?.navLinks?.map((link: any) => ({
                    label: String(link.label || ""),
                    href: String(link.href || ""),
                    children: link.children?.map((child: any) => ({
                      label: String(child.label || ""),
                      href: String(child.href || ""),
                    })),
                  }))}
                  ctaPhone={String(navigation?.ctaPhone || settings?.phone || "081-300-1932")}
                  ctaFacebook={String(navigation?.ctaFacebook || settings?.facebook || "https://www.facebook.com/domekarnchang/")}
                />
              </div>

              {/* Draggable Sections with inline editing */}
              {visibleSections.map((sectionId) => (
                <DraggableSection
                  key={sectionId}
                  sectionId={sectionId}
                  label={
                    {
                      hero: "Hero",
                      stats: "Trust Bar",
                      brands: "Brands",
                      products: "Products",
                      gallery: "Gallery",
                      whyChooseUs: "Why Choose Us",
                      testimonials: "Testimonials",
                      cta: "CTA",
                    }[sectionId] || sectionId
                  }
                  icon={
                    {
                      hero: "🏠", stats: "📊", brands: "🏷️", products: "📦",
                      gallery: "🖼️", whyChooseUs: "✅", testimonials: "💬", cta: "📞",
                    }[sectionId] || "📝"
                  }
                >
                  <SectionRenderer sectionId={sectionId} homepage={homepageData || {}} />
                </DraggableSection>
              ))}

              {/* Footer */}
              <div className={!isEditMode ? "" : "relative"}>
                {isEditMode && (
                  <div className="absolute top-2 left-14 z-20 bg-gray-700 text-white text-xs px-2 py-1 rounded-md font-medium opacity-60">
                    📋 Footer
                  </div>
                )}
                <Footer
                  description={String(footerConfig?.description || "")}
                  productLinks={footerConfig?.productLinks?.map((link: any) => ({
                    label: String(link.label || ""),
                    href: String(link.href || ""),
                  }))}
                  serviceLinks={footerConfig?.serviceLinks?.map((link: any) => ({
                    label: String(link.label || ""),
                  }))}
                  copyright={String(footerConfig?.copyright || "")}
                  madeIn={String(footerConfig?.madeIn || "")}
                  phone={String(settings?.phone || "081-300-1932")}
                  email={String(settings?.email || "THZ@gmail.com")}
                  address={String(settings?.address || "")}
                  facebook={String(settings?.facebook || "")}
                />
              </div>
            </SortableContext>
          </DndContext>
        </div>
      </div>
    </div>
  );
}
