"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

// ═══════════════════════════════════════════════════════
// Types
// ═══════════════════════════════════════════════════════
interface BuilderState {
  isEditMode: boolean;
  selectedSection: string | null;
  sidebarOpen: boolean;
  isDirty: boolean;
  isSaving: boolean;
  saveSuccess: boolean;
  toastMessage: string | null;
}

interface BuilderContextType extends BuilderState {
  toggleEditMode: () => void;
  selectSection: (sectionId: string | null) => void;
  closeSidebar: () => void;
  markDirty: () => void;
  markClean: () => void;
  saveSection: (sectionId: string, data: Record<string, unknown>) => Promise<boolean>;
  uploadImage: (file: File) => Promise<string | null>;
  showToast: (message: string) => void;
  sectionOrder: string[];
  setSectionOrder: (order: string[]) => void;
}

const BuilderContext = createContext<BuilderContextType | null>(null);

// ═══════════════════════════════════════════════════════
// Section config mapping
// ═══════════════════════════════════════════════════════
const SECTION_GLOBAL_MAP: Record<string, string> = {
  hero: "homepage",
  stats: "homepage",
  brands: "homepage",
  products: "homepage",
  gallery: "homepage",
  whyChooseUs: "homepage",
  testimonials: "homepage",
  cta: "homepage",
  navigation: "navigation",
  footer: "footer-config",
  settings: "settings",
};

// ═══════════════════════════════════════════════════════
// Provider Component
// ═══════════════════════════════════════════════════════
export function BuilderProvider({ children }: { children: ReactNode }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [sectionOrder, setSectionOrder] = useState<string[]>([
    "hero",
    "stats",
    "brands",
    "products",
    "gallery",
    "whyChooseUs",
    "testimonials",
    "cta",
  ]);

  const toggleEditMode = useCallback(() => {
    setIsEditMode((prev) => {
      if (prev) {
        // Exiting edit mode
        setSelectedSection(null);
        setSidebarOpen(false);
        setIsDirty(false);
      }
      return !prev;
    });
  }, []);

  const selectSection = useCallback((sectionId: string | null) => {
    setSelectedSection(sectionId);
    setSidebarOpen(sectionId !== null);
  }, []);

  const closeSidebar = useCallback(() => {
    setSelectedSection(null);
    setSidebarOpen(false);
  }, []);

  const markDirty = useCallback(() => setIsDirty(true), []);
  const markClean = useCallback(() => setIsDirty(false), []);

  const showToast = useCallback((message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000);
  }, []);

  // Save section data to Payload CMS
  const saveSection = useCallback(
    async (sectionId: string, data: Record<string, unknown>): Promise<boolean> => {
      const globalSlug = SECTION_GLOBAL_MAP[sectionId];
      if (!globalSlug) {
        showToast("ไม่พบ global slug สำหรับ section นี้");
        return false;
      }

      setIsSaving(true);
      try {
        const response = await fetch(`/api/${globalSlug}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          const error = await response.json();
          console.error("Save error:", error);
          showToast("เกิดข้อผิดพลาดในการบันทึก");
          return false;
        }

        setIsDirty(false);
        setSaveSuccess(true);
        showToast("บันทึกสำเร็จ!");
        setTimeout(() => setSaveSuccess(false), 1500);
        return true;
      } catch (error) {
        console.error("Save error:", error);
        showToast("เกิดข้อผิดพลาดในการเชื่อมต่อ");
        return false;
      } finally {
        setIsSaving(false);
      }
    },
    [showToast]
  );

  // Upload image to Payload Media collection
  const uploadImage = useCallback(
    async (file: File): Promise<string | null> => {
      try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("alt", file.name.replace(/\.[^/.]+$/, ""));

        const response = await fetch("/api/media", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          showToast("เกิดข้อผิดพลาดในการอัพโหลดรูปภาพ");
          return null;
        }

        const result = await response.json();
        return result.doc?.url || result.url || null;
      } catch (error) {
        console.error("Upload error:", error);
        showToast("เกิดข้อผิดพลาดในการอัพโหลด");
        return null;
      }
    },
    [showToast]
  );

  const value: BuilderContextType = {
    isEditMode,
    selectedSection,
    sidebarOpen,
    isDirty,
    isSaving,
    saveSuccess,
    toastMessage,
    toggleEditMode,
    selectSection,
    closeSidebar,
    markDirty,
    markClean,
    saveSection,
    uploadImage,
    showToast,
    sectionOrder,
    setSectionOrder,
  };

  return (
    <BuilderContext.Provider value={value}>
      {children}
    </BuilderContext.Provider>
  );
}

// ═══════════════════════════════════════════════════════
// Hook
// ═══════════════════════════════════════════════════════
export function useBuilder() {
  const context = useContext(BuilderContext);
  if (!context) {
    throw new Error("useBuilder must be used within a BuilderProvider");
  }
  return context;
}
