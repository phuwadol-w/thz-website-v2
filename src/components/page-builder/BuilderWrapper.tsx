"use client";

import { BuilderProvider } from "./BuilderProvider";

// ═══════════════════════════════════════════════════════
// Client-side wrapper — wraps app with BuilderProvider only
// BuilderToolbar is rendered separately in AdminBuilderWrapper
// Public pages get BuilderProvider (for isEditMode=false) but no toolbar
// ═══════════════════════════════════════════════════════
export default function BuilderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <BuilderProvider>
      {children}
    </BuilderProvider>
  );
}
