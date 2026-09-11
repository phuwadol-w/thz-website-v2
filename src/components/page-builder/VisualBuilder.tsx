"use client";

import { useState, useEffect, useCallback } from "react";
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
import {
  Save,
  Loader2,
  CheckCircle,
  Undo2,
  Eye,
  EyeOff,
  Layout,
  Smartphone,
  Monitor,
  Tablet,
  ExternalLink,
} from "lucide-react";
import { useBuilder } from "./BuilderProvider";
import ComponentSidebar from "./ComponentSidebar";
import DraggableSection from "./DraggableSection";
import SectionRenderer from "./SectionRenderer";
import EditSidebar from "./EditSidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ═══════════════════════════════════════════════════════
// Types
// ═══════════════════════════════════════════════════════
interface HomepageData {
  [key: string]: any;
}

// ═══════════════════════════════════════════════════════
// Visual Builder — Full-page page builder
// ═══════════════════════════════════════════════════════
export default function VisualBuilder() {
  const {
    isEditMode,
    sectionOrder,
    setSectionOrder,
    selectedSection,
    isDirty,
    isSaving,
    saveSuccess,
    toastMessage,
    saveAllChanges,
    sectionVisibility,
    sidebarCollapsed,
  } = useBuilder();

  const [homepage, setHomepage] = useState<HomepageData | null>(null);
  const [navigation, setNavigation] = useState<any>(null);
  const [footerConfig, setFooterConfig] = useState<any>(null);
  const [settings, setSettings] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [previewDevice, setPreviewDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");

  // ═══ Fetch Data ═══
  useEffect(() => {
    async function fetchData() {
      try {
        const [hpRes, navRes, footerRes, settingsRes] = await Promise.all([
          fetch("/api/homepage").then((r) => r.json()),
          fetch("/api/navigation").then((r) => r.json()),
          fetch("/api/footer-config").then((r) => r.json()),
          fetch("/api/settings").then((r) => r.json()),
        ]);

        const hpData = hpRes?.docs?.[0] || hpRes?.doc || hpRes || {};
        setHomepage(hpData);
        setNavigation(navRes?.docs?.[0] || navRes?.doc || navRes || {});
        setFooterConfig(footerRes?.docs?.[0] || footerRes?.doc || footerRes || {});
        setSettings(settingsRes?.docs?.[0] || settingsRes?.doc || settingsRes || {});

        // Load section order from CMS if available
        if (hpData.sectionOrder && Array.isArray(hpData.sectionOrder)) {
          setSectionOrder(hpData.sectionOrder);
        }
      } catch (error) {
        console.error("Failed to fetch builder data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ═══ DnD Sensors ═══
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 8 },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // ═══ DnD Handlers ═══
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

  // ═══ Get section data for edit sidebar ═══
  const getSectionData = useCallback(() => {
    if (!selectedSection) return {};
    switch (selectedSection) {
      case "navigation":
        return navigation || {};
      case "footer":
        return footerConfig || {};
      case "settings":
        return settings || {};
      default:
        return homepage || {};
    }
  }, [selectedSection, navigation, footerConfig, settings, homepage]);

  // ═══ Loading State ═══
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

  // ═══ Visible sections ═══
  const visibleSections = sectionOrder.filter(
    (id) => sectionVisibility[id] !== false
  );

  // ═══ Preview width ═══
  const previewWidthClass = {
    desktop: "w-full",
    tablet: "max-w-[768px]",
    mobile: "max-w-[375px]",
  }[previewDevice];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ═══════════════════════════════════════════════════ */}
      {/* Top Toolbar */}
      {/* ═══════════════════════════════════════════════════ */}
      <motion.div
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-[9999] h-12 bg-gradient-to-r from-[#1a73e8] to-[#0d47a1] shadow-lg shadow-blue-900/30 flex items-center justify-between px-4"
      >
        {/* Left: Logo + Device Preview */}
        <div className="flex items-center gap-3">
          <span className="font-montserrat font-bold text-white text-sm hidden sm:block">
            THZ Page Builder
          </span>
          <div className="h-5 w-px bg-white/30 hidden sm:block" />

          {/* Device Preview Toggle */}
          <div className="flex items-center bg-white/10 rounded-lg p-0.5">
            {[
              { id: "desktop" as const, icon: Monitor, label: "Desktop" },
              { id: "tablet" as const, icon: Tablet, label: "Tablet" },
              { id: "mobile" as const, icon: Smartphone, label: "Mobile" },
            ].map(({ id, icon: Icon, label }) => (
              <button
                key={id}
                onClick={() => setPreviewDevice(id)}
                className={`p-1.5 rounded-md transition-all ${
                  previewDevice === id
                    ? "bg-white text-[#1a73e8] shadow-sm"
                    : "text-white/60 hover:text-white"
                }`}
                title={label}
              >
                <Icon size={14} />
              </button>
            ))}
          </div>
        </div>

        {/* Center: Status */}
        <div className="flex items-center gap-2">
          {isSaving && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 text-white/80 text-xs"
            >
              <Loader2 size={14} className="animate-spin" />
              <span>กำลังบันทึก...</span>
            </motion.div>
          )}
          {saveSuccess && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-2 text-green-300 text-xs"
            >
              <CheckCircle size={14} />
              <span>บันทึกสำเร็จ!</span>
            </motion.div>
          )}
          {isDirty && !isSaving && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 text-yellow-300 text-xs"
            >
              <Undo2 size={14} />
              <span>มีการเปลี่ยนแปลงที่ยังไม่ได้บันทึก</span>
            </motion.div>
          )}
        </div>

        {/* Right: Save + Preview */}
        <div className="flex items-center gap-2">
          {/* View live site */}
          <a
            href="/"
            target="_blank"
            className="flex items-center gap-1.5 bg-white/20 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:bg-white/30 transition-colors"
          >
            <ExternalLink size={12} />
            <span className="hidden sm:block">ดูเว็บจริง</span>
          </a>

          {/* Save button */}
          <button
            onClick={saveAllChanges}
            disabled={isSaving || !isDirty}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
              isDirty && !isSaving
                ? "bg-white text-[#1a73e8] shadow-md hover:shadow-lg"
                : "bg-white/20 text-white/50 cursor-not-allowed"
            }`}
          >
            {isSaving ? (
              <>
                <Loader2 size={14} className="animate-spin" />
                <span>กำลังบันทึก...</span>
              </>
            ) : (
              <>
                <Save size={14} />
                <span>บันทึกทั้งหมด</span>
              </>
            )}
          </button>
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════════════════ */}
      {/* Main Layout */}
      {/* ═══════════════════════════════════════════════════ */}
      <div className="pt-12 min-h-screen flex">
        {/* Left Sidebar */}
        <AnimatePresence>
          {isEditMode && <ComponentSidebar />}
        </AnimatePresence>

        {/* Main Content Area */}
        <div
          className={`flex-1 transition-all duration-300 ${
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
                <Layout size={14} />
                <span className="font-semibold">โหมดแก้ไข</span>
                <span className="text-blue-200">· คลิกปุ่ม ✏️ บนแต่ละส่วนเพื่อแก้ไข</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-200">{visibleSections.length} ส่วนที่แสดง</span>
              </div>
            </div>
          )}

          {/* Website Preview */}
          <div className={`mx-auto ${previewWidthClass} transition-all duration-300`}>
            {/* Device frame for tablet/mobile */}
            {previewDevice !== "desktop" && (
              <div className="bg-gray-800 rounded-t-3xl mx-4 mt-4 p-2 flex items-center justify-center">
                <div className="w-20 h-1 bg-gray-600 rounded-full" />
              </div>
            )}

            <div
              className={`bg-white shadow-2xl ${
                previewDevice !== "desktop"
                  ? "mx-4 rounded-b-3xl overflow-hidden"
                  : ""
              }`}
            >
              {/* ═══ DnD Context ═══ */}
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
                  {/* ═══ Navbar (not draggable) ═══ */}
                  <div className={!isEditMode ? "" : "relative"}>
                    {isEditMode && (
                      <div className="absolute top-2 left-3 z-20 bg-gray-700 text-white text-xs px-2 py-1 rounded-md font-medium opacity-60">
                        🧭 Navigation (ไม่สามารถลากได้)
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
                      ctaPhone={String(
                        navigation?.ctaPhone || settings?.phone || "081-300-1932"
                      )}
                      ctaFacebook={String(
                        navigation?.ctaFacebook ||
                          settings?.facebook ||
                          "https://www.facebook.com/domekarnchang/"
                      )}
                    />
                  </div>

                  {/* ═══ Draggable Sections ═══ */}
                  {visibleSections.map((sectionId) => (
                    <DraggableSection
                      key={sectionId}
                      sectionId={sectionId}
                      label={
                        {
                          hero: "Hero — ส่วนหลัก",
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
                          hero: "🏠",
                          stats: "📊",
                          brands: "🏷️",
                          products: "📦",
                          gallery: "🖼️",
                          whyChooseUs: "✅",
                          testimonials: "💬",
                          cta: "📞",
                        }[sectionId] || "📝"
                      }
                    >
                      <SectionRenderer
                        sectionId={sectionId}
                        homepage={homepage || {}}
                      />
                    </DraggableSection>
                  ))}

                  {/* ═══ Footer (not draggable) ═══ */}
                  <div className={!isEditMode ? "" : "relative"}>
                    {isEditMode && (
                      <div className="absolute top-2 left-3 z-20 bg-gray-700 text-white text-xs px-2 py-1 rounded-md font-medium opacity-60">
                        📋 Footer (ไม่สามารถลากได้)
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

            {/* Device frame bottom */}
            {previewDevice !== "desktop" && (
              <div className="bg-gray-800 rounded-b-3xl mx-4 mb-4 p-3 flex items-center justify-center">
                <div className="w-16 h-16 border-2 border-gray-600 rounded-full" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════ */}
      {/* Edit Sidebar (Right) — when section is selected */}
      {/* ═══════════════════════════════════════════════════ */}
      {isEditMode && selectedSection && (
        <EditSidebar currentData={getSectionData()} />
      )}

      {/* ═══════════════════════════════════════════════════ */}
      {/* Toast Notification */}
      {/* ═══════════════════════════════════════════════════ */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -20, x: "-50%" }}
            className="fixed top-16 left-1/2 z-[10000] bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl shadow-xl shadow-green-900/30 font-semibold text-sm flex items-center gap-2"
          >
            <CheckCircle size={18} />
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
