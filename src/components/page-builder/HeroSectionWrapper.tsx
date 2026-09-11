"use client";

import { ReactNode } from "react";
import SectionOverlay from "./SectionOverlay";

// ═══════════════════════════════════════════════════════
// Hero Section Wrapper
// Wraps the Hero component with SectionOverlay
// ═══════════════════════════════════════════════════════
interface HeroSectionWrapperProps {
  children: ReactNode;
  homepage: Record<string, unknown>;
}

export default function HeroSectionWrapper({
  children,
}: HeroSectionWrapperProps) {
  return (
    <SectionOverlay sectionId="hero" label="Hero" icon="🏠">
      {children}
    </SectionOverlay>
  );
}
