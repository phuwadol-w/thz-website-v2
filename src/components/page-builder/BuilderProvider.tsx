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
  saveAllChanges: () => Promise<boolean>;
  uploadImage: (file: File) => Promise<string | null>;
  showToast: (message: string) => void;
  sectionOrder: string[];
  setSectionOrder: (order: string[]) => void;
  sectionVisibility: Record<string, boolean>;
  toggleSectionVisibility: (sectionId: string) => void;
  addSection: (sectionId: string) => void;
  removeSection: (sectionId: string) => void;
  sidebarCollapsed: boolean;
  toggleSidebar: () => void;
  pendingChanges: Record<string, Record<string, unknown>>;
  addPendingChange: (sectionId: string, data: Record<string, unknown>) => void;
}

const BuilderContext = createContext<BuilderContextType | null>(null);

// ═══════════════════════════════════════════════════════
// Section config mapping
// ═══════════════════════════════════════════════════════
export const SECTION_GLOBAL_MAP: Record<string, string> = {
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

// Default section order
const DEFAULT_SECTION_ORDER = [
  "hero",
  "stats",
  "brands",
  "products",
  "gallery",
  "whyChooseUs",
  "testimonials",
  "cta",
];

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
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Section order for drag-and-drop reordering
  const [sectionOrder, setSectionOrderState] = useState<string[]>(DEFAULT_SECTION_ORDER);

  // Section visibility (eye toggle)
  const [sectionVisibility, setSectionVisibility] = useState<Record<string, boolean>>({});

  // Pending changes (buffer for batch save)
  const [pendingChanges, setPendingChanges] = useState<Record<string, Record<string, unknown>>>({});

  // ═══ Section Order ═══
  const setSectionOrder = useCallback((order: string[]) => {
    setSectionOrderState(order);
    setIsDirty(true);
  }, []);

  // ═══ Section Visibility ═══
  const toggleSectionVisibility = useCallback((sectionId: string) => {
    setSectionVisibility((prev) => ({
      ...prev,
      [sectionId]: prev[sectionId] === false ? true : false,
    }));
    setIsDirty(true);
  }, []);

  // ═══ Add / Remove Section ═══
  const addSection = useCallback((sectionId: string) => {
    setSectionOrderState((prev) => {
      if (prev.includes(sectionId)) return prev;
      return [...prev, sectionId];
    });
    setIsDirty(true);
  }, []);

  const removeSection = useCallback((sectionId: string) => {
    setSectionOrderState((prev) => prev.filter((id) => id !== sectionId));
    setIsDirty(true);
  }, []);

  // ═══ Sidebar ═══
  const toggleSidebar = useCallback(() => {
    setSidebarCollapsed((prev) => !prev);
  }, []);

  // ═══ Edit Mode ═══
  const toggleEditMode = useCallback(() => {
    setIsEditMode((prev) => {
      if (prev) {
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

  // ═══ Pending Changes ═══
  const addPendingChange = useCallback(
    (sectionId: string, data: Record<string, unknown>) => {
      setPendingChanges((prev) => ({
        ...prev,
        [sectionId]: { ...(prev[sectionId] || {}), ...data },
      }));
      setIsDirty(true);
    },
    []
  );

  // ═══ Save Single Section ═══
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

  // ═══ Save All Changes (section order + pending data) ═══
  const saveAllChanges = useCallback(async (): Promise<boolean> => {
    setIsSaving(true);
    try {
      // 1. Save section order to homepage global
      const orderResponse = await fetch("/api/homepage", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sectionOrder }),
      });

      if (!orderResponse.ok) {
        showToast("เกิดข้อผิดพลาดในการบันทึกลำดับส่วน");
        return false;
      }

      // 2. Save pending section data
      const sectionIds = Object.keys(pendingChanges);
      for (const sectionId of sectionIds) {
        const globalSlug = SECTION_GLOBAL_MAP[sectionId];
        if (!globalSlug) continue;

        const data = pendingChanges[sectionId];
        const response = await fetch(`/api/${globalSlug}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          console.error(`Failed to save section: ${sectionId}`);
        }
      }

      // 3. Clear pending changes
      setPendingChanges({});
      setIsDirty(false);
      setSaveSuccess(true);
      showToast("บันทึกทั้งหมดสำเร็จ!");
      setTimeout(() => setSaveSuccess(false), 1500);
      return true;
    } catch (error) {
      console.error("Save all error:", error);
      showToast("เกิดข้อผิดพลาดในการบันทึก");
      return false;
    } finally {
      setIsSaving(false);
    }
  }, [sectionOrder, pendingChanges, showToast]);

  // ═══ Upload Image ═══
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
    saveAllChanges,
    uploadImage,
    showToast,
    sectionOrder,
    setSectionOrder,
    sectionVisibility,
    toggleSectionVisibility,
    addSection,
    removeSection,
    sidebarCollapsed,
    toggleSidebar,
    pendingChanges,
    addPendingChange,
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
