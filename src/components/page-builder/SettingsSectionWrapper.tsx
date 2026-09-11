"use client";

import { ReactNode } from "react";
import SectionOverlay from "./SectionOverlay";

// ═══════════════════════════════════════════════════════
// Settings Section Wrapper
// Wraps the entire page with Settings overlay
// (for editing global settings like phone, email, etc.)
// ═══════════════════════════════════════════════════════
interface SettingsSectionWrapperProps {
  children: ReactNode;
}

export default function SettingsSectionWrapper({
  children,
}: SettingsSectionWrapperProps) {
  return (
    <SectionOverlay sectionId="settings" label="Settings" icon="⚙️">
      {children}
    </SectionOverlay>
  );
}
