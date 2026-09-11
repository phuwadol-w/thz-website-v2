"use client";

import { ReactNode } from "react";
import SectionOverlay from "./SectionOverlay";

// ═══════════════════════════════════════════════════════
// Navbar Section Wrapper
// Wraps the Navbar with SectionOverlay
// ═══════════════════════════════════════════════════════
interface NavbarSectionWrapperProps {
  children: ReactNode;
  navigation: Record<string, unknown>;
}

export default function NavbarSectionWrapper({
  children,
}: NavbarSectionWrapperProps) {
  return (
    <SectionOverlay sectionId="navigation" label="Navigation" icon="🧭">
      {children}
    </SectionOverlay>
  );
}
