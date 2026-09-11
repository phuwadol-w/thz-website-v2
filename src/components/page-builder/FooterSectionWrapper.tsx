"use client";

import { ReactNode } from "react";
import SectionOverlay from "./SectionOverlay";

// ═══════════════════════════════════════════════════════
// Footer Section Wrapper
// Wraps the Footer with SectionOverlay
// ═══════════════════════════════════════════════════════
interface FooterSectionWrapperProps {
  children: ReactNode;
  footerConfig: Record<string, unknown>;
}

export default function FooterSectionWrapper({
  children,
}: FooterSectionWrapperProps) {
  return (
    <SectionOverlay sectionId="footer" label="Footer" icon="📋">
      {children}
    </SectionOverlay>
  );
}
