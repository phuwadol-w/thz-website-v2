"use client";

import { BuilderProvider } from "./BuilderProvider";
import HomepageSections from "@/components/HomepageSections";

// ═══════════════════════════════════════════════════════
// PublicBuilderWrapper — wraps HomepageSections with BuilderProvider
// isEditMode defaults to false → SectionOverlay renders but no edit UI
// ═══════════════════════════════════════════════════════
export default function PublicBuilderWrapper({ homepage }: { homepage: Record<string, any> | null }) {
  return (
    <BuilderProvider initialData={{ homepage }}>
      <HomepageSections homepage={homepage} />
    </BuilderProvider>
  );
}
