"use client";

import { useBuilder } from "./BuilderProvider";
import EditSidebar from "./EditSidebar";

// ═══════════════════════════════════════════════════════
// Homepage Sidebar — passes correct data to EditSidebar
// based on which section the user clicked to edit
// ═══════════════════════════════════════════════════════
interface HomepageSidebarProps {
  homepage: Record<string, unknown>;
  navigation: Record<string, unknown>;
  footerConfig: Record<string, unknown>;
  settings: Record<string, unknown>;
}

export default function HomepageSidebar({
  homepage,
  navigation,
  footerConfig,
  settings,
}: HomepageSidebarProps) {
  const { selectedSection, isEditMode } = useBuilder();

  if (!isEditMode || !selectedSection) return null;

  // Determine which data source to use based on section
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
      // hero, stats, brands, products, gallery, whyChooseUs, testimonials, cta
      sectionData = homepage || {};
      break;
  }

  return <EditSidebar currentData={sectionData} />;
}
