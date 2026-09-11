"use client";

import { useBuilder } from "./BuilderProvider";
import SectionOverlay from "./SectionOverlay";
import EditSidebar from "./EditSidebar";

// ═══════════════════════════════════════════════════════
// Types
// ═══════════════════════════════════════════════════════
interface HomepageSectionWrapperProps {
  sectionId: string;
  label: string;
  icon?: string;
  children: React.ReactNode;
  sectionData?: Record<string, unknown>;
}

// ═══════════════════════════════════════════════════════
// Section Wrapper — wraps each section with overlay
// ═══════════════════════════════════════════════════════
export function HomepageSectionWrapper({
  sectionId,
  label,
  icon,
  children,
  sectionData = {},
}: HomepageSectionWrapperProps) {
  const { isEditMode } = useBuilder();

  return (
    <SectionOverlay sectionId={sectionId} label={label} icon={icon}>
      {children}
    </SectionOverlay>
  );
}

// ═══════════════════════════════════════════════════════
// Global Sidebar — renders the edit sidebar for any section
// ═══════════════════════════════════════════════════════
interface GlobalSidebarProps {
  homepage: Record<string, unknown>;
  navigation: Record<string, unknown>;
  footerConfig: Record<string, unknown>;
  settings: Record<string, unknown>;
}

export function GlobalSidebar({
  homepage,
  navigation,
  footerConfig,
  settings,
}: GlobalSidebarProps) {
  const { selectedSection, isEditMode } = useBuilder();

  if (!isEditMode || !selectedSection) return null;

  // Determine which data to pass based on section
  let sectionData: Record<string, unknown> = {};
  switch (selectedSection) {
    case "navigation":
      sectionData = navigation || {};
      break;
    case "footer":
      sectionData = footerConfig || {};
      break;
    case "settings":
      sectionData = settings || {};
      break;
    default:
      sectionData = homepage || {};
      break;
  }

  return <EditSidebar currentData={sectionData} />;
}
